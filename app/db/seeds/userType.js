'use strict';

const Models = require('../models');

exports.seed = async function (knex, Promise) {
  await Models.UserType.query().delete();
  await Models.UserType.query().insert([
    {
      name: 'Designer',
      description: 'designer'
    },
    {
      name: 'Dev',
      description: 'dev'
    },
    {
      name: 'Sale',
      description: 'sale'
    },
    {
      name: 'Manager',
      description: 'manager'
    }
  ]);
};
