'use strict';

const HelloController = require('./controller');
const validator = require('./validator');

const controller = new HelloController();

exports.getMany = {
  description: 'Get Hello list',
  notes: 'Return Hello items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: {
    strategy: 'jwt',
    scope: ['admin', 'user']
  },
  validate: {
    headers: validator.checkToken,
    query: validator.queryParams
  }
};

exports.count = {
  description: 'Count Hello list',
  notes: 'Return a count result of Hello items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: {
    strategy: 'jwt',
    scope: ['admin', 'user']
  },
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a Hello',
  notes: 'Return a Hello by id',
  tags: ['api', 'v1'],
  handler: controller.getOne.bind(controller),
  auth: 'jwt',
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

exports.createOne = {
  description: 'Create a new Hello',
  notes: 'Return created Hello',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: {
    strategy: 'jwt',
    scope: ['admin']
  },
  validate: {
    headers: validator.checkToken,
    payload: validator.createTag
  }
};

exports.updateOne = {
  description: 'Update Hello',
  notes: 'Return updated Hello by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: {
    strategy: 'jwt',
    scope: ['admin']
  },
  validate: {
    headers: validator.checkToken,
    params: {
      id: validator.idParam
    },
    payload: validator.updateTag
  }
};

exports.deleteOne = {
  description: 'Delete a Hello',
  notes: 'Return deleted Hello by id',
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
