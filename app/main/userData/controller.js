'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const UserDataService = require('./service');

class UserDataController extends BaseControllerCRUD {
  constructor() {
    super(new UserDataService());
  }
}

module.exports = UserDataController;
