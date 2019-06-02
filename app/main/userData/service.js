'use strict';

const Boom = require('boom');
const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class UserDataService extends BaseServiceCRUD {
  constructor() {
    super(Models.UserData, 'UserData');
  }
}

module.exports = UserDataService;
