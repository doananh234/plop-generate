import React from 'react';
import RestCreate from '../../rest/Create';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const CreateEmergency = props => (
  <RestCreate {...props} resource="Emergency">
    <RestFormInput source="reportedTime" title="form.reportedTime" />
    <RestFormInput source="senderName" title="form.senderName" />
    <RestFormInput source="senderPhoneNumber" title="form.senderPhoneNumber" />
    <RestFormInput source="district" title="form.district" />
    <RestFormInput source="address" title="form.address" />
    <RestFormInput source="category" title="form.category" />
    <RestFormInput source="address" title="form.address" />
    <RestFormInput source="type" title="form.type" />
    <RestFormInput source="status" title="form.status" />
  </RestCreate>
);

export default CreateEmergency;
