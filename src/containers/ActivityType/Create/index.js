import React from 'react';
import RestCreate from '../../rest/Create';
import ActivityTypeForm from '../components/ActivityTypeForm';

const CreateActivityType = props => (
  <RestCreate {...props} showModal resource="ActivityType">
    <ActivityTypeForm {...props} />
  </RestCreate>
);

export default CreateActivityType;
