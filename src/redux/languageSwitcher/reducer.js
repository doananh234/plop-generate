import config, {
  getCurrentLanguage,
} from '../../containers/common/LanguageSwitcher/config';

import actions from './actions';

const initState = {
  isActivated: false,
  language: getCurrentLanguage(config.defaultLanguage || 'english'),
};

export default function(state = initState, action) {
  switch (action.type) {
    case actions.ACTIVATE_LANG_MODAL:
      return { ...state, isActivated: !state.isActivated };
    case actions.CHANGE_LANGUAGE:
      return {
        ...state,
        language: getCurrentLanguage(action.language || 'english'),
      };
    default:
      return state;
  }
}
