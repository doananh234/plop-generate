const Joi = require('joi');

const createRooma = {
  name: Joi.object({
  vn: Joi.string().required(),
  en: Joi.string().required(),
  fr: Joi.number().required()
}).required(),
  old: Joi.string().required(),
};

module.exports = {
  createRooma,
};
