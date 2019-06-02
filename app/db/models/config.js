'use strict';

const { Model } = require('objection');
const knex = require('../connection');

Model.knex(knex);

module.exports = {
  Model,
  knex
};
