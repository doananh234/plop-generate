'use strict';

const Joi = require('joi');
const { queryParams, checkToken } = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.checkToken = checkToken;

exports.idParam = Joi.number()
  .required()
  .description('id is required');

exports.createUserType = {
  name: Joi.string().required(),
  description: Joi.string(),
  // add validate params here
};

exports.updateUserType = {
  // add validate params here
};
