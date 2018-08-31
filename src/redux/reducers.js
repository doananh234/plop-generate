import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';
import { login } from './login/reducer';
import { loading } from './loading/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import App from './app/reducer';
import config from './config/reducer';
import rest from './rest/reducer';
import restFilter from './restFilter/reducer';

export default combineReducers({
  router: routerReducer,
  login,
  loading,
  notifications,
  LanguageSwitcher,
  App,
  config,
  rest,
  restFilter,
});
