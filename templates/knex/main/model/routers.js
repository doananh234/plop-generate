'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/{{pluralize name}}',
    config: handler.getMany,
  },
  {
    method: 'GET',
    path: '/api/v1/{{pluralize name}}/{id}',
    config: handler.getOne,
  },
  {
    method: 'GET',
    path: '/api/v1/{{pluralize name}}/count',
    config: handler.count,
  },
  {
    method: 'POST',
    path: '/api/v1/{{pluralize name}}',
    config: handler.createOne,
  },
  {
    method: 'PUT',
    path: '/api/v1/{{pluralize name}}/{id}',
    config: handler.updateOne,
  },
  {
    method: 'DELETE',
    path: '/api/v1/{{pluralize name}}/{id}',
    config: handler.deleteOne,
  },
];

module.exports = Routes;
