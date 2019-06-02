'use strict';

exports.up = function (knex, Promise) {
  return knex.raw('create extension if not exists "uuid-ossp"').then(() => {
    return knex.schema.createTable('Kianaza', (table) => {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.boolean('isDelete').notNullable();
    });
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.raw('DROP TABLE Kianaza CASCADE');
};
