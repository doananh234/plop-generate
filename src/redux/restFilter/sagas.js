import {
 call, put, cancel, fork, takeEvery,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from './actions';
import { retrieveList } from '../rest/actions';

const { REST_FILTER_ACTION_TYPES } = actions;
const debouncedFilters = {};
const tasks = {};

const replaceFilter = (resource, filter) => {
  if (!debouncedFilters[resource]) {
    debouncedFilters[resource] = {};
  }
  debouncedFilters[resource] = filter;
};

function* finalize(resource, isRefresh) {
  // combined with cancel(), this debounces the calls
  yield call(delay, 200);
  yield put(retrieveList(resource, debouncedFilters[resource], isRefresh));
  delete tasks[resource];
  delete debouncedFilters[resource];
}

export function* searchData({ resource, filter, isRefresh }) {
  if (tasks[resource]) {
    yield cancel(tasks[resource]);
  }
  replaceFilter(resource, filter);
  tasks[resource] = yield fork(finalize, resource, isRefresh);
}

function restSagas() {
  return [takeEvery(REST_FILTER_ACTION_TYPES.REST_SEARCH, searchData)];
}

export default restSagas();
