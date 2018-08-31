const fs = require('fs');
const pluralize = require('pluralize');

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
  date: 'time'
};
module.exports = function(plop) {
  // controller generator

  plop.setHelper('upperCaseFirstChart', txt => upperCaseFirstChart(txt));
  plop.setHelper('upperCase', txt => txt.toUpperCase());
  plop.setPartial('myTitlePartial', '{{upperCase name}}');
  plop.setHelper('pluralize', txt => pluralizeStr(txt));
  plop.setPrompt('recursive', require('../promts/selectionExpand'));

  plop.setGenerator('generate add Koa model', {
    description: 'Add new Koa model',
    prompts: prompts,
    actions: customAction
  });

  plop.setGenerator('generate add Koa model(create data structure by string)', {
    description: 'Add new Koa model',
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
  console.log('data', data);
  const files = fs.readdirSync('app/db/migrations/');
  const migrationsFile = 'app/db/migrations/' + files[0];
  const actions = [
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [__dirname + '/../templates/koa/main/model/*.js'],
      destination: 'app/main/{{name}}/',
      base: __dirname + '/../templates/koa/main/model'
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/db/models/index.js',
      templateFile: __dirname + '/../templates/koa/db/models/index.js'
    },
    {
      type: 'append',
      path: 'app/db/models/index.js',
      pattern: "const bookshelf = require('bookshelf')(knex);",
      template:
        "\nconst {{upperCaseFirstChart name}} = bookshelf.Model.extend({tableName: '{{name}}'});"
    },
    {
      type: 'append',
      path: 'app/db/models/index.js',
      pattern: 'module.exports = {',
      template: '  {{upperCaseFirstChart name}},'
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/db/seeds/{{name}}.js',
      templateFile: __dirname + '/../templates/koa/db/seeds/model.js'
    },
    {
      type: 'modify',
      path: migrationsFile,
      pattern: 'return knex.schema',
      template: ''
    },
    {
      type: 'modify',
      path: migrationsFile,
      pattern: 'return knex.schema',
      template: ''
    },
    {
      type: 'append',
      path: migrationsFile,
      pattern: 'exports.up = function (knex, Promise) {',
      template: "return knex.schema.createTable('{{name}}', table => {\n})"
    },
    {
      type: 'append',
      path: migrationsFile,
      pattern: 'exports.down = function (knex, Promise) {',
      template: "  return knex.schema.dropTableIfExists('{{name}}')"
    },
    {
      type: 'append',
      path: migrationsFile,
      pattern: data.name + "', table => {",
      template: "  table.increments('id').primary();"
    }
  ];

  data.props.forEach((element, index) => {
    //add validator
    actions.push({
      type: 'append',
      path: 'app/main/{{name}}/validator.js',
      pattern:
        index === 0
          ? 'const create' + upperCaseFirstChart(data.name) + ' = {'
          : generateValidator(data.props[index - 1]),
      template: generateValidator(element)
    });
    //add schema
    actions.push({
      type: 'append',
      path: migrationsFile,
      pattern:
        index === 0
          ? "  table.increments('id').primary();"
          : '  table.' +
            SCHEMA[data.props[index - 1].type] +
            "('" +
            data.props[index - 1].propName +
            "').notNullable();",
      template:
        '  table.' +
        SCHEMA[element.type] +
        "('" +
        element.propName +
        "').notNullable();"
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
    getRequiredStr(element) +
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
