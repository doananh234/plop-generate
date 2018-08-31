import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper as _IconWrapper } from './styles';
import Title from '../../common/Title';
import IntlMessages from '../../utility/intlMessages';

const FormTitle = props => {
  const { title, icon } = props;
  return title ? (
    <Title>
      {icon && <IconWrapper type={icon} />}
      <IntlMessages id={title} />
    </Title>
  ) : null;
};

FormTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};
export const IconWrapper = _IconWrapper;

export default FormTitle;
