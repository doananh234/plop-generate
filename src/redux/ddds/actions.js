import { makeCRUDConstantCreator, makeCRUDActionsCreator } from '../crudCreator/actions';

export const PRIMARY_KEY = 'id';
export const MODEL = 'ddds';
export const IGNORE_ACTIONS = [];
export const DddsTypes = {
  ...makeCRUDConstantCreator(MODEL, IGNORE_ACTIONS),
};
const CRUDDddsActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
/**
 * getAllCaseTypes({pageSize, page })
 * getByIdCaseTypes(data)
 * createCaseTypes(data)
 * deleteCaseTypes()
 * editCaseTypes(data)
 */
export default { ...CRUDDddsActions };
