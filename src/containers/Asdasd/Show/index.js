import React from 'react';
import RestShow from '../../rest/Show';
import TextField from '../../../components/RestField/TextField';

const ShowAsdasd = props => {
  return (
    <RestShow {...props} showModal hasEdit resource="asdasd">
      <TextField source="undefined" title="undefined" />
    </RestShow>
  );
};

export default ShowAsdasd;
