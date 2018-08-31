const config = {
  description: 'generate redux structure',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'name of reducer'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/redux/{{upperCaseFirstChart name}}Redux/actions.js',
      templateFile: 'templates/redux/reducer/actions.js'
    },
    {
      type: 'add',
      path: 'src/redux/{{upperCaseFirstChart name}}Redux/reducer.js',
      templateFile: 'templates/redux/reducer/reducer.js'
    },
    {
      type: 'add',
      path: 'src/redux/{{upperCaseFirstChart name}}Redux/saga.js',
      templateFile: 'templates/redux/reducer/saga.js'
    },
    {
      type: 'add',
      path: 'src/redux/{{upperCaseFirstChart name}}Redux/selectors.js',
      templateFile: 'templates/redux/reducer/selectors.js'
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'src/redux/reducers.js',
      templateFile: 'templates/redux/reducers.js'
    },
    {
      type: 'add',
      skipIfExists: true,
      path: 'src/redux/sagas.js',
      templateFile: 'templates/redux/sagas.js'
    },
    {
      type: 'add',
      path: 'src/api/{{name}}.js',
      templateFile: 'templates/api/templateApi.js'
    },
    {
      type: 'append',
      path: 'src/redux/reducers.js',
      pattern: "import { combineReducers } from 'redux';",
      template:
        "import {{name}} from './{{upperCaseFirstChart name}}Redux/reducer';"
    },
    {
      type: 'append',
      path: 'src/redux/reducers.js',
      pattern: /(export)( )(default)( )(combineReducers)(\()(\{)/i,
      template: '{{name}},'
    },
    {
      type: 'append',
      path: 'src/redux/sagas.js',
      pattern: '/* ------------- Types ------------- */',
      template:
        "import { {{upperCaseFirstChart name}}Types } from './{{upperCaseFirstChart name}}Redux/actions';"
    },
    {
      type: 'append',
      path: 'src/redux/sagas.js',
      pattern: '/* ------------- Sagas ------------- */',
      template:
        "import { fetch{{upperCaseFirstChart name }}s } from './{{upperCaseFirstChart name}}Redux/sagas';"
    },
    {
      type: 'append',
      path: 'src/redux/sagas.js',
      pattern: /(yield)( )(all)(\()(\[)/i,
      template:
        'takeLatest({{upperCaseFirstChart name}}Types.FETCH_{{> myTitlePartial }}S, fetch{{upperCaseFirstChart name }}s),'
    }
  ]
};
module.exports = config;
