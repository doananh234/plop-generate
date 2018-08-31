import React from 'react';
import RestShow from '../../rest/Show';
import TextField from '../../../components/RestField/TextField';

const ShowSafeInfo = props => {
  return (
    <RestShow {...props} hasEdit resource="SafeInfo">
      <TextField source="iconName" title="iconName" />
      <TextField source="stepsEn" title="form.stepsEn" />
      <TextField source="stepsVi" title="form.stepsVi" />
      <TextField source="image.url" title="form.image" />
    </RestShow>
  );
};

export default ShowSafeInfo;
