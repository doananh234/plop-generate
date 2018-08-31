const Models = require('../../db/models');

exports.getAllClass = async () => {
  return await Models.Class.fetchAll();
};

exports.getOneClass = async id => {
  return new Models.Class({ id: id }).fetch();
};

exports.createClass = async body => {
  return new Models.Class(body).save();
};

exports.updateClass = async (id, body) => {
  return new Models.Class({ id: id }).save(body, {
    patch: true,
  });
};

exports.deleteClass = async id => {
  return new Models.Class({ id: id }).destroy();
};
