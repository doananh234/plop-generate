'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class TestFinal extends CustomModel {
  static get tableName() {
    return 'testFinal';
  }
}

module.exports = TestFinal;
