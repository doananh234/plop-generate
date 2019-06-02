'use strict';

const Boom = require('boom');
const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class UserTypeService extends BaseServiceCRUD {
  constructor() {
    super(Models.UserType, 'UserType');
  }
}

module.exports = UserTypeService;
