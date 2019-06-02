'use strict';

const knex = require('../connection');

const Kianaza = require('./Kianaza');

const TestFinal = require('./TestFinal');

const Ahiha = require('./Ahiha');

const UserData = require('./UserData');

const Channel = require('./Channel');

const UserType = require('./UserType');

const Hello = require('./Hello');


module.exports = {
  Kianaza,
  TestFinal,
  Ahiha,
  UserData,
  Channel,
  UserType,
  Hello,
  knex,
  User,
  Role,


  Orders,
  Customer
};
