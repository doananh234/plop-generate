'use strict';

const {{upperCaseFirstChart name}}Controller = require('./controller');
const validator = require('./validator');

const controller = new {{upperCaseFirstChart name}}Controller();

exports.getMany = {
  description: 'Get {{upperCaseFirstChart name}} list',
  notes: 'Return {{upperCaseFirstChart name}} items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: {
    strategy: 'jwt',
    // scope: ['admin', 'user']
  },
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count {{upperCaseFirstChart name}} list',
  notes: 'Return a count result of {{upperCaseFirstChart name}} items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: {
    strategy: 'jwt',
    // scope: ['admin', 'user']
  },
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a {{upperCaseFirstChart name}}',
  notes: 'Return a {{upperCaseFirstChart name}} by id',
  tags: ['api', 'v1'],
  handler: controller.getOne.bind(controller),
  auth: 'jwt',
  auth: {
    strategy: 'jwt',
    // scope: ['admin']
  },
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    }
  }
};

exports.createOne = {
  description: 'Create a new {{upperCaseFirstChart name}}',
  notes: 'Return created {{upperCaseFirstChart name}}',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: {
    strategy: 'jwt',
    // scope: ['admin']
  },
  validate: {
    headers: validator.checkToken,
    payload: validator.create{{upperCaseFirstChart name}}
  }
};

exports.updateOne = {
  description: 'Update {{upperCaseFirstChart name}}',
  notes: 'Return updated {{upperCaseFirstChart name}} by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: {
    strategy: 'jwt',
    // scope: ['admin']
  },
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.update{{upperCaseFirstChart name}}
  }
};

exports.deleteOne = {
  description: 'Delete a {{upperCaseFirstChart name}}',
  notes: 'Return deleted {{upperCaseFirstChart name}} by id',
  tags: ['api', 'v1'],
  handler: controller.deleteOne.bind(controller),
  auth: {
    strategy: 'jwt',
    scope: ['admin']
  },
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    }
  }
};
