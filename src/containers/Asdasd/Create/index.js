import React from 'react';
import RestCreate from '../../rest/Create';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const CreateAsdasd = props => (
  <RestCreate {...props} showModal resource="asdasd">
    <RestFormInput source="undefined" title="undefined" />
  </RestCreate>
);

export default CreateAsdasd;
