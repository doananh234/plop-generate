import { call, put, cancel, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import _ from 'lodash';
import * as actions from './actions';
import { convertRequestParams, convertResponseData } from './dataProvider';
import { apiWrapper } from '../reduxCreator';
import { getList } from '../../api/restApi';

const debouncedIds = {};
const tasks = {};

const addIds = (resource, ids) => {
  if (!debouncedIds[resource]) {
    debouncedIds[resource] = [];
  }
  debouncedIds[resource] = _.union(debouncedIds[resource], ids);
};

function* finalize(resource) {
  // combined with cancel(), this debounces the calls
  yield call(delay, 50);
  yield fork(retrieveReferenceList, resource);
  delete tasks[resource];
  delete debouncedIds[resource];
}

export function* retrieveReference({ resource, ids }) {
  if (tasks[resource]) {
    yield cancel(tasks[resource]);
  }
  addIds(resource, ids);
  tasks[resource] = yield fork(finalize, resource);
}

export function* retrieveReferenceList(resource) {
  try {
    const params = convertRequestParams('getReference', debouncedIds[resource]);
    const response = yield call(apiWrapper, getList, false, false, resource, params);
    const convertData = convertResponseData('getAll', response);
    yield put(
      actions.retrieveReferenceSuccess(resource, {
        list: convertData.results,
        count: convertData.count,
      }),
    );
  } catch (error) {
    yield put(actions.retrieveReferenceFailed(resource, error));
  }
}
