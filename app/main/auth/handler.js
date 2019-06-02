'use strict';

const AuthController = require('./controller');
const validator = require('./validator');

const controller = new AuthController();

exports.login = {
  description: 'Login to an account',
  notes: 'Return user and token',
  tags: ['api', 'v1'],
  handler: controller.login.bind(controller),
  auth: false,
  validate: {
    payload: validator.validateLogin
  }
};

exports.register = {
  description: 'Register an account to system',
  notes: 'Return user and token',
  tags: ['api', 'v1'],
  handler: controller.register.bind(controller),
  auth: false,
  validate: {
    payload: validator.validateRegister
  }
};

exports.registerByToken = {
  description: 'Register an account by invitation token',
  notes: 'Register an account by invitation token',
  tags: ['api', 'v1'],
  handler: controller.registerByToken.bind(controller),
  auth: false,
  validate: {
    payload: validator.validateRegisterByToken
  }
};

exports.logout = {
  description: 'Logout api',
  notes: 'User logout api',
  tags: ['api', 'v1'],
  handler: controller.logout.bind(controller),
  auth: false,
  validate: validator.logout
};

exports.forgotPassword = {
  description: 'Forgot password api',
  notes: 'Forgot pasword and send email to reset password',
  tags: ['api', 'v1'],
  handler: controller.forgotPassword.bind(controller),
  auth: false,
  validate: {
    payload: validator.forgotPassword
  }
};

exports.resetPassword = {
  description: 'reset password api',
  notes: 'Reset pasword of an user to new one',
  tags: ['api', 'v1'],
  handler: controller.resetPassword.bind(controller),
  auth: false,
  validate: {
    payload: validator.resetPassword
  }
};

exports.loginFacebook = {
  description: 'Login with facebook for mobile app',
  notes: 'Login with facebook for mobile app return session token',
  tags: ['api', 'v1'],
  handler: controller.loginFacebook.bind(controller),
  auth: false,
  validate: { query: validator.validateFacebook }
};
