"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let constant = require('../../helpers/lib/constant');
let mongoosePaginate = require('mongoose-paginate');

let AsdasdsSchema = new Schema({
  //replace model structure
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

AsdasdsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Asdasds', AsdasdsSchema);