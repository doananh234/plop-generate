import React from 'react';
import PropTypes from 'prop-types';
import { ComponentTitleWrapper } from './styles/pageHeader.style';

const PageHeader = props => (
  <ComponentTitleWrapper className="isoComponentTitle">{props.children}</ComponentTitleWrapper>
);

PageHeader.propTypes = {
  children: PropTypes.node,
};

export default PageHeader;
