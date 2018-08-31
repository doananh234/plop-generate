exports.up = function (knex, Promise) {
return knex.schema.createTable('Rooma', table => {
  table.increments('id').primary();
  table.jsonb('name').notNullable();
  table.string('old').notNullable();
})
.createTable('Class', table => {
  table.increments('id').primary();
  table.jsonb('name').notNullable();
  table.integer('old').notNullable();
})
.createTable('Cle', table => {
  table.increments('id').primary();
  table.jsonb('name').notNullable();
  table.integer('old').notNullable();
})
.createTable('Package', table => {
  table.increments('id').primary();
  table.jsonb('name').notNullable();
})

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('Rooma')
  .dropTableIfExists('Class')
  .dropTableIfExists('Cle')
  .dropTableIfExists('Package')
  
};
