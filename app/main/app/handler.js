'use strict';

const Joi = require('joi');
const controller = require('./controller');

exports.getAppConfig = {
  description: 'Get MOBILE APP CONFIG',
  notes: 'Returns MOBILE APP CONFIG',
  tags: ['api', 'v1'],
  handler: controller.getAppConfig,
  auth: false
};
exports.deleteCache = {
  description: 'Delete a particular cache',
  notes: 'Delete a key redis cache',
  tags: ['api', 'v1'],
  handler: controller.deleteCache,
  auth: false
};
