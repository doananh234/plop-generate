import { makeActions } from 'redux/crudCreator/actions';

export const MODEL_NAME = '{{pluralize name}}';
export const {{pluralize name}}Actions = makeActions(MODEL_NAME);

export const getAll{{upperCaseFirstChartWithPluralize name}} = {{pluralize name}}Actions.getAll;
export const edit{{upperCaseFirstChartWithPluralize name}} = {{pluralize name}}Actions.edit;
export const create{{upperCaseFirstChartWithPluralize name}} = {{pluralize name}}Actions.create;
export const getById{{upperCaseFirstChartWithPluralize name}} = {{pluralize name}}Actions.getDataById;
