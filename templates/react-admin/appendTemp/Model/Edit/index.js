import React from 'react';
import RestEdit from '../../rest/Edit';
import {{upperCaseFirstChartWithPluralize name}}Form from '../components/Form';

const Edit{{upperCaseFirstChartWithPluralize name}} = props => (
  <RestEdit {...props} resource="{{pluralize name}}">
    <{{upperCaseFirstChartWithPluralize name}}Form />
  </RestEdit>
);

export default Edit{{upperCaseFirstChartWithPluralize name}};
