'use strict';

const Boom = require('boom');
const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class HelloService extends BaseServiceCRUD {
  constructor() {
    super(Models.Hello, 'Hello');
  }
}

module.exports = HelloService;
