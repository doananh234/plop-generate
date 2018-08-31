'use strict';

const Router = require('koa-router');
const Joi = require('joi');
const ClassController = require('./controller');
const validator = require('./validator');
const validate = require('../../middlewares/validate');

const router = new Router({
  prefix: '/api/v1',
});

router.get('/Classes', ClassController.getAll);

router.get(
  '/Classes/:id',
  validate({ params: { id: Joi.number().required() } }),
  ClassController.getOne
);

router.post(
  '/Classes',
  validate({ body: validator.createClass }),
  ClassController.create
);

router.put(
  '/Classes/:id',
  validate({ params: { id: Joi.number().required() } }),
  ClassController.updateOne
);

router.delete(
  '/Classes/:id',
  validate({ params: { id: Joi.number().required() } }),
  ClassController.deleteOne
);

module.exports = router;
