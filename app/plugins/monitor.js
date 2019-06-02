'use strict';

const prom = require('prom-client');
const collectDefaultMetrics = prom.collectDefaultMetrics;

// Probe every 5th second.

const defaults = {
  metricsPath: '/metrics',
  defaultMetrics: true,
  defaultLabels: false,
  labels: {
    buckets: ['method', 'path', 'status']
  },
  cachePollInterval: 60000,
  auth: false
};

const register = (server, pluginOptions) => {
  let defaultIntervalRef;
  const options = Object.assign({}, defaults, pluginOptions);
  if (options.defaultLabels) {
    prom.register.setDefaultLabels(options.defaultLabels);
  }
  if (options.defaultMetrics) {
    defaultIntervalRef = collectDefaultMetrics({ timeout: 5000 });
  }
  // set up prom metrics observers:
  const metric = {
    methods: {
      cache: {
        stats: new prom.Gauge({
          name: 'hmethod_cache',
          help: 'server method cache',
          labelNames: ['method', 'type']
        })
      }
    },
    http: {
      requests: {
        buckets: new prom.Histogram({
          name: 'request_duration_seconds',
          help:
            'request duration buckets in seconds. Bucket sizes set to .1, .3, 1.2, 5',
          labelNames: options.labels.buckets,
          buckets: [0.1, 0.3, 1.2, 5]
        })
      }
    }
  };

  // time method:
  const ms = (start) => {
    const diff = process.hrtime(start);
    return Math.round((diff[0] * 1e9 + diff[1]) / 1000000);
  };
  let intervalRef;
  // only poll method caches if server caching is enabled and plugin option enabled:
  if (
    server.settings.cache !== false &&
    options.cachePollInterval !== false &&
    options.cachePollInterval > 0
  ) {
    // counter update method:
    const countMethod = (metricName, methodName, type) => {
      const counter = metric.methods.cache[metricName];
      const key = type || metricName;
      const cur = server.methods[methodName].cache.stats[key];
      if (typeof cur === 'number') {
        counter.labels(methodName, type).set(cur);
      }
    };
    // polling interval to get method cache stats:
    intervalRef = setInterval(() => {
      Object.keys(server.methods).forEach((methodName) => {
        const method = server.methods[methodName];
        if (method.cache && method.cache.stats) {
          // set each of the statuses:
          [
            'hits',
            'sets',
            'gets',
            'generates',
            'errors',
            'misses',
            'stales'
          ].forEach((label) => {
            countMethod('stats', methodName, label);
          });
        }
      });
    }, options.cachePollInterval);
  }
  server.events.on('stop', () => {
    if (defaultIntervalRef) {
      clearInterval(defaultIntervalRef);
    }
    if (intervalRef) {
      clearInterval(intervalRef);
    }
    prom.register.clear();
  });
  // these two handlers track request duration times:
  server.ext('onRequest', (request, h) => {
    if (request.path === options.metricsPath) {
      return h.continue;
    }
    request.plugins['hapi-prom'] = { start: process.hrtime() };
    return h.continue;
  });
  server.events.on('response', (request) => {
    if (request.path === options.metricsPath) {
      return;
    }
    if (request.plugins['hapi-prom'] && request.plugins['hapi-prom'].start) {
      if (!request.response) {
        return;
      }
      const duration = ms(request.plugins['hapi-prom'].start) / 1000; // log in seconds
      // register the duration, broken down by method, path and HTTP code:
      metric.http.requests.buckets
        .labels(request.method, request.route.path, request.response.statusCode)
        .observe(duration);
    }
  });
  server.route({
    method: 'GET',
    path: options.metricsPath,
    config: {
      auth: options.auth
    },
    async handler(request, h) {
      return h.response(prom.register.metrics()).type(prom.contentType);
    }
  });
  const timingSummary = new prom.Summary({
    name: 'hapi_timer',
    help: 'a timing function',
    labelNames: ['name']
  });
  const time = (name) => timingSummary.startTimer({ name });
  const promCounter = new prom.Counter({
    name: 'hapi_counter',
    help: 'counter for hapi',
    labelNames: ['name']
  });
  const counter = (name) => promCounter.inc({ name });
  server.decorate('server', 'prom', { startTimer: time, incCounter: counter });
  server.expose('client', prom);
};

exports.plugin = {
  name: 'hapi-prom',
  register,
  once: true
};
