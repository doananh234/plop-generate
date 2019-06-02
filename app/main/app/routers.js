'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/app/config',
    config: handler.getAppConfig
  },
  {
    method: 'DELETE',
    path: '/api/v1/app/cache/{key}',
    config: handler.deleteCache
  }
];

module.exports = Routes;
