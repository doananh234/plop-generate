import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IntlMessages from '../../../components/utility/intlMessages';
import actions from '../../../redux/languageSwitcher/actions';
import config from './config';

const LanguageSwitcher = ({ language, changeLanguage }) => {
  return (
    <div className="themeSwitchBlock">
      <h4>
        <IntlMessages id="languageSwitcher.label" />
      </h4>
      <div className="themeSwitchBtnWrapper">
        {config.options.map(option => {
          const { languageId, icon } = option;
          const customClass = languageId === language.languageId
              ? 'selectedTheme languageSwitch'
              : 'languageSwitch';

          return (
            <button
              type="button"
              className={customClass}
              key={languageId}
              onClick={() => {
                changeLanguage(languageId);
              }}
            >
              <img src={process.env.PUBLIC_URL + icon} alt="flag" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  language: PropTypes.object,
  changeLanguage: PropTypes.func,
};

const { changeLanguage } = actions;

export default connect(
  state => ({
    ...state.LanguageSwitcher.toJS(),
  }),
  { changeLanguage },
)(LanguageSwitcher);
