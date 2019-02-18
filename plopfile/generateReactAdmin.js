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

const configGenerate = (rootPath = '.') => {
  return [
    {
      type: 'addMany',
      skipIfExists: true,
      templateFiles: [
        __dirname + '/../templates/react-admin/appendTemp/Model/**/*.js'
      ],
      destination:
        rootPath + '/src/containers/{{upperCaseFirstChartWithPluralize name}}/',
      base: __dirname + '/../templates/react-admin/appendTemp/Model/'
    },
    {
      type: 'append',
      path: rootPath + '/src/routes/PrivateRoute/index.js',
      pattern: /(const)( )(restRoutes)( )(=)( )(\[)/i,
      template: `
  {
    path: '/{{pluralize name}}',
    component: lazy(() => import('../../containers/{{upperCaseFirstChartWithPluralize name}}/List')),
  },`
    },
    {
      type: 'append',
      path: rootPath + '/src/routes/ModalRoute/index.js',
      pattern: /(const)( )(modalRoutes)( )(=)( )(\[)/i,
      template: `
  {
    path: '/{{pluralize name}}/create',
    component: lazy(() => import('../../containers/{{upperCaseFirstChartWithPluralize name}}/Create')),
  },
  {
    path: '/{{pluralize name}}',
    component: lazy(() => import('../../containers/{{upperCaseFirstChartWithPluralize name}}/Edit')),
  },`
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
  plop.setHelper('upperCaseFirstChartWithPluralize', txt =>
    upperCaseFirstChart(pluralizeStr(txt))
  );
  plop.setPrompt('recursiveLoop', require('../promts/loopPromts'));

  plop.setGenerator('generate react admin view', {
    description: 'Add new Anh.Doan admin =>>>',
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
      (index !== 0 ? '\n      ' : '') +
      `<ColLayout elementProps={elementPropsCol}><RestFormInput source="${element}" placeholder="${element}" /></ColLayout>`;
    modelForm +=
      (index !== 0 ? '\n      ' : '') +
      `<RestFormInput source="${element}" title="${element}" />`;
    modelList +=
      (index !== 0 ? '\n    ' : '') +
      `<Label source="${element}" title="${element}" />`;
    modelShow +=
      (index !== 0 ? '\n      ' : '') +
      `<TextField source="${element}" title="${element}" />`;
  });

  actions.push({
    type: 'modify',
    path:
      rootPath +
      '/src/containers/{{upperCaseFirstChartWithPluralize name}}/List/index.js',
    pattern: '//content here',
    template: modelList
  });
  actions.push({
    type: 'modify',
    path:
      rootPath +
      '/src/containers/{{upperCaseFirstChartWithPluralize name}}/components/Form.js',
    pattern: '//content here',
    template: modelForm
  });

  actions.push({
    type: 'modify',
    path:
      rootPath +
      '/src/containers/{{upperCaseFirstChartWithPluralize name}}/components/Filter.js',
    pattern: '//content here',
    template: modelFilter
  });
  actions.push({
    type: 'modify',
    path:
      rootPath +
      '/src/containers/{{upperCaseFirstChartWithPluralize name}}/Show/index.js',
    pattern: '//content here',
    template: modelShow
  });
  return actions;
};

exports.customAction = customAction;
