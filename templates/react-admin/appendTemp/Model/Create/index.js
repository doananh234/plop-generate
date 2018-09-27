import React from 'react';
import RestCreate from '../../rest/Create';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const Create{{upperCaseFirstChartWithPluralize name}} = props => (
  <RestCreate {...props} showModal resource="{{pluralize name}}">
    //content here
  </RestCreate>
);

export default Create{{upperCaseFirstChartWithPluralize name}};
