'use strict';

exports.up = function (knex, Promise) {
return knex.raw('create extension if not exists "uuid-ossp"').then(() => {
          return knex.schema.createTable('hello', table => {
  table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
  table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));

          });
        });
  return knex.raw('create extension if not exists "uuid-ossp"').then(() => {
    .createTable('hello', (table) => {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
    });
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.raw('DROP TABLE hello CASCADE');
  .raw('DROP TABLE hello CASCADE');
};
