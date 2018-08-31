import { takeEvery, put, call } from 'redux-saga/effects';
import { apiWrapper } from '../reduxCreator';
import { ConfigTypes, getIconCategoriesFailure, getIconCategoriesSuccess } from './actions';
import { getIconCategoriesApi } from '../../api/configs';

function* getIconCategoriesSaga() {
  try {
    const response = yield call(apiWrapper, getIconCategoriesApi, false, false);
    if (response.result) {
      yield put(getIconCategoriesSuccess(response.result));
    } else {
      yield put(getIconCategoriesFailure(response));
    }
  } catch (error) {
    yield put(getIconCategoriesFailure(error));
  }
}

export default [takeEvery(ConfigTypes.GET_ICON_CATEGORIES, getIconCategoriesSaga)];
