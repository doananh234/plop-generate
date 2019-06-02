'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class Ahiha extends CustomModel {
  static get tableName() {
    return 'ahiha';
  }
}

module.exports = Ahiha;
