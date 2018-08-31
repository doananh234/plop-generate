import { SCHOOL_ACTION_TYPES } from './school/actions'
import { LOADING_ACTION_TYPE } from './loading/actions'
import { LOGIN_ACTION_TYPES } from './login/actions'
import { CLASS_ACTION_TYPES } from './class/actions'
import { REST_ACTION_TYPES } from './rest/actions'
import { NOTIFICATION_ACTION_TYPES } from './notification/actions'
import { REST_FILTER_ACTION_TYPES } from './restFilter/actions'

export default {
  ...SCHOOL_ACTION_TYPES,
  ...LOADING_ACTION_TYPE,
  ...LOGIN_ACTION_TYPES,
  ...CLASS_ACTION_TYPES,
  ...REST_ACTION_TYPES,
  ...NOTIFICATION_ACTION_TYPES,
  ...REST_FILTER_ACTION_TYPES,
}
