import { ConfigTypes } from './actions';
import { makeReducerCreator } from '../reduxCreator';

export const initialState = {
  loading: false,
  iconCategories: [],
  error: null,
};

const getIconcategories = state => {
  return {
    ...state,
    loading: true,
  };
};
const getIconcategoriesSuccess = (state, { data }) => ({
  ...state,
  loading: false,
  iconCategories: data,
});

const getIconCategoriesFailure = (state, { error }) => {
  return {
    ...state,
    loading: false,
    error,
  };
};

export default makeReducerCreator(initialState, {
  [ConfigTypes.GET_ICON_CATEGORIES]: getIconcategories,
  [ConfigTypes.GET_ICON_CATEGORIES_FAILURE]: getIconCategoriesFailure,
  [ConfigTypes.GET_ICON_CATEGORIES_SUCCESS]: getIconcategoriesSuccess,
});
