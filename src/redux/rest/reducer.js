import { makeReducerCreator } from '../reduxCreator';
import { REST_ACTION_TYPES } from './actions';

const initialState = {
  errorRequest: false,
};
const retrieveList = (state, action) => {
  return {
    ...state,
    [action.resource]: {
      ...state[action.resource],
      ...action.filter,
    },
  };
};

const retrieveListSuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: { ...state[action.resource], ...action.data },
  };
};

const retrieveListFailed = (state, { error }) => {
  return {
    ...state,
    error,
  };
};

const retrieveOneRecordSuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: action.data,
    errorRequest: false,
  };
};

const retrieveOneRecordFailed = (state, { error }) => {
  return {
    ...state,
    errorRequest: true,
    error,
  };
};

const deleteRecordSuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: { ...state[action.resource], ...action.data },
    errorRequest: false,
  };
};

const deleteRecordFailed = (state, { error }) => {
  return {
    ...state,
    errorRequest: true,
    error,
  };
};

const editRecordSuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: { ...state[action.resource], ...action.data },
    errorRequest: false,
  };
};

const editRecordFailed = (state, { error }) => {
  return {
    ...state,
    errorRequest: true,
    error,
  };
};

const createRecordSuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: { ...state[action.resource], ...action.data },
    errorRequest: false,
  };
};

const createRecordFailed = (state, { error }) => {
  return {
    ...state,
    errorRequest: true,
    error,
  };
};

const retrieveReference = (state, action) => {
  return {
    ...state,
    [`${[action.resource]}Reference`]: {
      ...state[`${[action.resource]}Reference`],
      ...action.filter,
    },
  };
};

const retrieveReferenceSuccess = (state, action) => {
  return {
    ...state,
    [`${[action.resource]}Reference`]: {
      ...state[`${[action.resource]}Reference`],
      ...action.data,
    },
  };
};

const retrieveReferenceFailed = (state, { error }) => {
  return {
    ...state,
    error,
  };
};
export default makeReducerCreator(initialState, {
  [REST_ACTION_TYPES.RETRIEVE_LIST]: retrieveList,
  [REST_ACTION_TYPES.RETRIEVE_LIST_SUCCESS]: retrieveListSuccess,
  [REST_ACTION_TYPES.RETRIEVE_LIST_FAILED]: retrieveListFailed,

  [REST_ACTION_TYPES.RETRIEVE_ONE_RECORD_SUCCESS]: retrieveOneRecordSuccess,
  [REST_ACTION_TYPES.RETRIEVE_ONE_RECORD_FAILED]: retrieveOneRecordFailed,

  [REST_ACTION_TYPES.DELETE_RECORD_SUCCESS]: deleteRecordSuccess,
  [REST_ACTION_TYPES.DELETE_RECORD_FAILED]: deleteRecordFailed,

  [REST_ACTION_TYPES.EDIT_RECORD_SUCCESS]: editRecordSuccess,
  [REST_ACTION_TYPES.EDIT_RECORD_FAILED]: editRecordFailed,

  [REST_ACTION_TYPES.CREATE_RECORD_SUCCESS]: createRecordSuccess,
  [REST_ACTION_TYPES.CREATE_RECORD_FAILED]: createRecordFailed,

  [REST_ACTION_TYPES.RETRIEVE_REFERENCE]: retrieveReference,
  [REST_ACTION_TYPES.RETRIEVE_REFERENCE_SUCCESS]: retrieveReferenceSuccess,
  [REST_ACTION_TYPES.RETRIEVE_REFERENCE_FAILED]: retrieveReferenceFailed,
});
