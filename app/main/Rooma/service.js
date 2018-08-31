const Models = require('../../db/models');

exports.getAllRooma = async () => {
  return await Models.Rooma.fetchAll();
};

exports.getOneRooma = async id => {
  return new Models.Rooma({ id: id }).fetch();
};

exports.createRooma = async body => {
  return new Models.Rooma(body).save();
};

exports.updateRooma = async (id, body) => {
  return new Models.Rooma({ id: id }).save(body, {
    patch: true,
  });
};

exports.deleteRooma = async id => {
  return new Models.Rooma({ id: id }).destroy();
};
