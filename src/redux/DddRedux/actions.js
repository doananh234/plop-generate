import { createAction } from '../../utils/ReduxUtils';

export const DddsTypes = {
  FETCH_DDDS: 'FETCH_DDDS',
  FETCH_DDDS_SUCCESS: 'FETCH_DDDS_SUCCESS',
  FETCH_DDDS_FAILURE: 'FETCH_DDDS_FAILURE',
};

const fetchDdds = () => createAction(ArtistsTypes.FETCH_DDDS);
const fetchDddsSuccess = data =>
  createAction(ArtistsTypes.FETCH_DDDS_SUCCESS, { data });
const fetchDddsFailure = error =>
  createAction(ArtistsTypes.FETCH_DDDS_FAILURE, { error });

export default {
  fetchDdds,
  fetchDddsSuccess,
  fetchDddsFailure,
};
