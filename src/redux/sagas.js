import { all } from 'redux-saga/effects';
import loginSaga from './login/sagas';
import configSaga from './config/sagas';
import restSaga from './rest/sagas';
import restFilterSaga from './restFilter/sagas';

export default function* root() {
  yield all([...loginSaga, ...configSaga, ...restSaga, ...restFilterSaga]);
}
