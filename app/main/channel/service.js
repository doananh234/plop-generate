'use strict';

const Boom = require('boom');
const Models = require('../../db/models');
const BaseServiceCRUD = require('../../base/BaseServiceCRUD');

class ChannelService extends BaseServiceCRUD {
  constructor() {
    super(Models.Channel, 'Channel');
  }
}

module.exports = ChannelService;
