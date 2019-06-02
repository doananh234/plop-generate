'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class Channel extends CustomModel {
  static get tableName() {
    return 'channel';
  }
}

module.exports = Channel;
