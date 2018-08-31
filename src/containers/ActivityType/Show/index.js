import React from 'react';
import RestShow from '../../rest/Show';
import TextField from '../../../components/RestField/TextField';

const ShowActivityType = props => {
  return (
    <RestShow {...props} hasEdit resource="ActivityType">
      <TextField source="activityType" title="form.activityType" />
      <TextField source="note" title="form.note" />
      <TextField source="vi" title="form.vi" />
      <TextField source="en" title="form.en" />
      <TextField source="activitySubType" title="form.activitySubType" />
    </RestShow>
  );
};

export default ShowActivityType;
