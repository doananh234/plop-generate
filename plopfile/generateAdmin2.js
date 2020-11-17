const pluralize = require('pluralize');
const configInit = {
  description: 'generate init React Admin',
  prompts: [],
  actions: [
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [__dirname + '/../templates/react-admin/api/*.js'],
      destination: 'src/api/',
      base: __dirname + '/../templates/react-admin/api'
    },
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [__dirname + '/../templates/react-admin/components/**/**/*.js'],
      destination: 'src/components/',
      base: __dirname + '/../templates/react-admin/components'
    },
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [__dirname + '/../templates/react-admin/containers/**/**/*.js'],
      destination: 'src/containers/',
      base: __dirname + '/../templates/react-admin/containers'
    },
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [__dirname + '/../templates/react-admin/helpers/*.js'],
      destination: 'src/helpers/',
      base: __dirname + '/../templates/react-admin/helpers'
    },
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [__dirname + '/../templates/react-admin/redux/**/*.js'],
      destination: 'src/redux/',
      base: __dirname + '/../templates/react-admin/redux'
    },
    {
      type: 'append',
      path: 'src/redux/reducers.js',
      pattern: "import { reducer as notifications } from 'react-notification-system-redux';",
      template: "import rest from './rest/reducer';\nimport restFilter from './restFilter/reducer';"
    },
    {
      type: 'append',
      path: 'src/redux/reducers.js',
      pattern: /(export)( )(default)( )(combineReducers)(\()(\{)/i,
      template: 'rest,\nrestFilter,'
    },
  ]
};

const configGenerate = (rootPath = '.') => {
  return [
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [__dirname + '/../templates/react-admin-2/redux/model/*.js'],
      destination: 'src/redux/{{pluralize name}}/',
      base: __dirname + '/../templates/react-admin-2/redux/model/'
    },
    {
      type: 'append',
      path: rootPath + '/src/redux/reducers.js',
      // pattern: /(export)( )(default)( )(\{)/i,
      pattern: `// import here`,
      template: "import {{pluralize name}} from './{{pluralize name}}/slice';"
    },
    {
      type: 'append',
      path: rootPath + '/src/redux/reducers.js',
      // pattern: /(export)( )(default)( )(\{)/i,
      pattern: `// add reducer here`,
      template: '    {{pluralize name}},'
    },
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [__dirname + '/../templates/react-admin-2/containers/Model/**/*.js'],
      destination: rootPath + '/src/containers/{{upperCaseFirstChartWithPluralize name}}/',
      base: __dirname + '/../templates/react-admin-2/containers/Model/'
    },
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [__dirname + '/../templates/react-admin-2/pages/Model/**/*.js'],
      destination: rootPath + '/src/pages/{{upperCaseFirstChartWithPluralize name}}/',
      base: __dirname + '/../templates/react-admin-2/pages/Model/'
    },
    {
      type: 'append',
      path: rootPath + '/src/routes/PrivateRoutes/index.js',
      pattern: `import PrivateLayout from 'layout/PrivateLayout';`,
      template:
        "import {{upperCaseFirstChartWithPluralize name}} from 'pages/{{upperCaseFirstChartWithPluralize name}}';"
    },

    {
      type: 'append',
      path: rootPath + '/src/routes/PrivateRoutes/index.js',
      pattern: /(const)( )(routes)( )(=)( )(\[)/i,
      template: `
  {
    path: '/{{pluralize name}}',
    routes: [
      {
        path: '/',
        component: {{upperCaseFirstChartWithPluralize name}}.List,
      },
      {
        path: '/create',
        component: {{upperCaseFirstChartWithPluralize name}}.Create,
      },
      {
        path: '/:id/edit',
        component: {{upperCaseFirstChartWithPluralize name}}.Edit,
      },
    ],
  },`
    },
    {
      type: 'append',
      path: rootPath + '/src/routes/ModalRoute/index.js',
      pattern: `import Modal from 'components/common/Modal';`,
      template:
        "import {{upperCaseFirstChartWithPluralize name}} from 'pages/{{upperCaseFirstChartWithPluralize name}}';"
    },
    {
      type: 'append',
      path: rootPath + '/src/routes/ModalRoute/index.js',
      pattern: /(const)( )(modalRoutes)( )(=)( )(\[)/i,
      template: `
  {
    path: '/{{pluralize name}}',
    routes: [
      {
        path: '/create',
        component: {{upperCaseFirstChartWithPluralize name}}.Create,
      },
      {
        path: '/edit',
        component: {{upperCaseFirstChartWithPluralize name}}.Edit,
      },
    ],
  },`
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'src/redux/crudActions.js',
      templateFile: __dirname + '/../templates/react-admin-2/redux/crudActions.js'
    },
    {
      type: 'append',
      path: rootPath + '/src/redux/crudActions.js',
      pattern: `// import crud action`,
      template: "import { {{pluralize name}}Actions as {{pluralize name}} } from './{{pluralize name}}/actions';"
    },
    {
      type: 'append',
      path: rootPath + '/src/redux/crudActions.js',
      pattern: `// actions here`,
      template: '  {{pluralize name}},'
    }
  ];
};

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'Model name: '
  },
  {
    type: 'recursiveLoop',
    name: 'props',
    message: 'What is property Name?'
  }
];

function upperCaseFirstChart(txt) {
  return txt.substring(0, 1).toUpperCase() + txt.substring(1);
}

function pluralizeStr(txt) {
  const str = pluralize(txt);
  return str.substring(0, 1).toLocaleLowerCase() + str.substring(1);
}

exports.init = function(plop) {
  // controller generator
  plop.setHelper('upperCaseFirstChart', txt => upperCaseFirstChart(txt));
  plop.setHelper('upperCase', txt => txt.toUpperCase());
  plop.setPartial('myTitlePartial', '{{upperCase name}}');
  plop.setHelper('pluralize', txt => pluralizeStr(txt));
  plop.setHelper('upperCaseFirstChartWithPluralize', txt => upperCaseFirstChart(pluralizeStr(txt)));
  plop.setPrompt('recursiveLoop', require('../promts/loopPromts'));

  plop.setGenerator('generate react 2', {
    description: 'Add new Anh.Doan admin 2',
    prompts: prompts,
    actions: customAction()
  });
  // plop.setGenerator('generate init react admin', configInit);
};

const customAction = (rootPath = '.') => data => {
  const actions = configGenerate(rootPath);
  let modelForm = '';
  let modelList = '';
  let modelShow = '';
  let modelFilter = '';
  data.props.forEach((element, index) => {
    //add validator
    modelFilter +=
      (index !== 0 ? '\n    ' : '') +
      `<RestInputItem source="${element}" placeholder="{{pluralize name}}.${element}" />`;
    modelForm +=
      (index !== 0 ? '\n    ' : '') + `<RestInputItem source="${element}" header="{{pluralize name}}.${element}" />`;
    modelList +=
      (index !== 0 ? '\n    ' : '') + `<RestFieldItem source="${element}" header="{{pluralize name}}.${element}" />`;
    modelShow +=
      (index !== 0 ? '\n    ' : '') + `<RestFieldItem source="${element}" header="{{pluralize name}}.${element}" />`;
  });

  actions.push({
    type: 'modify',
    path: rootPath + '/src/containers/{{upperCaseFirstChartWithPluralize name}}/List/index.js',
    pattern: '//content here',
    template: modelList
  });
  actions.push({
    type: 'modify',
    path:
      rootPath + '/src/containers/{{upperCaseFirstChartWithPluralize name}}/components/Form/index.js',
    pattern: '//content here',
    template: modelForm
  });

  actions.push({
    type: 'modify',
    path:
      rootPath + '/src/containers/{{upperCaseFirstChartWithPluralize name}}/components/Filter/index.js',
    pattern: '//content here',
    template: modelFilter
  });
  actions.push({
    type: 'modify',
    path: rootPath + '/src/containers/{{upperCaseFirstChartWithPluralize name}}/Show/index.js',
    pattern: '//content here',
    template: modelShow
  });
  return actions;
};

exports.customAction = customAction;
