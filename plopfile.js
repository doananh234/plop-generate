const fs = require('fs');
const pluralize = require('pluralize');
const moment = require('moment');

const generateRedux = require('./plopfile/generateRedux');
const generateKoaModel = require('./plopfile/generateKoaModel');
const generateKnexModel = require('./plopfile/generateKnexModel');
const generateReactAdmin = require('./plopfile/generateReactAdmin');
const generateExpressModel = require('./plopfile/generateExpressModel');
const generateAdmin2 = require('./plopfile/generateAdmin2');

function upperCaseFirstChart(txt) {
  return txt.substring(0, 1).toUpperCase() + txt.substring(1);
}

function pluralizeStr(txt) {
  const str = pluralize(txt);
  return str.substring(0, 1).toLocaleLowerCase() + str.substring(1);
}

function pluralizeStr(txt) {
  const str = pluralize(txt);
  return str.substring(0, 1).toLocaleLowerCase() + str.substring(1);
}

function makeSnakeCase(text) {
  var result = text.replace(/([A-Z])/g, "_$1");  
  var finalResult = result.toLowerCase();  
  return finalResult;
}

module.exports = function(plop, config = {}) {
  // controller generator
  plop.setHelper('snakeCase', txt => makeSnakeCase(txt));
  plop.setHelper('upperCaseFirstChart', txt => upperCaseFirstChart(txt));
  plop.setHelper('upperCase', txt => txt.toUpperCase());
  plop.setPartial('myTitlePartial', '{{upperCase name}}');
  plop.setHelper('pluralize', txt => pluralize(txt));
  plop.setPrompt('recursive', require('inquirer-recursive'));

  generateAdmin2.init(plop, config);
  generateKnexModel(plop, config);
  // generateReactAdmin.init(plop, config);
  // generateExpressModel.init(plop, config);
  // generateKoaModel(plop, config);
  plop.setGenerator('generate redux', generateRedux);
};
