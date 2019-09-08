import { makeCRUDConstantCreator, makeCRUDActionsCreator } from '../crudCreator/actions';

export const PRIMARY_KEY = 'id';
export const MODEL = 'dadas';
export const IGNORE_ACTIONS = [];
export const DadasTypes = {
  ...makeCRUDConstantCreator(MODEL, IGNORE_ACTIONS),
};
const CRUDDadasActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
/**
 * getAllCaseTypes({pageSize, page })
 * getByIdCaseTypes(data)
 * createCaseTypes(data)
 * deleteCaseTypes()
 * editCaseTypes(data)
 */
export default { ...CRUDDadasActions };
