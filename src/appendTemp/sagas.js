import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import types from './types';
import { retrieveClasses } from './class/saga';
import {
  retrieveList,
  retrieveOneRecord,
  editMultiRecord,
  editRecord,
  delRecord,
  createRecord,
  retrieveReference
} from './rest/saga';
import { searchData } from './restFilter/saga';

function* sagas() {
  yield all([
    takeLatest(types.RETRIEVE_CLASSES, retrieveClasses),
    takeEvery(types.RETRIEVE_LIST, retrieveList),
    takeLatest(types.RETRIEVE_ONE_RECORD, retrieveOneRecord),
    takeLatest(types.EDIT_MULTI_RECORD, editMultiRecord),
    takeLatest(types.EDIT_RECORD, editRecord),
    takeLatest(types.DELETE_RECORD, delRecord),
    takeLatest(types.CREATE_RECORD, createRecord),
    takeEvery(types.RETRIEVE_REFERENCE, retrieveReference),
    takeLatest(types.REST_SEARCH, searchData)
  ]);
}

export default sagas;
