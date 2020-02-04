import { makeCRUDSlice } from '../crudCreator/slice';

export const RESOURCE = 'anhs';
const anhsSlice = makeCRUDSlice(RESOURCE);

export const { actions, reducer } = anhsSlice;

export default reducer;
