'use strict';

const Router = require('koa-router');
const Joi = require('joi');
const {{name}}Controller = require('./controller');
const validator = require('./validator');
const validate = require('../../middlewares/validate');

const router = new Router({
  prefix: '/api/v1',
});

router.get('/{{pluralize name}}', {{name}}Controller.getAll);

router.get(
  '/{{pluralize name}}/:id',
  validate({ params: { id: Joi.number().required() } }),
  {{name}}Controller.getOne
);

router.post(
  '/{{pluralize name}}',
  validate({ body: validator.create{{upperCaseFirstChart name}} }),
  {{name}}Controller.create
);

router.put(
  '/{{pluralize name}}/:id',
  validate({ params: { id: Joi.number().required() } }),
  {{name}}Controller.updateOne
);

router.delete(
  '/{{pluralize name}}/:id',
  validate({ params: { id: Joi.number().required() } }),
  {{name}}Controller.deleteOne
);

module.exports = router;
