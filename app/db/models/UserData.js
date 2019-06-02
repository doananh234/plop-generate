'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class UserData extends CustomModel {
  static get tableName() {
    return 'userData';
  }
}

module.exports = UserData;
