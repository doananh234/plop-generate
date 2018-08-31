import React from 'react';
import RestShow from '../../rest/Show';
import TextField from '../../../components/RestField/TextField';

const ShowEmergencyTypeGroup = props => {
  return (
    <RestShow {...props} hasEdit resource="EmergencyTypeGroup">
      <TextField source="displayName.vi" title="form.vi" />
      <TextField source="displayName.en" title="form.en" />
      <TextField source="emergencyTypePointer" title="emergencyType" />
      <TextField source="creator" title="form.creator" />
      <TextField source="country" title="form.country" />
      <TextField source="description.vi" title="form.description.vi" />
      <TextField source="description.en" title="form.description.en" />
      <TextField source="website" title="form.website" />
    </RestShow>
  );
};

export default ShowEmergencyTypeGroup;
