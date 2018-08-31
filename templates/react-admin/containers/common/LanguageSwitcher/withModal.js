import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import Button from '../../../components/uielements/button';
import actions from '../../../redux/languageSwitcher/actions';
import config from './config';

const LanguageSwitcher = ({
  isActivated,
  language,
  switchActivation,
  changeLanguage,
}) => {
  return (
    <div className="isoButtonWrapper">
      <Button type="primary" className="" onClick={switchActivation}>
        Switch Language
      </Button>

      <Modal
        title="Select Language"
        visible={isActivated}
        onCancel={switchActivation}
        cancelText="Cancel"
        footer={[]}
      >
        <div>
          {config.options.map(option => {
            const { languageId, text } = option;
            const type = languageId === language.languageId ? 'primary' : 'success';
            return (
              <Button
                type={type}
                key={languageId}
                onClick={() => {
                  changeLanguage(languageId);
                }}
              >
                {text}
              </Button>
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  isActivated: PropTypes.bool,
  language: PropTypes.object,
  switchActivation: PropTypes.func,
  changeLanguage: PropTypes.func,
};

const { switchActivation, changeLanguage } = actions;

export default connect(
  state => ({
    ...state.LanguageSwitcher.toJS(),
  }),
  { switchActivation, changeLanguage },
)(LanguageSwitcher);
