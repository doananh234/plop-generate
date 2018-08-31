import React from 'react';
import RestShow from '../../rest/Show';
import RestRow from '../../../components/RestLayout/RowLayout';
import TextField from '../../../components/RestField/TextField';
import BooleanField from '../../../components/RestField/BooleanField';

const ShowActivityType = props => {
  return (
    <RestShow {...props} hasEdit resource="EmergencyType">
      <RestRow>
        <TextField source="en" title="form.en" />
        <TextField source="vi" title="form.vi" />
        <TextField source="shortnameEn" title="form.shortnameEn" />
        <TextField source="shortnameVi" title="form.shortnameVi" />
        <TextField source="messageEn" title="form.messageEn" />
        <TextField source="messageVi" title="form.messageVi" />
        <TextField source="typeGroup" title="form.typeGroup" />
        <TextField source="group" title="form.group" />
        <BooleanField source="isActive" title="form.isActive" />
        <BooleanField source="isPublic" title="form.isPublic" />
        <TextField source="iconSize" title="form.iconSize" />
        <TextField source="expireTimeByHour" title="form.expireTimeByHour" />
      </RestRow>
    </RestShow>
  );
};

export default ShowActivityType;
