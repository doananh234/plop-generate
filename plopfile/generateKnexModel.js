const fs = require('fs');
const pluralize = require('pluralize');
const moment = require('moment');

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'Model name: '
  },
  {
    type: 'recursive',
    name: 'props',
    message: 'do you want input model props?',
    prompts: [
      {
        type: 'input',
        name: 'propName',
        message: 'What is property Name?'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Props Type: ',
        choices: [
          { name: 'Boolean', value: 'boolean' },
          { name: 'Number', value: 'number' },
          { name: 'Object', value: 'object' },
          { name: 'Array', value: 'array' },
          { name: 'String', value: 'string' },
          { name: 'Date', value: 'date' }
        ]
      },
      {
        type: 'confirm',
        name: 'required',
        message: 'is Required?'
      }
    ]
  }
];

const SCHEMA = {
  boolean: 'boolean',
  number: 'integer',
  object: 'jsonb',
  array: 'jsonb',
  string: 'string',
  date: 'timestamp'
};
module.exports = function(plop) {
  // controller generator

  plop.setHelper('upperCaseFirstChart', txt => upperCaseFirstChart(txt));
  plop.setHelper('upperCase', txt => txt.toUpperCase());
  plop.setPartial('myTitlePartial', '{{upperCase name}}');
  plop.setHelper('pluralize', txt => pluralizeStr(txt));
  plop.setPrompt('recursive', require('../promts/selectionExpand'));

  plop.setGenerator('generate add Hapi model', {
    description: 'Add new Hapi model',
    prompts: prompts,
    actions: customAction
  });

  plop.setGenerator('generate add Hapi model(create data structure by string)', {
    description: 'Add new Hapi model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Model name: '
      },
      {
        type: 'input',
        name: 'props',
        message:
          'Input props here(Array with format: [{"propName":"string","type":"string","required":boolean}]: '
      }
    ],
    actions: function(data) {
      return customAction({ name: data.name, props: JSON.parse(data.props) });
    }
  });
};

function customAction(data) {
  
function makeSnakeCase(text) {
  var result = text.replace(/([A-Z])/g, "_$1");  
  var finalResult = result.toLowerCase();  
  return finalResult;
}

  function migrationsName (txt) {
    return moment().format('YYYYMMDDHHmmSS_')+makeSnakeCase(txt)+'.js';  
  }

  const migrationsFile = 'app/db/migrations/'+ migrationsName(data.name);
  const actions = [
    // {
    //   type: 'addMany',
    //   skipIfExists: true,
    //   templateFiles: [__dirname + '/../templates/knex/main/model/*.js'],
    //   destination: 'app/main/{{name}}/',
    //   base: __dirname + '/../templates/knex/main/model'
    // },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/admin/{{name}}/controller.js',
      templateFile:__dirname + '/../templates/knex/main/model/controller.ejs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/admin/{{name}}/handler.js',
      templateFile:__dirname + '/../templates/knex/main/model/handler.ejs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/admin/{{name}}/routers.js',
      templateFile:__dirname + '/../templates/knex/main/model/routers.ejs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/admin/{{name}}/service.js',
      templateFile:__dirname + '/../templates/knex/main/model/service.ejs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/admin/{{name}}/validator.js',
      templateFile:__dirname + '/../templates/knex/main/model/validator.ejs',
    },

    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/client/{{name}}/controller.js',
      templateFile:__dirname + '/../templates/knex/main/model/controller.ejs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/client/{{name}}/handler.js',
      templateFile:__dirname + '/../templates/knex/main/model/handlerClient.ejs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/client/{{name}}/routers.js',
      templateFile:__dirname + '/../templates/knex/main/model/routersClient.ejs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/client/{{name}}/service.js',
      templateFile:__dirname + '/../templates/knex/main/model/service.ejs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/main/client/{{name}}/validator.js',
      templateFile:__dirname + '/../templates/knex/main/model/validator.ejs',
    },
    
    {
      type: 'add',
      skipIfExists: true,
      path: migrationsFile,
      templateFile: __dirname + '/../templates/knex/db/migrations/base.js'
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/db/models/{{upperCaseFirstChart name}}.js',
      templateFile: __dirname + '/../templates/knex/db/models/model.js'
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/db/models/index.js',
      templateFile: __dirname + '/../templates/knex/db/models/index.js'
    },
    {
      type: 'append',
      path: 'app/db/models/index.js',
      pattern: "import knex from '../connection';",
      template:
        "\nimport {{upperCaseFirstChart name}} from './{{upperCaseFirstChart name}}';"
    },
    {
      type: 'append',
      path: 'app/db/models/index.js',
      pattern: 'knex,',
      template: '  {{upperCaseFirstChart name}},'
    },
    // {
    //   type: 'add',
    //   skipIfExists: true,
    //   path: 'app/db/seeds/{{name}}.js',
    //   templateFile: __dirname + '/../templates/koa/db/seeds/model.js'
    // },
  ];

  data.props.forEach((element, index) => {
    //add validator
    actions.push({
      type: 'append',
      path: 'app/main/admin/{{name}}/validator.js',
      pattern:'export const create' + upperCaseFirstChart(data.name) + ' = {',
      template: generateValidator(element)
    });
    actions.push({
      type: 'append',
      path: 'app/main/admin/{{name}}/validator.js',
      pattern:'export const update' + upperCaseFirstChart(data.name) + ' = {',
      template: generateValidator(element)
    });

    actions.push({
      type: 'append',
      path: 'app/main/client/{{name}}/validator.js',
      pattern:'export const create' + upperCaseFirstChart(data.name) + ' = {',
      template: generateValidator(element)
    });
    actions.push({
      type: 'append',
      path: 'app/main/client/{{name}}/validator.js',
      pattern:'export const update' + upperCaseFirstChart(data.name) + ' = {',
      template: generateValidator(element)
    });

    //add schema
    actions.push({
      type: 'append',
      path: migrationsFile,
      pattern:
        index === 0
          ? "  table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));"
          : '      table.' +
            SCHEMA[data.props[index - 1].type] +
            "('" +
            data.props[index - 1].propName +
            "');",
      template:
        '      table.' +
        SCHEMA[element.type] +
        "('" +
        element.propName +
        "');"
    });
  });

  return actions;
}

function generateValidator(element) {
  return (
    '  ' +
    element.propName +
    ':' +
    ' Joi.' +
    getTypeStr(element) +
    ','
  );
}

function getTypeStr(element) {
  const childs = element.childs
    ? element.childs
        .map(data => {
          return (
            '  ' +
            data.propName +
            ':' +
            ' Joi.' +
            data.type +
            '()' +
            getRequiredStr(data)
          );
        })
        .join(',\n')
    : '';
  return `${element.type}${
    element.type === 'object' ? '({\n' + childs + '\n})' : '()'
  }`;
}

function getRequiredStr(element) {
  return element.required ? '.required()' : '';
}

function upperCaseFirstChart(txt) {
  return txt.substring(0, 1).toUpperCase() + txt.substring(1);
}

function pluralizeStr(txt) {
  const str = pluralize(txt);
  return str.substring(0, 1).toLocaleLowerCase() + str.substring(1);
}
