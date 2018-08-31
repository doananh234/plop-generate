import React from 'react';
import RestShow from '../../rest/Show';
import TextField from '../../../components/RestField/TextField';

const Show{{upperCaseFirstChart name}} = props => {
  return (
    <RestShow {...props} showModal hasEdit resource="{{name}}">
      //content here
    </RestShow>
  );
};

export default Show{{upperCaseFirstChart name}};
