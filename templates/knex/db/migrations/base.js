'use strict';

exports.up = function (knex, Promise) {
  return knex.raw('create extension if not exists "uuid-ossp"').then(() => {
    return knex.schema.createTable('{{name}}', (table) => {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
    });
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.raw('DROP TABLE {{name}} CASCADE');
};
