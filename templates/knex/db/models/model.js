'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class {{upperCaseFirstChart name}} extends CustomModel {
  static get tableName() {
    return '{{snakeCase name}}';
  }
  
  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = {{upperCaseFirstChart name}};
