'use strict';

const Joi = require('joi');
const { queryParams, checkToken } = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.checkToken = checkToken;

exports.idParam = Joi.string()
  .required()
  .description('id is required');

exports.create{{upperCaseFirstChart name}} = {
  // add validate params here
};

exports.update{{upperCaseFirstChart name}} = {
  // add validate params here
};
