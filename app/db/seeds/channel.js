'use strict';

const Models = require('../models');

exports.seed = async function (knex, Promise) {
  await Models.Channel.query().delete();
  await Models.Channel.query().insert([
    {
      name: 'Facebook Duy'
    },
    {
      name: 'Skype Duy'
    },
    {
      name: 'Trello Duy'
    },
    {
      name: 'Instagram Duy'
    }
  ]);
};
