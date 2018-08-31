import { takeEvery, put, call } from 'redux-saga/effects';
import { apiWrapper } from '../reduxCreator';
import { LoginTypes, loginSuccess, loginFailure } from './actions';
import { loginApi, logoutApi } from '../../api/users';

function* loginSaga({ username, password }) {
  try {
    const response = yield call(apiWrapper, loginApi, true, true, username, password);
    if (response.sessionToken) {
      localStorage.setItem('sessionToken', response.sessionToken);
      localStorage.setItem('username', response.username);
      yield put(loginSuccess(response));
    } else {
      yield put(loginFailure(response));
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* logoutSaga() {
  localStorage.clear('sessionToken');
  localStorage.clear('username');
  try {
    yield call(apiWrapper, logoutApi);
  } catch (error) {
    // /logic here
  }
}
export default [takeEvery(LoginTypes.LOGIN, loginSaga), takeEvery(LoginTypes.LOGOUT, logoutSaga)];
