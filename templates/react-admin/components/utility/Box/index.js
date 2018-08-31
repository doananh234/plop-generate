import React from 'react';
import PropTypes from 'prop-types';
import BoxTitleWrapper from '../BoxTitle';
import { BoxWrapper } from './style';

const Box = ({ title, subtitle, children }) => (
  <BoxWrapper className="isoBoxWrapper">
    <BoxTitleWrapper title={title} subtitle={subtitle} />
    {children}
  </BoxWrapper>
);
Box.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.any,
};

export default Box;
