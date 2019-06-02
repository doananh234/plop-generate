'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const AhihaService = require('./service');

class AhihaController extends BaseControllerCRUD {
  constructor() {
    super(new AhihaService());
  }
}

module.exports = AhihaController;
