'use strict';

const ChannelController = require('./controller');
const validator = require('./validator');

const controller = new ChannelController();

exports.getMany = {
  description: 'Get Channel list',
  notes: 'Return Channel items',
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
  description: 'Count Channel list',
  notes: 'Return a count result of Channel items',
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
  description: 'Get a Channel',
  notes: 'Return a Channel by id',
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
  description: 'Create a new Channel',
  notes: 'Return created Channel',
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
  description: 'Update Channel',
  notes: 'Return updated Channel by id',
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
  description: 'Delete a Channel',
  notes: 'Return deleted Channel by id',
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
