'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const KianazaService = require('./service');

class KianazaController extends BaseControllerCRUD {
  constructor() {
    super(new KianazaService());
  }
}

module.exports = KianazaController;
