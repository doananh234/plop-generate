import { createSelector } from 'reselect';

const get{{upperCaseFirstChart name }}s = state => state.{{name}}.list;

export const selectArtist = createSelector(
  [get{{upperCaseFirstChart name }}s],
  (data) => {
    return data;
  },
);
