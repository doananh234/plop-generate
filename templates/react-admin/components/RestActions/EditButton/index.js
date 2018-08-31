import React from 'react';
import PropTypes from 'prop-types';
// import IntlMessages from '../../utility/intlMessages';
import { ButtonWrapper } from './styles';

const EditButton = props => {
  return (
    <ButtonWrapper
      icon="edit"
      onClick={() => props.gotoEditPage(props.record ? props.record.id : '')}
    >
      {/* <IntlMessages id="button.edit" /> */}
    </ButtonWrapper>
  );
};

EditButton.propTypes = {
  gotoEditPage: PropTypes.func,
  record: PropTypes.object,
};

EditButton.defaultProps = {
  source: 'edit',
};

export default EditButton;
