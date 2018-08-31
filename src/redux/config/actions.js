import { makeConstantCreator, makeActionCreator } from '../reduxCreator';

export const ConfigTypes = makeConstantCreator(
  'GET_ICON_CATEGORIES',
  'GET_ICON_CATEGORIES_SUCCESS',
  'GET_ICON_CATEGORIES_FAILURE',
);

export const getIconCategories = () => makeActionCreator(ConfigTypes.GET_ICON_CATEGORIES);
export const getIconCategoriesSuccess = data =>
  makeActionCreator(ConfigTypes.GET_ICON_CATEGORIES_SUCCESS, { data });
export const getIconCategoriesFailure = error =>
  makeActionCreator(ConfigTypes.GET_ICON_CATEGORIES_FAILURE, { error });
