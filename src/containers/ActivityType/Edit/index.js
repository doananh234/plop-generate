import React from 'react';
import RestEdit from '../../rest/Edit';
import ActivityTypeForm from '../components/ActivityTypeForm';

const EditActivityType = props => (
  <RestEdit {...props} showModal resource="ActivityType">
    <ActivityTypeForm {...props} />
  </RestEdit>
);

export default EditActivityType;
