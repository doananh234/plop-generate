'use strict';

const Models = require('../models');
const PasswordUtils = require('../../services/password');

exports.seed = async function (knex, Promise) {
  await Models.Role.query().delete();
  await Models.Role.query().insert([
    {
      id: 1,
      name: 'superadmin',
      rank: 0,
      description: 'Admin has all the power'
    },
    {
      id: 2,
      name: 'admin',
      rank: 1,
      description: 'lucas Admin'
    },
    {
      id: 3,
      name: 'user',
      rank: 2,
      description: 'The end user'
    }
  ]);
  await Models.User.query().delete();
  await Models.User.query().insert([
    {
      email: 'superadmin@lucas.com',
      roleId: 1,
      password: PasswordUtils.hashSync('lucas123')
    },
    {
      email: 'admin@lucas.com',
      roleId: 2,
      password: PasswordUtils.hashSync('lucas123')
    }
  ]);
};
