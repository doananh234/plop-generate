import React from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '../../utility/intlMessages';
import { ButtonWrapper } from './styles';

const EditButton = props => {
  return (
    <ButtonWrapper type="primary" icon="plus" onClick={props.gotoCreatePage}>
      <IntlMessages id="button.create" />
    </ButtonWrapper>
  );
};
EditButton.propTypes = {
  gotoCreatePage: PropTypes.func,
};

EditButton.defaultProps = {
  source: 'create',
};

export default EditButton;
