import React from 'react';
import PropTypes from 'prop-types';
// import IntlMessages from '../../utility/intlMessages';
import { ButtonWrapper } from './styles';

const ShowButton = props => {
  return (
    <ButtonWrapper icon="profile" onClick={() => props.gotoShowPage(props.record.id)}>
      {/* <IntlMessages id="button.show" /> */}
    </ButtonWrapper>
  );
};

ShowButton.propTypes = {
  gotoShowPage: PropTypes.func,
  record: PropTypes.object,
};

ShowButton.defaultProps = {
  source: 'show',
};

export default ShowButton;
