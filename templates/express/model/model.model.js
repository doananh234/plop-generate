"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let constant = require('../../helpers/lib/constant');
let mongoosePaginate = require('mongoose-paginate');

let {{upperCaseFirstChartWithPluralize name}}Schema = new Schema({
  //replace model structure
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

{{upperCaseFirstChartWithPluralize name}}Schema.plugin(mongoosePaginate);

module.exports = mongoose.model('{{upperCaseFirstChartWithPluralize name}}', {{upperCaseFirstChartWithPluralize name}}Schema);