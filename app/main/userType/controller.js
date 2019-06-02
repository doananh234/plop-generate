'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const UserTypeService = require('./service');

class UserTypeController extends BaseControllerCRUD {
  constructor() {
    super(new UserTypeService());
  }
}

module.exports = UserTypeController;
