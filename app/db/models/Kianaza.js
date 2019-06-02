'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class Kianaza extends CustomModel {
  static get tableName() {
    return 'Kianaza';
  }
}

module.exports = Kianaza;
