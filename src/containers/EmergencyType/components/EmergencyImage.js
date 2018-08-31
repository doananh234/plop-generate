import React from 'react';
import PropTypes from 'prop-types';
import EmergencyIcon from '../../../components/uielements/emergencyIcon';
import { IconImageWrapper } from './styles/EmergencyImage.styles';

const IconImage = props => {
  const iconBackgroundColor = props.form.getFieldValue('iconBackgroundColor');
  const iconName = props.form.getFieldValue('iconName');
  if (!iconName) return null;
  return (
    <IconImageWrapper>
      <div style={{ background: iconBackgroundColor }} className="iconBorder">
        <EmergencyIcon type={iconName} color="#fff" size={80} />
      </div>
    </IconImageWrapper>
  );
};

IconImage.propTypes = {
  form: PropTypes.object,
};
export default IconImage;
