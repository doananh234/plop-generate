'use strict';

const QueryBuilder = require('objection').QueryBuilder;
const _ = require('lodash');
const { buildFilter } = require('objection-filter');
const { Model } = require('./config');

class CustomQueryBuilder extends QueryBuilder {
  // Some custom method.
  upsert(model) {
    if (model.id) {
      return this.update(model).where('id', model.id);
    }
    return this.insert(model);
  }

  queryBuilder(query) {
    if (query.page && query.pageSize) {
      return this.page(query.page, query.pageSize);
    }

    return this.page(0, 50);
  }
}

class CustomModel extends Model {
  static get QueryBuilder() {
    return CustomQueryBuilder;
  }

  static queryBuilder(query, baseModel) {
    return buildFilter(this).build(query, baseModel);
  }

  $formatJson(json) {
    let superJson = super.$formatJson(json);
    if (this.constructor.$hidden && this.constructor.$hidden.length > 0) {
      superJson = _.omit(superJson, this.constructor.$hidden);
    }
    return superJson;
  }
}

module.exports = CustomModel;
