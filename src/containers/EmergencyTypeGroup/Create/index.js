import React from 'react';
import RestCreate from '../../rest/Create';
import EmergencyTypeGroupForm from '../components/EmergencyTypeGroup';

const CreateEmergencyTypeGroup = props => (
  <RestCreate {...props} showModal resource="EmergencyTypeGroup" formatOnSubmit={formatData}>
    <EmergencyTypeGroupForm />
  </RestCreate>
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

export default CreateEmergencyTypeGroup;
