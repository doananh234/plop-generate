'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const TestFinalService = require('./service');

class TestFinalController extends BaseControllerCRUD {
  constructor() {
    super(new TestFinalService());
  }
}

module.exports = TestFinalController;
