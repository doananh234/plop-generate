'use strict';

const service = require('./service');

exports.getAll = async ctx => {
  const result = await service.getAllRooma();
  ctx.res.ok(result);
};

exports.getOne = async ctx => {
  const result = await service.getOneRooma(ctx.params.id);
  if (result) ctx.res.ok(result);
  else ctx.res.notFound('Not found');
};

exports.create = async ctx => {
  const response = await service.createRooma(ctx.request.body);
  ctx.res.created(response, 'Created');
};

exports.updateOne = async ctx => {
  const response = await service.updateRooma(ctx.params.id, ctx.request.body);
  ctx.res.ok(response, 'Updated!');
};

exports.deleteOne = async ctx => {
  await service.deleteRooma(ctx.params.id);
  ctx.res.noContent(null, 'Deleted!');
};
