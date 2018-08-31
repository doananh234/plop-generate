import React from 'react';
import RestShow from '../../rest/Show';
import TextField from '../../../components/RestField/TextField';

const ShowTesss = props => {
  return (
    <RestShow {...props} showModal hasEdit resource="tesss">
      <TextField source="ss" title="ss" />
      <TextField source="vvcv" title="vvcv" />
    </RestShow>
  );
};

export default ShowTesss;
