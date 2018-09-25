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
          { name: 'String', value: 'String' },
          { name: 'Boolean', value: 'Boolean' },
          { name: 'Number', value: 'Number' },
          { name: 'Object', value: 'Object' },
          { name: 'Array', value: 'Array' },
          { name: 'Date', value: 'Date' }
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
  plop.setHelper('upperCaseFirstChartWithPluralize', txt =>
    upperCaseFirstChart(pluralizeStr(txt))
  );
  plop.setPrompt('recursive', require('../promts/selectionExpand'));

  plop.setGenerator('generate add Express model', {
    description: 'Add new Express model',
    prompts: prompts,
    actions: customAction
  });

  plop.setGenerator(
    'generate add Express model(create data structure by string)',
    {
      description: 'Add new Express model',
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
    }
  );
};

function customAction(data) {
  const actions = [
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/{{pluralize name}}/index.js',
      templateFile: __dirname + '/../templates/express/model/index.js'
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/{{pluralize name}}/{{pluralize name}}.ctrl.js',
      templateFile: __dirname + '/../templates/express/model/model.ctrl.js'
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/{{pluralize name}}/{{pluralize name}}.model.js',
      templateFile: __dirname + '/../templates/express/model/model.model.js'
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'app/{{pluralize name}}/{{pluralize name}}.route.js',
      templateFile: __dirname + '/../templates/express/model/model.route.js'
    },
    {
      type: 'modify',
      path: 'app.js',
      pattern: '//end import routes',
      template: `let {{pluralize name}} = require('./app/{{pluralize name}}/{{pluralize name}}.route')\n//end import routes`
    },
    {
      type: 'modify',
      path: 'app.js',
      pattern: '//end config routes',
      template: `app.use(base_api + '/{{pluralize name}}', {{pluralize name}});\n//end config routes`
    }
  ];

  data.props.forEach((element, index) => {
    //add validator
    actions.push({
      type: 'append',
      path: 'app/{{pluralize name}}/{{pluralize name}}.model.js',
      pattern:
        index === 0
          ? '//replace model structure'
          : generateValidator(data.props[index - 1]),
      template: generateValidator(element)
    });
    //add schema
    element.required &&
      actions.push({
        type: 'append',
        path: 'app/{{pluralize name}}/{{pluralize name}}.ctrl.js',
        pattern:
          index === 0
            ? '// replace require params'
            : `req.checkBody("${data.props[index - 1].propName}", "${
                data.props[index - 1].propName
              } should not be empty !").notEmpty();`,
        template: `  req.checkBody("${element.propName}", "${
          element.propName
        } should not be empty !").notEmpty();`
      });
  });

  return actions;
}

function generateValidator(element) {
  return `  ${element.propName}: {
    type: ${element.type},
    required: ${element.required ? 'true' : 'false'}
  },`;
}

function upperCaseFirstChart(txt) {
  return txt.substring(0, 1).toUpperCase() + txt.substring(1);
}

function pluralizeStr(txt) {
  const str = pluralize(txt);
  return str.substring(0, 1).toLocaleLowerCase() + str.substring(1);
}
