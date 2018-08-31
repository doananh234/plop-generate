'use strict';

const Router = require('koa-router');
const Joi = require('joi');
const RoomaController = require('./controller');
const validator = require('./validator');
const validate = require('../../middlewares/validate');

const router = new Router({
  prefix: '/api/v1',
});

router.get('/roomas', RoomaController.getAll);

router.get(
  '/roomas/:id',
  validate({ params: { id: Joi.number().required() } }),
  RoomaController.getOne
);

router.post(
  '/roomas',
  validate({ body: validator.createRooma }),
  RoomaController.create
);

router.put(
  '/roomas/:id',
  validate({ params: { id: Joi.number().required() } }),
  RoomaController.updateOne
);

router.delete(
  '/roomas/:id',
  validate({ params: { id: Joi.number().required() } }),
  RoomaController.deleteOne
);

module.exports = router;
