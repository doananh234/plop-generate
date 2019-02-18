import { createSelector } from 'reselect';
const get{{pluralizeUpperCaseFirstChart name}}Data = (state, resources) => state.{{pluralize name}}.data;
const get{{pluralizeUpperCaseFirstChart name}}Ids = (state, resources) => state.{{pluralize name}}.ids;
const get{{pluralizeUpperCaseFirstChart name}}Total = (state, resources) => state.{{pluralize name}}.count;
const get{{pluralizeUpperCaseFirstChart name}}CurrentId = (state, resources) => state.{{pluralize name}}.currentId;
const get{{pluralizeUpperCaseFirstChart name}}Loading = (state, resources) => state.{{pluralize name}}.loading;
const get{{pluralizeUpperCaseFirstChart name}}Pages = (state, resources) => state.{{pluralize name}}.pages;
const get{{pluralizeUpperCaseFirstChart name}}Page = (state, resources) => state.{{pluralize name}}.page;
const get{{pluralizeUpperCaseFirstChart name}}ItemLoading = (state, resources) => state.{{pluralize name}}.itemLoading;

export const getDataArr = createSelector(
  [get{{pluralizeUpperCaseFirstChart name}}Data, get{{pluralizeUpperCaseFirstChart name}}Ids],
  (data, ids) => {
    return ids.map(id => data[id]);
  }
);

export const getTotal = createSelector(
  [get{{pluralizeUpperCaseFirstChart name}}Total],
  total => total,
);

export const getCurrentData = createSelector(
  [get{{pluralizeUpperCaseFirstChart name}}Data, get{{pluralizeUpperCaseFirstChart name}}CurrentId],
  (data, currentId) => {
    return data[currentId] || {};
  }
);

export const enabledLoadMore = createSelector(
  [get{{pluralizeUpperCaseFirstChart name}}Loading, get{{pluralizeUpperCaseFirstChart name}}Pages, get{{pluralizeUpperCaseFirstChart name}}Page],
  (loading, pages, page) => {
    return !loading && page < pages;
  }
);

export const getLoading = createSelector(
  [get{{pluralizeUpperCaseFirstChart name}}Loading],
  loading => loading,
);

export const getLoading = createSelector(
  [get{{pluralizeUpperCaseFirstChart name}}ItemLoading],
  itemLoading => itemLoading,
);