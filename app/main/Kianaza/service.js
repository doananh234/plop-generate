'use strict';

const Boom = require('boom');
const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class KianazaService extends BaseServiceCRUD {
  constructor() {
    super(Models.Kianaza, 'Kianaza');
  }
}

module.exports = KianazaService;
