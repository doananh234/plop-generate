import React from 'react';
import RestCreate from '../../rest/Create';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const Create{{upperCaseFirstChart name}} = props => (
  <RestCreate {...props} showModal resource="{{name}}">
    //content here
  </RestCreate>
);

export default Create{{upperCaseFirstChart name}};
