'use strict';

exports.up = function (knex, Promise) {
  return knex.raw('create extension if not exists "uuid-ossp"').then(() => {
    .createTable('channel', (table) => {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
  table.string('name').notNullable();
  table.string('description').notNullable();
    });
  });
};

exports.down = function (knex, Promise) {
  .raw('DROP TABLE channel CASCADE');
};
