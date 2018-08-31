import React from 'react';
import RestEdit from '../../rest/Edit';
import EmergencyTypeGroupForm from '../components/EmergencyTypeGroup';

const EditEmergencyTypeGroup = props => (
  <RestEdit {...props} showModal resource="EmergencyTypeGroup" formatOnSubmit={formatData}>
    <EmergencyTypeGroupForm />
  </RestEdit>
);

const formatData = data => {
  return {
    ...data,
    creator: {
      className: '_User',
      __type: 'Pointer',
      ...data.creator,
    },
  };
};

export default EditEmergencyTypeGroup;
