const knex = require('../connection');
const bookshelf = require('bookshelf')(knex);

const Rooma = bookshelf.Model.extend({tableName: 'Rooma'});

const Class = bookshelf.Model.extend({tableName: 'Class'});

const Cle = bookshelf.Model.extend({tableName: 'Cle'});

module.exports = {
  Rooma,
  Class,
  Cle,
};
