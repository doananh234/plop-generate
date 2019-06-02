'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class {{upperCaseFirstChart name}} extends CustomModel {
  static get tableName() {
    return '{{snakeCase name}}';
  }
}

module.exports = {{upperCaseFirstChart name}};
