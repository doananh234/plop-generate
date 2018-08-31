import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Title from '../../../components/common/Title';
import EmergencyIconUI from '../../../components/uielements/emergencyIcon';

const EmergencyIcon = props => {
  return props.record ? (
    <div>
      {!props.table && <Title>{props.title}</Title>}
      <EmergencyIconUI type={props.record.iconName} color={props.record.iconBackgroundColor} />
    </div>
  ) : (
    <Spin />
  );
};

EmergencyIcon.propTypes = {
  table: PropTypes.bool,
  title: PropTypes.string,
  record: PropTypes.object,
};
export default EmergencyIcon;
