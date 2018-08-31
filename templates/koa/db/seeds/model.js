exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('{{name}}')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('{{name}}').insert([]);
    });
};
