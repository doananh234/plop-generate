import React from 'react';
import Create from 'containers/rest/Create';
import Form from '../components/Form';

const {{upperCaseFirstChartWithPluralize name}}Create = props => (
  <Create {...props} resource="{{pluralize name}}">
    <Form />
  </Create>
);

{{upperCaseFirstChartWithPluralize name}}Create.propTypes = {};

export default {{upperCaseFirstChartWithPluralize name}}Create;
