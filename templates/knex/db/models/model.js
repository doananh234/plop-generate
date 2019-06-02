'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class {{upperCaseFirstChart name}} extends CustomModel {
  static get tableName() {
    return '{{name}}';
  }
}

module.exports = {{upperCaseFirstChart name}};
