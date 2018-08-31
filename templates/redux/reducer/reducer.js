import Immutable from 'seamless-immutable';
import { {{name }}sTypes } from './actions';
import { createReducer, normalizeData } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  list: [],
  loading: false,
});

export const fetch{{upperCaseFirstChart name }}s = (state, { data }) => {
  return state.merge({
    loading: true,
  });
};

export const fetch{{upperCaseFirstChart name }}sSuccess = (state, { data }) => {
  return state.merge({
    list: data,
    loading: false,
  });
};

export const fetch{{upperCaseFirstChart name }}sFailure = (state, { payload }) => {
  return state.merge({
    loading: false,
  });
};

const reducer = createReducer(INITIAL_STATE, {
  [{{upperCaseFirstChart name }}sTypes.FETCH_{{> myTitlePartial }}S_FAILURE]: fetch{{upperCaseFirstChart name }}sFailure,
  [{{upperCaseFirstChart name }}sTypes.FETCH_{{> myTitlePartial }}S_SUCCESS]: fetch{{upperCaseFirstChart name }}sSuccess,
  [{{upperCaseFirstChart name }}sTypes.FETCH_{{> myTitlePartial }}S]: fetch{{upperCaseFirstChart name }}s,
});

export default reducer;
