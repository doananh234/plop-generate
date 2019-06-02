'use strict';

const Joi = require('joi');
const { queryParams, checkToken } = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.checkToken = checkToken;

exports.idParam = Joi.number()
  .required()
  .description('id is required');

exports.createTestFinal = {
  name: Joi.string().required(),
  description: Joi.boolean(),
  // add validate params here
};

exports.updateTestFinal = {
  // add validate params here
};
