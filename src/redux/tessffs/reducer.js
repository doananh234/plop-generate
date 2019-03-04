import { makeReducerCreator } from '../../utils/reduxUtils';
import { makeCRUDReducerCreator, INITIAL_CRUD_STATE } from '../crudCreator/reducer';
import { MODEL, IGNORE_ACTIONS } from './actions';

export const INITIAL_STATE = {
  ...INITIAL_CRUD_STATE,
};

const reducer = makeReducerCreator(INITIAL_STATE, {
  ...makeCRUDReducerCreator(MODEL, IGNORE_ACTIONS),
});

export default reducer;
