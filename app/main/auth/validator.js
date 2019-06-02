'use strict';

const Joi = require('joi');
const {
  strUsername,
  strEmail,
  strPassword
} = require('../../utils/validatorUtils');

exports.validateLogin = {
  email: strEmail().required(),
  password: strPassword().required()
};

exports.validateRegister = {
  email: strEmail().required(),
  password: strPassword().required()
};

exports.validateRegisterByToken = {
  token: Joi.string().required(),
  password: strPassword().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  avatar: Joi.string()
};

exports.forgotPassword = {
  email: strEmail().required()
};

exports.resetPassword = {
  resetPasswordToken: Joi.string().required(),
  password: strPassword().required()
};

exports.validateFacebook = {
  access_token: Joi.string().required()
};
