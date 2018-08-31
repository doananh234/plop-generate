'use strict';

const service = require('./service');

exports.getAll = async ctx => {
  const result = await service.getAll{{upperCaseFirstChart name}}();
  ctx.res.ok(result);
};

exports.getOne = async ctx => {
  const result = await service.getOne{{upperCaseFirstChart name}}(ctx.params.id);
  if (result) ctx.res.ok(result);
  else ctx.res.notFound('Not found');
};

exports.create = async ctx => {
  const response = await service.create{{upperCaseFirstChart name}}(ctx.request.body);
  ctx.res.created(response, 'Created');
};

exports.updateOne = async ctx => {
  const response = await service.update{{upperCaseFirstChart name}}(ctx.params.id, ctx.request.body);
  ctx.res.ok(response, 'Updated!');
};

exports.deleteOne = async ctx => {
  await service.delete{{upperCaseFirstChart name}}(ctx.params.id);
  ctx.res.noContent(null, 'Deleted!');
};
