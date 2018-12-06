import React from 'react';
import RestShow from '../../rest/Show';
import TextField from '../../../components/RestField/TextField';

const Show{{upperCaseFirstChartWithPluralize name}} = props => {
  return (
    <RestShow {...props} hasEdit resource="{{pluralize name}}">
      //content here
    </RestShow>
  );
};

export default Show{{upperCaseFirstChartWithPluralize name}};
