import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';
import { OptionWrapper } from './styles/IconSelection.styles';

const IconSelection = props => {
  return props.record ? (
    <OptionWrapper>
      <Icon type={props.record} />
      {` ${props.record}`}
    </OptionWrapper>
  ) : (
    <Spin />
  );
};

IconSelection.propTypes = {
  record: PropTypes.string,
};

export default IconSelection;
