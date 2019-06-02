'use strict';

const Boom = require('boom');
const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class {{upperCaseFirstChart name}}Service extends BaseServiceCRUD {
  constructor() {
    super(Models.{{upperCaseFirstChart name}}, '{{upperCaseFirstChart name}}');
  }
}

module.exports = {{upperCaseFirstChart name}}Service;
