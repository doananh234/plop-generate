import React from 'react';
import PropTypes from 'prop-types';
import { ComponentTitleWrapper } from './style';

const ComponentTitle = props => (
  <ComponentTitleWrapper className="isoComponentTitle">
    {props.children}
  </ComponentTitleWrapper>
);

ComponentTitle.propTypes = {
  children: PropTypes.any,
};

export default ComponentTitle;
