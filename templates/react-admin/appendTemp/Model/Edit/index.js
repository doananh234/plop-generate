import React from 'react';
import RestEdit from '../../rest/Edit';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const Edit{{upperCaseFirstChartWithPluralize name}} = props => (
  <RestEdit {...props} showModal resource="{{pluralize name}}">
    //content here
  </RestEdit>
);

export default Edit{{upperCaseFirstChartWithPluralize name}};
