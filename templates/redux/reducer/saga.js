import { put, call } from 'redux-saga/effects';
import {{upperCaseFirstChart name }}sActions from './actions';
import { get{{upperCaseFirstChart name }}s } from '../../api/{{name }}s';

export function* fetch{{upperCaseFirstChart name }}s() {
  try {
    const response = yield call(get{{upperCaseFirstChart name }}s);
    yield put({{upperCaseFirstChart name }}sActions.fetch{{upperCaseFirstChart name }}sSuccess(response.{{name }}s));
  } catch (error) {
    yield put({{upperCaseFirstChart name }}sActions.fetch{{upperCaseFirstChart name }}sFailure(error));
  }
}
