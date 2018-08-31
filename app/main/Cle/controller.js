'use strict';

const service = require('./service');

exports.getAll = async ctx => {
  const result = await service.getAllCle();
  ctx.res.ok(result);
};

exports.getOne = async ctx => {
  const result = await service.getOneCle(ctx.params.id);
  if (result) ctx.res.ok(result);
  else ctx.res.notFound('Not found');
};

exports.create = async ctx => {
  const response = await service.createCle(ctx.request.body);
  ctx.res.created(response, 'Created');
};

exports.updateOne = async ctx => {
  const response = await service.updateCle(ctx.params.id, ctx.request.body);
  ctx.res.ok(response, 'Updated!');
};

exports.deleteOne = async ctx => {
  await service.deleteCle(ctx.params.id);
  ctx.res.noContent(null, 'Deleted!');
};
