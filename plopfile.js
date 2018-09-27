const fs = require('fs');
const pluralize = require('pluralize');

const generateRedux = require('./plopfile/generateRedux');
const generateKoaModel = require('./plopfile/generateKoaModel');
const generateReactAdmin = require('./plopfile/generateReactAdmin');
const generateExpressModel = require('./plopfile/generateExpressModel');

function upperCaseFirstChart(txt) {
  return txt.substring(0, 1).toUpperCase() + txt.substring(1);
}

function pluralizeStr(txt) {
  const str = pluralize(txt);
  return str.substring(0, 1).toLocaleLowerCase() + str.substring(1);
}

module.exports = function(plop, config = {}) {
  // controller generator
  plop.setHelper('upperCaseFirstChart', txt => upperCaseFirstChart(txt));
  plop.setHelper('upperCase', txt => txt.toUpperCase());
  plop.setPartial('myTitlePartial', '{{upperCase name}}');
  plop.setHelper('pluralize', txt => pluralize(txt));
  plop.setPrompt('recursive', require('inquirer-recursive'));

  generateKoaModel(plop, config);
  generateReactAdmin.init(plop, config);
  generateExpressModel.init(plop, config);
  plop.setGenerator('generate redux', generateRedux);
};
