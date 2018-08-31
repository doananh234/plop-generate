exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Class')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Class').insert([]);
    });
};
