import { takeLatest, all } from 'redux-saga/effects';
/* ------------- Types ------------- */
import { DddTypes } from './DddRedux/actions';
/* ------------- Sagas ------------- */
import { fetchDdds } from './DddRedux/sagas';
export default function* root() {
  yield all([
takeLatest(DddTypes.FETCH_DDDS, fetchDdds),]);
}
