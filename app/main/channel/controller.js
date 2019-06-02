'use strict';

const BaseControllerCRUD = require('../../base/BaseControllerCRUD');
const ChannelService = require('./service');

class ChannelController extends BaseControllerCRUD {
  constructor() {
    super(new ChannelService());
  }
}

module.exports = ChannelController;
