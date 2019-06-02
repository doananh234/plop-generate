'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const HelloService = require('./service');

class HelloController extends BaseControllerCRUD {
  constructor() {
    super(new HelloService());
  }
}

module.exports = HelloController;
