import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import { DivWrapper, ValueWrapper, IconWrapper } from './styles';

const TextField = props => {
  const { title, value, icon } = props;
  return (
    <DivWrapper>
      <Title>
        {icon && <IconWrapper type={icon} />}
        {title}
      </Title>
      <ValueWrapper>{value}</ValueWrapper>
    </DivWrapper>
  );
};

TextField.propTypes = {
  title: PropTypes.node,
  value: PropTypes.string,
  icon: PropTypes.node,
};

export default TextField;
