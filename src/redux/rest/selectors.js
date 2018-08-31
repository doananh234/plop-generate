import { createSelector } from 'reselect';
import _ from 'lodash';

const getRawResources = (state, resource) => state.rest[resource];

export const getResources = createSelector([getRawResources], resources => {
  return resources && resources.list ? resources.list : [];
});

export const getResourcesObjFormater = createSelector([getRawResources], resources => {
  return resources && resources.list ? _.keyBy(resources.list, 'id') : {};
});
