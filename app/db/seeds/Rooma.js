exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Rooma')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Rooma').insert([]);
    });
};
