'use strict';

const Models = require('../models');

exports.seed = async function (knex, Promise) {
  await Models.Customer.query().delete();
  await Models.Customer.query().insert([
    {
      displayName: 'Tiệp Lê Minh',
      email: 'doananh234@gmail.com',
      address: 'đường lê văn hiến,Quận Ngũ Hành Sơn,Đà Nẵng',
      birthday: '2019-05-08T01:44:26.583Z',
      totalSpent: 10,
      timeWorking: 10,
      facebookLink: 'https://www.facebook.com/minh.bau.13',
      note: 'adasd'
    }
  ]);
};
