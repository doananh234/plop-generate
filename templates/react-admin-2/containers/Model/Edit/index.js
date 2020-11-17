import React from 'react';
import Edit from 'containers/rest/Edit';
import Form from '../components/Form';

const {{upperCaseFirstChartWithPluralize name}}Edit = props => (
  <Edit {...props} resource="{{pluralize name}}">
    <Form />
  </Edit>
);

{{upperCaseFirstChartWithPluralize name}}Edit.propTypes = {};

export default {{upperCaseFirstChartWithPluralize name}}Edit;
