exports.up = function (knex) {
  return knex.raw('create extension if not exists "uuid-ossp"').then(() => {
    return knex.schema.createTable('{{snakeCase name}}', (table) => {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    });
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE {{snakeCase name}} CASCADE');
};
