import { put, call, select } from 'redux-saga/effects';
import {
  get{{pluralizeUpperCaseFirstChart name }}Success,
  get{{pluralizeUpperCaseFirstChart name }}Failure,

  get{{upperCaseFirstChart name }}ByIdSuccess,
  get{{upperCaseFirstChart name }}ByIdFailure,

  edit{{upperCaseFirstChart name }}Success,
  edit{{upperCaseFirstChart name }}Failure,

  create{{upperCaseFirstChart name }}Success,
  create{{upperCaseFirstChart name }}Failure,

  delete{{upperCaseFirstChart name }}Success,
  delete{{upperCaseFirstChart name }}Failure,
} from './actions';
import {
  getAllApi, getDataByIdApi, postApi, putApi, delApi,
 } from '../../api/crud';
import { apiWrapper } from '../../utils/reduxUtils';

const RESOURCE_PATH = '{{pluralize name}}';

export function* get{{pluralizeUpperCaseFirstChart name }}Saga() {
  try {
    const {limit, page, filter} = yield select(state.{{pluralize name}});
    const response = yield call(apiWrapper, { isShowProgress: true }, getAllApi, RESOURCE_PATH, { limit, page, filter });
    if (!response.success) {
      yield put(get{{pluralizeUpperCaseFirstChart name }}Success(response.data));
      return;
    }
    yield put(get{{pluralizeUpperCaseFirstChart name }}Failure(response));
  } catch (error) {
    yield put(get{{pluralizeUpperCaseFirstChart name }}Failure(error));
  }
}

export function* get{{upperCaseFirstChart name }}ByIdSaga({ data }) {
  try {
    const response = yield call(apiWrapper, { isShowProgress: true }, getDataByIdApi, RESOURCE_PATH, data);
    if (!response.success) {
      yield put(get{{upperCaseFirstChart name }}ByIdSuccess(response.data));
      return;
    }
    yield put(get{{upperCaseFirstChart name }}ByIdFailure(response));
  } catch (error) {
    yield put(get{{upperCaseFirstChart name }}ByIdFailure(data, error));
  }
}

export function* edit{{upperCaseFirstChart name }}Saga({ data }) {
  try {
    const response = yield call(apiWrapper, { isShowProgress: true }, putApi, RESOURCE_PATH, data);
    if (!response.success) {
      yield put(edit{{upperCaseFirstChart name }}Success(response.data));
      return;
    }
    yield put(edit{{upperCaseFirstChart name }}Failure(response));
  } catch (error) {
    yield put(edit{{upperCaseFirstChart name }}Failure(data, error));
  }
}

export function* create{{upperCaseFirstChart name }}Saga({ data }) {
  try {
    const response = yield call(apiWrapper, { isShowProgress: true }, postApi, RESOURCE_PATH, data);
    if (!response.success) {
      yield put(create{{upperCaseFirstChart name }}Success(response.data));
      return;
    }
    yield put(create{{upperCaseFirstChart name }}Failure(response));
  } catch (error) {
    yield put(create{{upperCaseFirstChart name }}Failure(data, error));
  }
}

export function* delete{{upperCaseFirstChart name }}Saga({ data }) {
  try {
    const response = yield call(apiWrapper, { isShowProgress: true }, delApi, RESOURCE_PATH, data);
    if (!response.success) {
      yield put(delete{{upperCaseFirstChart name }}Success(response.data));
      return;
    }
    yield put(delete{{upperCaseFirstChart name }}Failure(response));
  } catch (error) {
    yield put(delete{{upperCaseFirstChart name }}Failure(data, error));
  }
}

const {{pluralize name}}Sagas = () => [
  takeLatest({{pluralizeUpperCaseFirstChart name }}Types.GET_{{> myTitlePartial }}, get{{pluralizeUpperCaseFirstChart name }}Saga),
  takeLatest({{pluralizeUpperCaseFirstChart name }}Types.GET_{{> upperCase }}_BY_ID, get{{upperCaseFirstChart name }}ByIdSaga),
  takeLatest({{pluralizeUpperCaseFirstChart name }}Types.EDIT_{{> upperCase }}, edit{{upperCaseFirstChart name }}Saga),
  takeLatest({{pluralizeUpperCaseFirstChart name }}Types.CREATE_{{> upperCase }}, create{{upperCaseFirstChart name }}Saga),
  takeLatest({{pluralizeUpperCaseFirstChart name }}Types.DELETE_{{> upperCase }}, delete{{upperCaseFirstChart name }}Saga),
];

export default {pluralize name}Sagas();