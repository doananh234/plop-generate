'use strict';

exports.up = function (knex, Promise) {
  return knex.raw('create extension if not exists "uuid-ossp"').then(() => {
    return knex.schema.createTable('testFinal', (table) => {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('name').notNullable();
      table.boolean('description').notNullable();
    });
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.raw('DROP TABLE testFinal CASCADE');
};
