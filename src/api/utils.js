import { appConfig } from '../config/index';
// import { store } from '../setup';

const checkIfErrorOccurs = res => {
  return {
    code: res.status,
    res,
  };
};

const TIME_OUT = 10000;

async function customFetch(path, headerOptions, ops = { noParse: false }) {
  const normalFetch = fetch(path, headerOptions);
  if (ops.noParse) {
    return timeoutPromise(TIME_OUT, normalFetch);
  }
  const res = await timeoutPromise(TIME_OUT, normalFetch.then(checkIfErrorOccurs));

  if (res.code < 300) {
    const response = await res.res.json();
    return response;
  }
  try {
    const response = await res.res.json();
    const error = {
      code: res.code,
      ...response,
    };
    throw error;
  } catch (e) {
    if (res.code === 426) {
      const error = {
        code: res.code,
        message:
          'We have had some significant upgrades for the app. Please click below to upgrade your app!',
      };
      throw error;
    } else {
      const error = {
        code: res.code,
        message: e.error || e.message ? e.error || e.message : 'Something wrong. Please try again.',
      };
      throw error;
    }
  }
}

export const timeoutPromise = (ms, promise) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject('Request time out! Please try again.');
    }, ms);
    promise.then(
      res => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      err => {
        clearTimeout(timeoutId);
        reject(err);
      },
    );
  });
};

export default customFetch;

function requestWrapper(method) {
  return async function(url, data = null, params = {}) {
    let convertUrl = appConfig.REACT_APP_SERVER_URL + url;
    let convertParams = params;
    let convertData = data;
    if (method === 'GET') {
      // is it a GET?
      // GET doesn't have data
      convertParams = convertData;
      if (convertParams !== null) {
        convertUrl = `${convertUrl}?${getQueryString(convertParams)}`;
      }
      convertData = null;
    } else if (convertData === Object(convertData)) {
      // (data === Object(data)) === _.isObject(data)
      convertData = JSON.stringify(convertData);
    }

    // default params for fetch = method + (Content-Type)
    const defaults = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Parse-Application-Id': appConfig.PARSE_APP_ID,
        'X-Parse-REST-API-Key': appConfig.REST_API_KEY,
      },
    };
    // check that req url is relative and request was sent to our domain
    let token = null;
    if (sessionStorage.getItem('sessionToken')) {
      token = sessionStorage.getItem('sessionToken');
    }
    if (token) {
      defaults.headers['X-Parse-Session-Token'] = token;
    }

    if (method === 'POST' || method === 'PUT') {
      defaults.headers.Accept = 'application/json';
      defaults.headers['Content-Type'] = 'application/json';
    }

    // defaults.headers.Platform = Platform.OS === 'ios' ? 'ios' : 'android';
    // defaults.headers.VersionNo = '1.0.350';

    if (convertData) {
      defaults.body = convertData;
    }

    const paramsObj = {
      ...defaults,
      headers: { ...params, ...defaults.headers },
    };
    return customFetch(convertUrl, paramsObj);
  };
}

function getQueryString(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
}

export const get = requestWrapper('GET');
export const post = requestWrapper('POST');
export const put = requestWrapper('PUT');
export const patch = requestWrapper('PATCH');
export const del = requestWrapper('DELETE');
