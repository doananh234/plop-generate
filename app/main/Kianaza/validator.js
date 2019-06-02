'use strict';

const Joi = require('joi');
const { queryParams, checkToken } = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.checkToken = checkToken;

exports.idParam = Joi.number()
  .required()
  .description('id is required');

exports.createKianaza = {
  name: Joi.string().required(),
  description: Joi.string(),
  isDelete: Joi.boolean(),
  // add validate params here
};

exports.updateKianaza = {
  // add validate params here
};
