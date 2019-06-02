'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class UserType extends CustomModel {
  static get tableName() {
    return 'userType';
  }
}

module.exports = UserType;
