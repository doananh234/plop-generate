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
      templateFiles: [
        __dirname + '/../templates/react-admin/components/**/**/*.js'
      ],
      destination: 'src/components/',
      base: __dirname + '/../templates/react-admin/components'
    },
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [
        __dirname + '/../templates/react-admin/containers/**/**/*.js'
      ],
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
      pattern:
        "import { reducer as notifications } from 'react-notification-system-redux';",
      template:
        "import rest from './rest/reducer';\nimport restFilter from './restFilter/reducer';"
    },
    {
      type: 'append',
      path: 'src/redux/reducers.js',
      pattern: /(export)( )(default)( )(combineReducers)(\()(\{)/i,
      template: 'rest,\nrestFilter,'
    },
    {
      type: 'append',
      path: 'src/redux/sagas.js',
      pattern: "import { all } from 'redux-saga/effects';",
      template:
        "import restSaga from './rest/sagas';\nimport restFilterSaga from './restFilter/sagas';"
    },
    {
      type: 'append',
      path: 'src/redux/sagas.js',
      pattern: /(yield)(.)(all)(\()(\[)/i,
      template: '...restSaga, ...restFilterSaga,'
    }
  ]
};

const configGenerate = [
  {
    type: 'addMany',
    skipIfExists: true,
    templateFiles: [
      __dirname + '/../templates/react-admin/appendTemp/Model/**/*.js'
    ],
    destination: './src/containers/{{upperCaseFirstChart name}}/',
    base: __dirname + '/../templates/react-admin/appendTemp/Model/'
  },
  {
    type: 'append',
    path: './src/routes/PrivateRoute/index.js',
    pattern: /(const)( )(restRoutes)( )(=)( )(\[)/i,
    template: `
    {
      path: '/{{name}}',
      component: Loadable({
        loader: () => import('../../containers/{{upperCaseFirstChart name}}/List'),
        loading: Loading,
      }),
    },`
  },
  {
    type: 'append',
    path: './src/routes/PrivateRoute/index.js',
    pattern: /(const)( )(modalRoutes)( )(=)( )(\[)/i,
    template: `
    {
      path: '/{{name}}/create',
      component: Loadable({
        loader: () => import('../../containers/{{upperCaseFirstChart name}}/Create'),
        loading: Loading,
      }),
    },
    {
      path: '/{{name}}/:id/edit',
      component: Loadable({
        loader: () => import('../../containers/{{upperCaseFirstChart name}}/Edit'),
        loading: Loading,
      }),
    },
    {
      path: '/{{name}}/:id/show',
      component: Loadable({
        loader: () => import('../../containers/{{upperCaseFirstChart name}}/Show'),
        loading: Loading,
      }),
    },`
  }
];

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
      }
    ]
  }
];

function upperCaseFirstChart(txt) {
  return txt.substring(0, 1).toUpperCase() + txt.substring(1);
}

function pluralizeStr(txt) {
  const str = pluralize(txt);
  return str.substring(0, 1).toLocaleLowerCase() + str.substring(1);
}

module.exports = function(plop) {
  // controller generator
  plop.setHelper('upperCaseFirstChart', txt => upperCaseFirstChart(txt));
  plop.setHelper('upperCase', txt => txt.toUpperCase());
  plop.setPartial('myTitlePartial', '{{upperCase name}}');
  plop.setHelper('pluralize', txt => pluralizeStr(txt));
  plop.setPrompt('recursive', require('inquirer-recursive'));

  plop.setGenerator('generate init react admin', configInit);
  plop.setGenerator('generate react admin view', {
    description: 'Add new Anh.Doan admin =>>>',
    prompts: prompts,
    actions: customAction
  });
};

function customAction(data) {
  const actions = configGenerate;
  let modelForm = '';
  let modelList = '';
  let modelShow = '';
  data.props.forEach((element, index) => {
    //add validator

    modelForm +=
      (index !== 0 ? '\n    ' : '') +
      `<RestFormInput source="${element.propName}" title="${
        element.propName
      }" />`;
    modelList +=
      (index !== 0 ? '\n    ' : '') +
      `<Label source="${element.propName}" title="${element.propName}" />`;
    modelShow +=
      (index !== 0 ? '\n      ' : '') +
      `<TextField source="${element.propName}" title="${element.propName}" />`;
  });

  actions.push({
    type: 'modify',
    path: 'src/containers/{{upperCaseFirstChart name}}/List/index.js',
    pattern: '//content here',
    template: modelList
  });
  actions.push({
    type: 'modify',
    path: 'src/containers/{{upperCaseFirstChart name}}/Edit/index.js',
    pattern: '//content here',
    template: modelForm
  });
  actions.push({
    type: 'modify',
    path: 'src/containers/{{upperCaseFirstChart name}}/Create/index.js',
    pattern: '//content here',
    template: modelForm
  });
  actions.push({
    type: 'modify',
    path: 'src/containers/{{upperCaseFirstChart name}}/Show/index.js',
    pattern: '//content here',
    template: modelShow
  });
  return actions;
}
