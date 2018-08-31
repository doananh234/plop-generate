import React from 'react';
import RestCreate from '../../rest/Create';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const CreateSafeInfo = props => (
  <RestCreate {...props} showModal resource="SafeInfo">
    <RestFormInput source="iconName" title="iconName" />
    <RestFormInput source="stepsEn" title="form.stepsEn" />
    <RestFormInput source="stepsVi" title="form.stepsVi" />
    <RestFormInput source="image.url" title="form.image" />
  </RestCreate>
);

export default CreateSafeInfo;
