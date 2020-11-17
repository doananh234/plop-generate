import { makeCRUDSlice } from 'redux/crudCreator';
import { MODEL_NAME, {{pluralize name}}Actions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, {{pluralize name}}Actions);

export default slice.reducer;
