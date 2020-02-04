import { makeCRUDSlice } from '../crudCreator/slice';

export const RESOURCE = '{{pluralize name}}';
const {{pluralize name}}Slice = makeCRUDSlice(RESOURCE);

export const { actions, reducer } = {{pluralize name}}Slice;

export default reducer;
