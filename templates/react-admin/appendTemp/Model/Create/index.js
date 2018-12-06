import React from 'react';
import RestCreate from '../../rest/Create';
import {{upperCaseFirstChartWithPluralize name}}Form from '../components/Form';

const Create{{upperCaseFirstChartWithPluralize name}} = props => (
  <RestCreate {...props} resource="{{pluralize name}}">
     <{{upperCaseFirstChartWithPluralize name}}Form />
  </RestCreate>
);

export default Create{{upperCaseFirstChartWithPluralize name}};
