import Immutable from 'seamless-immutable';
import { dddsTypes } from './actions';
import { createReducer, normalizeData } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  list: [],
  loading: false,
});

export const fetchDdds = (state, { data }) => {
  return state.merge({
    loading: true,
  });
};

export const fetchDddsSuccess = (state, { data }) => {
  return state.merge({
    list: data,
    loading: false,
  });
};

export const fetchDddsFailure = (state, { payload }) => {
  return state.merge({
    loading: false,
  });
};

const reducer = createReducer(INITIAL_STATE, {
  [DddsTypes.FETCH_DDDS_FAILURE]: fetchDddsFailure,
  [DddsTypes.FETCH_DDDS_SUCCESS]: fetchDddsSuccess,
  [DddsTypes.FETCH_DDDS]: fetchDdds,
});

export default reducer;
