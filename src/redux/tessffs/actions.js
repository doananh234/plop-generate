import { makeCRUDConstantCreator, makeCRUDActionsCreator } from '../crudCreator/actions';

export const PRIMARY_KEY = 'id';
export const MODEL = 'tessffs';
export const IGNORE_ACTIONS = [];
export const TessffsTypes = {
  ...makeCRUDConstantCreator(MODEL, IGNORE_ACTIONS),
};
const CRUDTessffsActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
/**
 * getAllCaseTypes({pageSize, page })
 * getByIdCaseTypes(data)
 * createCaseTypes(data)
 * deleteCaseTypes()
 * editCaseTypes(data)
 */
export default { ...CRUDTessffsActions };
