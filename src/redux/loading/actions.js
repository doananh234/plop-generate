import { makeConstantCreator, makeActionCreator } from '../reduxCreator';

export const MainLoadingTypes = makeConstantCreator('CHANGE_MAIN_LOADING_STATUS');

export const changeMainLoadingStatus = data =>
  makeActionCreator(MainLoadingTypes.CHANGE_MAIN_LOADING_STATUS, { data });
