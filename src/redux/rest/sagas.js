import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import { goBack } from 'react-router-redux';
import {
  getList,
  getOneRecord,
  putRecord,
  deleteRecord,
  postRecord,
  batch,
} from '../../api/restApi';
import * as actions from './actions';
import { apiWrapper } from '../reduxCreator';
import { retrieveReference as _retrieveReference } from './referenceSaga';
import { convertRequestParams, convertResponseData } from './dataProvider';

const { REST_ACTION_TYPES } = actions;

export const retrieveReference = _retrieveReference;

export function* retrieveList({ resource, isRefresh }) {
  try {
    const { limit, skip, filter } = yield select(state => state.rest[resource]);
    const params = convertRequestParams('getAll', { limit: limit || 10, skip: skip || 0, filter });
    const response = yield call(apiWrapper, getList, true, false, resource, params);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('getAll', response);
    // const newList =
    //   rest[resource] && !isRefresh
    //     ? _.unionBy(rest[resource].list, convertData.results, 'id')
    //     : convertData.results;
    yield put(
      actions.retrieveListSuccess(resource, {
        list: convertData.results,
        count: rest[resource] && !isRefresh ? rest[resource].count : convertData.count,
      }),
    );
  } catch (error) {
    yield put(actions.retrieveListFailed(resource, error));
  }
}

export function* retrieveOneRecord({ resource, id, data }) {
  try {
    const response = yield call(apiWrapper, getOneRecord, true, false, resource, id, data);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('getOne', response);
    const newList = rest[resource]
      ? _.unionBy(rest[resource].list, [convertData], 'id')
      : [convertData];
    yield put(
      actions.retrieveOneRecordSuccess(resource, {
        list: newList,
        count: rest[resource] ? rest[resource].count : newList.length,
      }),
    );
  } catch (error) {
    yield put(actions.retrieveOneRecordFailed(error));
  }
}

export function* editMultiRecord({ resource, data }) {
  try {
    const requestParams = convertRequestParams('editMulti', data, resource);

    const response = yield call(apiWrapper, batch, true, false, requestParams);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('editMulti', response);

    data.map((item, index) => {
      return {
        ...item,
        ...convertData[index],
      };
    });
    const newList = _.unionBy(convertData, rest[resource].list, 'id');
    yield put(
      actions.editRecordSuccess(resource, {
        list: newList,
        count: rest[resource].count,
      }),
    );
  } catch (error) {
    yield put(actions.editRecordFailed(error));
  }
}

export function* editRecord({ resource, id, data, isGoBack }) {
  try {
    const response = yield call(apiWrapper, putRecord, true, false, resource, id, data);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('edit', response);
    const newList = rest[resource].list.map(item => {
      return item.id === id ? { ...item, ...data, ...convertData } : item;
    });
    yield put(
      actions.editRecordSuccess(resource, {
        list: newList,
        count: rest[resource].count,
      }),
    );
    yield put(actions.retrieveOneRecord(resource, id));
    if (!isGoBack) {
      yield put(goBack());
    }
  } catch (error) {
    yield put(actions.editRecordFailed(error));
  }
}

export function* createRecord({ resource, data }) {
  try {
    const response = yield call(apiWrapper, postRecord, true, false, resource, data);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('create', response);
    const newList = rest[resource]
      ? [
          {
            ...data,
            ...convertData,
          },
          ...rest[resource].list,
        ]
      : [convertData];
    yield put(
      actions.createRecordSuccess(resource, {
        list: newList,
        count: rest[resource] ? rest[resource].count + 1 : 1,
      }),
    );
    yield put(goBack());
  } catch (error) {
    yield put(actions.createRecordFailed(error));
  }
}

export function* delRecord({ resource, id }) {
  try {
    yield call(apiWrapper, deleteRecord, true, false, resource, id);
    const rest = yield select(state => state.rest);
    const newList = _.xorBy(rest[resource].list, [{ id }], 'id');
    yield put(
      actions.deleteRecordSuccess(resource, {
        list: newList,
        count: rest[resource].count - 1,
      }),
    );
  } catch (error) {
    yield put(actions.deleteRecordFailed(error));
  }
}

function restSagas() {
  return [
    takeEvery(REST_ACTION_TYPES.RETRIEVE_LIST, retrieveList),
    takeLatest(REST_ACTION_TYPES.RETRIEVE_ONE_RECORD, retrieveOneRecord),
    takeLatest(REST_ACTION_TYPES.EDIT_MULTI_RECORD, editMultiRecord),
    takeLatest(REST_ACTION_TYPES.EDIT_RECORD, editRecord),
    takeLatest(REST_ACTION_TYPES.DELETE_RECORD, delRecord),
    takeLatest(REST_ACTION_TYPES.CREATE_RECORD, createRecord),
    takeEvery(REST_ACTION_TYPES.RETRIEVE_REFERENCE, retrieveReference),
  ];
}

export default restSagas();
