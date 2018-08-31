import React from 'react';
import PropTypes from 'prop-types';
import { LayoutContentWrapper } from './style';

const LayountContent = props => (
  <div style={{ flex: 1 }}>
    <LayoutContentWrapper
      className={
        props.className != null
          ? `${props.className} isoLayoutContentWrapper`
          : 'isoLayoutContentWrapper'
      }
      {...props}
    >
      {props.children}
    </LayoutContentWrapper>
  </div>
);

LayountContent.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
};

export default LayountContent;
