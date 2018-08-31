import { MainLoadingTypes } from './actions';
import { makeReducerCreator } from '../reduxCreator';

export const initialState = {
  isMainLoading: false,
};

const changeMainLoadingStatus = (state, action) => {
  return {
    ...state,
    isMainLoading: action.data,
  };
};

export const loading = makeReducerCreator(initialState, {
  [MainLoadingTypes.CHANGE_MAIN_LOADING_STATUS]: changeMainLoadingStatus,
});
