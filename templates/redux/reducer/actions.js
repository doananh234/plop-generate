import { makeActionCreator, makeConstantCreator } from '../../utils/reduxUtils';

export const {{pluralizeUpperCaseFirstChart name }}Types = makeConstantCreator(
  'GET_{{> myTitlePartial }}',
  'GET_{{> myTitlePartial }}_SUCCESS',
  'GET_{{> myTitlePartial }}_FAILURE',
  
  'GET_{{> upperCase }}_BY_ID',
  'GET_{{> upperCase }}_BY_ID_SUCCESS',
  'GET_{{> upperCase }}_BY_ID_FAILURE',
  
  'EDIT_{{> upperCase }}',
  'EDIT_{{> upperCase }}_SUCCESS',
  'EDIT_{{> upperCase }}_FAILURE',

  'CREATE_{{> upperCase }}',
  'CREATE_{{> upperCase }}_SUCCESS',
  'CREATE_{{> upperCase }}_FAILURE',

  'DELETE_{{> upperCase }}',
  'DELETE_{{> upperCase }}_SUCCESS',
  'DELETE_{{> upperCase }}_FAILURE',
);

export const get{{pluralizeUpperCaseFirstChart name }} = (data, isRefresh) => makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.GET_{{> myTitlePartial }}, { data, isRefresh });
export const get{{pluralizeUpperCaseFirstChart name }}Success = data =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.GET_{{> myTitlePartial }}_SUCCESS, { data });
export const get{{pluralizeUpperCaseFirstChart name }}Failure = error =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.GET_{{> myTitlePartial }}_FAILURE, { error });

export const get{{upperCaseFirstChart name }}ById = (data) => makeActionCreator({{upperCaseFirstChart name }}Types.GET_{{> upperCase }}_BY_ID, {data});
export const get{{upperCaseFirstChart name }}ByIdSuccess = data =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.GET_{{> upperCase }}_BY_ID_SUCCESS, { data });
export const get{{upperCaseFirstChart name }}ByIdFailure = (data, error) =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.GET_{{> upperCase }}_BY_ID_FAILURE, { data, error });
  
export const edit{{upperCaseFirstChart name }} = (data) => makeActionCreator({{upperCaseFirstChart name }}Types.EDIT_{{> upperCase }}, {data});
export const edit{{upperCaseFirstChart name }}Success = data =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.EDIT_{{> upperCase }}_SUCCESS, { data });
export const edit{{upperCaseFirstChart name }}Failure = (data, error) =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.EDIT_{{> upperCase }}_FAILURE, { data, error });

export const create{{upperCaseFirstChart name }} = (data) => makeActionCreator({{upperCaseFirstChart name }}Types.CREATE_{{> upperCase }}, {data});
export const create{{upperCaseFirstChart name }}Success = data =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.CREATE_{{> upperCase }}_SUCCESS, { data });
export const create{{upperCaseFirstChart name }}Failure = (data, error) =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.CREATE_{{> upperCase }}_FAILURE, { data, error });

export const delete{{upperCaseFirstChart name }} = (data) => makeActionCreator({{upperCaseFirstChart name }}Types.DELETE_{{> upperCase }}, {data});
export const delete{{upperCaseFirstChart name }}Success = data =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.DELETE_{{> upperCase }}_SUCCESS, { data });
export const delete{{upperCaseFirstChart name }}Failure = (data, error) =>
  makeActionCreator({{pluralizeUpperCaseFirstChart name }}Types.DELETE_{{> upperCase }}_FAILURE, { data, error });
