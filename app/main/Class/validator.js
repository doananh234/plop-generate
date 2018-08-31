const Joi = require('joi');

const createClass = {
  name: Joi.object({  vn: Joi.string().required(),
  en: Joi.string().required()}).required(),
  old: Joi.number().required(),
};

module.exports = {
  createClass,
};
