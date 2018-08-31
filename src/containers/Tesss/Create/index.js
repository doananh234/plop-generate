import React from 'react';
import RestCreate from '../../rest/Create';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const CreateTesss = props => (
  <RestCreate {...props} showModal resource="tesss">
    <RestFormInput source="ss" title="ss" />
    <RestFormInput source="vvcv" title="vvcv" />
  </RestCreate>
);

export default CreateTesss;
