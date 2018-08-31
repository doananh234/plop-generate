import { makeActionCreator } from '../reduxCreator';

export const REST_FILTER_ACTION_TYPES = {
  REST_SEARCH: 'REST_SEARCH',
};
export const search = (resource, filter, isRefresh) =>
  makeActionCreator(REST_FILTER_ACTION_TYPES.REST_SEARCH, {
    resource,
    filter,
    isRefresh,
  });
