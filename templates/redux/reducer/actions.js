import { createAction } from '../../utils/ReduxUtils';

export const {{upperCaseFirstChart name }}sTypes = {
  FETCH_{{> myTitlePartial }}S: 'FETCH_{{> myTitlePartial }}S',
  FETCH_{{> myTitlePartial }}S_SUCCESS: 'FETCH_{{> myTitlePartial }}S_SUCCESS',
  FETCH_{{> myTitlePartial }}S_FAILURE: 'FETCH_{{> myTitlePartial }}S_FAILURE',
};

const fetch{{upperCaseFirstChart name }}s = () => createAction(ArtistsTypes.FETCH_{{> myTitlePartial }}S);
const fetch{{upperCaseFirstChart name }}sSuccess = data =>
  createAction(ArtistsTypes.FETCH_{{> myTitlePartial }}S_SUCCESS, { data });
const fetch{{upperCaseFirstChart name }}sFailure = error =>
  createAction(ArtistsTypes.FETCH_{{> myTitlePartial }}S_FAILURE, { error });

export default {
  fetch{{upperCaseFirstChart name }}s,
  fetch{{upperCaseFirstChart name }}sSuccess,
  fetch{{upperCaseFirstChart name }}sFailure,
};
