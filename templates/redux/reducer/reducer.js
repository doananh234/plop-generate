import Immutable from 'seamless-immutable';
import { {{upperCaseFirstChart name }}sTypes } from './actions';
import { makeReducerCreator } from '../../utils/reduxUtils';

export const INITIAL_STATE = Immutable({
  data: {},
  ids: [],
  loading: false,
  itemLoading: {},
  limit: 10,
  count: 1,
  page: 1,
  pages: 2,
  filter: {},
  editRawData: null,
  createRawData: null,
});

//GET ALL

export const get{{pluralizeUpperCaseFirstChart name }} = (state, { data = {}, isRefresh }) => {
  return isRefresh ? INITIAL_STATE.merge({loading: true}) : state.merge({
    loading: true,
    page: state.page + 1,
    ...data,
  });
};

export const get{{pluralizeUpperCaseFirstChart name }}Success = (state, { data, ids, page, pages, count }) => {
  return state.merge({
    data: state.data.merge({...data}),
    ids: [...state.ids, ...ids],
    loading: false,
    page, 
    pages, 
    count,
  });
};

export const get{{pluralizeUpperCaseFirstChart name }}Failure = (state, { error }) => {
  return state.merge({
    loading: false,
    error,
  });
};

// GET BY ID

export const get{{upperCaseFirstChart name }}ById = (state, { data }) => {
  return state.merge({
    itemLoading: state.itemLoading.merge({[data.id]: true}),
    currentId: data.id,
  });
};

export const get{{upperCaseFirstChart name }}ByIdSuccess = (state, { data }) => {
  return state.merge({
    data: state.data.merge({[data.id]: data}),
    itemLoading: state.itemLoading.merge({[data.id]: false}),
  });
};

export const get{{upperCaseFirstChart name }}ByIdFailure = (state, { data, error  }) => {
  return state.merge({
    itemLoading: state.itemLoading.merge({[data.id]: false}),
    error,
  });
};

// EDIT

export const edit{{upperCaseFirstChart name }} = (state, { data }) => {
  return state.merge({
    itemLoading: state.itemLoading.merge({[data.id]: true}),
    editRawData: data
  });
};

export const edit{{upperCaseFirstChart name }}Success = (state, { data }) => {
  return state.merge({
    data: state.data.merge({[state.currentId]: data}),
    itemLoading: state.itemLoading.merge({[data.id]: false}),
    editRawData: null
  });
};

export const edit{{upperCaseFirstChart name }}Failure = (state, { data, error  }) => {
  return state.merge({
    itemLoading: state.itemLoading.merge({[data.id]: false}),
    error,
  });
};

// DELETE

export const delete{{upperCaseFirstChart name }} = (state, { data }) => {
  return state.merge({
    itemLoading: state.itemLoading.merge({[data.id]: true}),
  });
};

export const delete{{upperCaseFirstChart name }}Success = (state, { data }) => {
  return state.merge({
    data: state.data.merge({[data.id]: null}),
    itemLoading: state.itemLoading.merge({[data.id]: false}),
    currentId: null,
  });
};

export const delete{{upperCaseFirstChart name }}Failure = (state, { data, error }) => {
  return state.merge({
    itemLoading: state.itemLoading.merge({[data.id]: false}),
    error,
  });
};

// CREATE

export const create{{upperCaseFirstChart name }} = (state, { data }) => {
  return state.merge({
    loading: true,
    createRawData: data,
  });
};

export const create{{upperCaseFirstChart name }}Success = (state, { data }) => {
  return state.merge({
    data: state.data.merge({[data.id]: data}),
    loading: false,
    currentId: data.id,
    createRawData: null,
  });
};

export const create{{upperCaseFirstChart name }}Failure = (state, { error }) => {
  return state.merge({
    loading: false,
    error,
  });
};
const reducer = makeReducerCreator(INITIAL_STATE, {
  [{{pluralizeUpperCaseFirstChart name }}Types.GET_{{> myTitlePartial }}_FAILURE]: get{{pluralizeUpperCaseFirstChart name }}Failure,
  [{{pluralizeUpperCaseFirstChart name }}Types.GET_{{> myTitlePartial }}_SUCCESS]: get{{pluralizeUpperCaseFirstChart name }}Success,
  [{{pluralizeUpperCaseFirstChart name }}Types.GET_{{> myTitlePartial }}]: get{{pluralizeUpperCaseFirstChart name }},

  [{{pluralizeUpperCaseFirstChart name }}Types.GET_{{> upperCase }}_BY_ID_FAILURE]: get{{upperCaseFirstChart name }}ByIdFailure,
  [{{pluralizeUpperCaseFirstChart name }}Types.GET_{{> upperCase }}_BY_ID_SUCCESS]: get{{upperCaseFirstChart name }}ByIdSuccess,
  [{{pluralizeUpperCaseFirstChart name }}Types.GET_{{> upperCase }}_BY_ID]: get{{upperCaseFirstChart name }}ById,

  [{{pluralizeUpperCaseFirstChart name }}Types.EDIT_{{> upperCase }}_FAILURE]: edit{{upperCaseFirstChart name }}Failure,
  [{{pluralizeUpperCaseFirstChart name }}Types.EDIT_{{> upperCase }}_SUCCESS]: edit{{upperCaseFirstChart name }}Success,
  [{{pluralizeUpperCaseFirstChart name }}Types.EDIT_{{> upperCase }}]: edit{{upperCaseFirstChart name }},

  [{{pluralizeUpperCaseFirstChart name }}Types.DELETE_{{> upperCase }}_FAILURE]: delete{{upperCaseFirstChart name }}Failure,
  [{{pluralizeUpperCaseFirstChart name }}Types.DELETE_{{> upperCase }}_SUCCESS]: delete{{upperCaseFirstChart name }}Success,
  [{{pluralizeUpperCaseFirstChart name }}Types.DELETE_{{> upperCase }}]: delete{{upperCaseFirstChart name }},

  [{{pluralizeUpperCaseFirstChart name }}Types.CREATE_{{> upperCase }}_FAILURE]: create{{upperCaseFirstChart name }}Failure,
  [{{pluralizeUpperCaseFirstChart name }}Types.CREATE_{{> upperCase }}_SUCCESS]: create{{upperCaseFirstChart name }}Success,
  [{{pluralizeUpperCaseFirstChart name }}Types.CREATE_{{> upperCase }}]: create{{upperCaseFirstChart name }},
});

export default reducer;
