const Models = require('../../db/models');

exports.getAll{{upperCaseFirstChart name}} = async () => {
  return await Models.{{upperCaseFirstChart name}}.fetchAll();
};

exports.getOne{{upperCaseFirstChart name}} = async id => {
  return new Models.{{upperCaseFirstChart name}}({ id: id }).fetch();
};

exports.create{{upperCaseFirstChart name}} = async body => {
  return new Models.{{upperCaseFirstChart name}}(body).save();
};

exports.update{{upperCaseFirstChart name}} = async (id, body) => {
  return new Models.{{upperCaseFirstChart name}}({ id: id }).save(body, {
    patch: true,
  });
};

exports.delete{{upperCaseFirstChart name}} = async id => {
  return new Models.{{upperCaseFirstChart name}}({ id: id }).destroy();
};
