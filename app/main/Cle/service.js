const Models = require('../../db/models');

exports.getAllCle = async () => {
  return await Models.Cle.fetchAll();
};

exports.getOneCle = async id => {
  return new Models.Cle({ id: id }).fetch();
};

exports.createCle = async body => {
  return new Models.Cle(body).save();
};

exports.updateCle = async (id, body) => {
  return new Models.Cle({ id: id }).save(body, {
    patch: true,
  });
};

exports.deleteCle = async id => {
  return new Models.Cle({ id: id }).destroy();
};
