import { put, call } from 'redux-saga/effects';
import DddsActions from './actions';
import { getDdds } from '../../api/ddds';

export function* fetchDdds() {
  try {
    const response = yield call(getDdds);
    yield put(DddsActions.fetchDddsSuccess(response.ddds));
  } catch (error) {
    yield put(DddsActions.fetchDddsFailure(error));
  }
}
