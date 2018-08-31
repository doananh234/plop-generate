import React from 'react';
import PropTypes from 'prop-types';
import { Tag, Spin } from 'antd';

const RestTag = props => {
  return props.record ? (
    <Tag>
      {props.record[props.source]}
    </Tag>
) : <Spin />;
};

RestTag.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};
export default RestTag;
