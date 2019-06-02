'use strict';

const Boom = require('boom');
const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class TestFinalService extends BaseServiceCRUD {
  constructor() {
    super(Models.TestFinal, 'TestFinal');
  }
}

module.exports = TestFinalService;
