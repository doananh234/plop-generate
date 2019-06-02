'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const {{upperCaseFirstChart name}}Service = require('./service');

class {{upperCaseFirstChart name}}Controller extends BaseControllerCRUD {
  constructor() {
    super(new {{upperCaseFirstChart name}}Service());
  }
}

module.exports = {{upperCaseFirstChart name}}Controller;
