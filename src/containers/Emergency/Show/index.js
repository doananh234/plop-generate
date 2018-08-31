import React from 'react';
import RestShow from '../../rest/Show';
import TextField from '../../../components/RestField/TextField';

const ShowEmergency = props => {
  return (
    <RestShow {...props} hasEdit resource="Emergency">
      <TextField source="reportedTime" title="form.reportedTime" />
      <TextField source="senderName" title="form.senderName" />
      <TextField source="senderPhoneNumber" title="form.senderPhoneNumber" />
      <TextField source="district" title="form.district" />
      <TextField source="address" title="form.address" />
      <TextField source="category" title="form.category" />
      <TextField source="address" title="form.address" />
      <TextField source="type" title="form.type" />
      <TextField source="status" title="form.status" />
    </RestShow>
  );
};

export default ShowEmergency;
