'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const hapiAuthJWT = require('hapi-auth-jwt2');
const routes = require('./main/routes');
const { knex } = require('./db/models');
const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'lucas-api',
  level: 'trace'
});

require('dotenv').config();
// create new server instance
const server = new Hapi.Server({
  host: process.env.APP_HOST || 'localhost',
  port: process.env.PORT || 3000,
  routes: {
    cors: true,
    validate: {
      failAction: async (request, h, err) => {
        if (process.env.NODE_ENV === 'production') {
          // In prod, log a limited error message and throw the default Bad Request error.
          throw err;
        } else {
          // During development, log and respond with the full error.
          console.error(err);
          throw err;
        }
      }
    }
  }
});

const options = {
  reporters: {
    bunyan: [
      {
        module: 'good-bunyan',
        args: [
          {
            response: '*',
            log: '*',
            error: '*',
            request: '*'
          },
          {
            logger,
            levels: {
              ops: 'debug'
            },
            formatters: {
              response: (data) => {
                return 'Response for ' + data.path;
              }
            }
          }
        ]
      }
    ]
  }
};

const validateUser = (decoded, request) => {
  // This is a simple check that the `sub` claim
  // exists in the access token. Modify it to suit
  // the needs of your application
  if (decoded && decoded.id) {
    return {
      isValid: true
    };
  }
  return {
    isValid: false
  };
};

const apiVersionOptions = {
  basePath: '/api',
  validVersions: [1, 2],
  defaultVersion: 1,
  vendorName: 'api'
};

const swaggerOptions = {
  pathPrefixSize: 3,
  host: process.env.HOST,
  basePath: apiVersionOptions.basePath,
  info: {
    title: 'Lucas API Documentation',
    description:
      'This is a CSM API documentation.' +
      '\n' +
      '###Basic api query use for getAll resources. Only support normal query if need complex or advanced use cases(fulltextsearch, geolocation...) contact server developers to support more.' +
      '\n' +
      '###$ Paginate with page and perPage. \nEx: ?page=1&perPage=10\n' +
      '\n' +
      '###$ Paginate with limit and offset. \nEx: ?limit=5&offset=5\n' +
      '###$ Order by fields and order reverse use prefix "-". \n Ex: ?orderBy=age,-name' +
      '\n' +
      '###$ Include other relate models(rare case caution on use). \nEx: users?includes=books (user has many books)' +
      '\n' +
      '###$ Select field on query (Only use in single models). \nEx: ?fields=age,name' +
      '\n' +
      '###$ Filter equal \n?filter={"name": "Hoang"}' +
      '\n' +
      '###$ Filter less than \n?filter={"age": {"$lt": 40}}' +
      '\n' +
      '###$ Filter greater than \n?filter={"age": {"$gt": 20}}' +
      '\n' +
      '###$ Filter less than and equal \n?filter={"age": {"$lte": 40}}' +
      '\n' +
      '###$ Filter greater than equal \n?filter={"age": {"$gte": 20}}' +
      '\n' +
      '###$ Filter field in many choice \n?filter={"name": {"$in": ["Hoang", "MMMM"]}}' +
      '\n' +
      '###$ Filter field by text \n?filter={"name": {"$like": "%oan%"}}' +
      '\n' +
      '###$ Filter field array in array \n?filter={"tag": {"$containAll": ["JAV", "Hentai"]}}'
  },
  deReference: false,
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  security: [{ Bearer: [] }]
};

process.on('uncaughtException', (err) => {
  console.log(err, 'Uncaught exception');
  process.exit(1);
});

server.events.on(
  {
    name: 'request',
    channels: 'error'
  },
  (request, event, tags) => {
    console.log(`Request ${event.request} failed`);
  }
);

async function gracefulStopServer() {
  // Wait 60s for server handle remaining requests and stop the server
  await server.stop({
    timeout: 60 * 1000
  });
  // Close db connection
  await knex.destroy();
  // Clear everything after that
  process.exit(0);
}

process.on('SIGINT', gracefulStopServer);
process.on('SIGTERM', gracefulStopServer);

async function start() {
  // start your server
  try {
    const plugins = [
      Inert,
      Vision,
      {
        plugin: require('good'),
        options
      },
      hapiAuthJWT
    ];
    if (process.env.SWAGGER_ENABLED) {
      plugins.push({
        plugin: HapiSwagger,
        options: swaggerOptions
      });
    }
    await server.register(plugins);
    server.auth.strategy('jwt', 'jwt', {
      key: process.env.JWT_SECRET || 'lucas123',
      validate: validateUser,
      verifyOptions: {
        ignoreExpiration: true
      }
    });

    server.auth.default('jwt');
    server.route(routes);
    await server.start();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Server running at: ', server.info.uri);
}

start();

module.exports = server;
