import { makeCRUDSaga } from '../crudCreator/saga';
import { RESOURCE, actions } from './slice';

export default [...makeCRUDSaga(RESOURCE, [], actions)];
