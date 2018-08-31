import { makeReducerCreator } from '../reduxCreator';
import { REST_FILTER_ACTION_TYPES } from './actions';

const initialState = {};

const search = (state, action) => {
  return {
    [action.resource]: action.data,
  };
};

export default makeReducerCreator(initialState, {
  [REST_FILTER_ACTION_TYPES.REST_SEARCH]: search,
});
