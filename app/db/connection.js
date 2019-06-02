'use strict';

const pg = require('pg');
pg.types.setTypeParser(20, 'text', parseInt);
pg.types.setTypeParser(1700, 'text', parseInt);

const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];

module.exports = require('knex')(config);
