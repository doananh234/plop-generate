const Joi = require('joi');

const createCle = {
  name: Joi.object({  vn: Joi.string().required(),
  en: Joi.string().required(),
  fr: Joi.string().required()}).required(),
  old: Joi.number().required(),
};

module.exports = {
  createCle,
};
