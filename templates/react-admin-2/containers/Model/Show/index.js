import React from 'react';
import RestShow from 'containers/rest/Show';
import RestFieldItem from 'components/RestField/RestFieldItem';

const {{upperCaseFirstChartWithPluralize name}}Show = props => (
  <RestShow {...props} hasEdit resource="{{pluralize name}}">
    //content here
  </RestShow>
);

export default {{upperCaseFirstChartWithPluralize name}}Show;
