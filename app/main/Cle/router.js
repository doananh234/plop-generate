'use strict';

const Router = require('koa-router');
const Joi = require('joi');
const CleController = require('./controller');
const validator = require('./validator');
const validate = require('../../middlewares/validate');

const router = new Router({
  prefix: '/api/v1',
});

router.get('/cles', CleController.getAll);

router.get(
  '/cles/:id',
  validate({ params: { id: Joi.number().required() } }),
  CleController.getOne
);

router.post(
  '/cles',
  validate({ body: validator.createCle }),
  CleController.create
);

router.put(
  '/Cles/:id',
  validate({ params: { id: Joi.number().required() } }),
  CleController.updateOne
);

router.delete(
  '/Cles/:id',
  validate({ params: { id: Joi.number().required() } }),
  CleController.deleteOne
);

module.exports = router;
