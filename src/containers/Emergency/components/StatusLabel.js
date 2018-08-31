import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import { STATUS } from '../../../config/constants';

const StatusLabel = props => {
  const currentStatus = STATUS.find(data => data.id === props.record.status);
  return (
    <div>
      <Tag color={currentStatus.color}>{currentStatus.text.vi}</Tag>
    </div>
  );
};
StatusLabel.propTypes = {
  record: PropTypes.object,
};

export default StatusLabel;
