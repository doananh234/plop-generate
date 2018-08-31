import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import AntIconBox from './styles/icon.style';

const EmergencyIconUI = AntIconBox(Icon);
const EmergencyIcon = props => {
  return (
    <div className={props.className} style={{ ...props.style }}>
      <EmergencyIconUI
        className={props.className}
        type={props.type}
        style={{
          color: props.color,
          fontSize: props.size,
        }}
      />
    </div>
  );
};
EmergencyIcon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.any,
};

EmergencyIcon.defaultProps = {
  size: 50,
  color: '#fff',
};

export default EmergencyIcon;
