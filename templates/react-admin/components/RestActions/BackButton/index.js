import React from 'react';
import PropTypes from 'prop-types';
// import IntlMessages from '../../utility/intlMessages';
import { ButtonWrapper } from './styles';

const BackButton = props => {
  return (
    <ButtonWrapper icon="rollback" onClick={() => props.onBack()}>
      {/* <IntlMessages id="button.back" /> */}
    </ButtonWrapper>
  );
};

BackButton.propTypes = {
  onBack: PropTypes.func,
};

BackButton.defaultProps = {
  source: 'back',
};

export default BackButton;
