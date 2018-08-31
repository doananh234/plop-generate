import React from 'react';
import RestShow from '../../rest/Show';
import TextField from '../../../components/RestField/TextField';

const ShowAdasd = props => {
  return (
    <RestShow {...props} showModal hasEdit resource="adasd">
      //content here
    </RestShow>
  );
};

export default ShowAdasd;
