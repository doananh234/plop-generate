'use strict';

const Joi = require('joi');
const { queryParams, checkToken } = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.checkToken = checkToken;

exports.idParam = Joi.number()
  .required()
  .description('id is required');

exports.createUserData = {
  name: Joi.string().required(),
  // add validate params here
};

exports.updateUserData = {
  // add validate params here
};
