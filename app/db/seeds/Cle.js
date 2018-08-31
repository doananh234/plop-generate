exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Cle')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Cle').insert([]);
    });
};
