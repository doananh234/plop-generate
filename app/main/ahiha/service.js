'use strict';

const Boom = require('boom');
const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class AhihaService extends BaseServiceCRUD {
  constructor() {
    super(Models.Ahiha, 'Ahiha');
  }
}

module.exports = AhihaService;
