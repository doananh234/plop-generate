import { createSelector } from 'reselect';

const getDdds = state => state.ddd.list;

export const selectArtist = createSelector(
  [getDdds],
  (data) => {
    return data;
  },
);
