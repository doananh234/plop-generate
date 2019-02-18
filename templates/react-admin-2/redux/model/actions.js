import { makeCRUDConstantCreator, makeCRUDActionsCreator } from '../crudCreator/actions';

export const PRIMARY_KEY = 'id';
export const MODEL = '{{pluralize name}}';
export const IGNORE_ACTIONS = [];
export const {{upperCaseFirstChartWithPluralize name}}Types = {
  ...makeCRUDConstantCreator(MODEL, IGNORE_ACTIONS)
};
const CRUD{{upperCaseFirstChartWithPluralize name}}Actions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
/**
 * getAllCaseTypes({pageSize, page })
 * getByIdCaseTypes(data)
 * createCaseTypes(data)
 * deleteCaseTypes()
 * editCaseTypes(data)
 */
export default { ...CRUD{{upperCaseFirstChartWithPluralize name}}Actions };
