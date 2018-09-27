import React from 'react';
import Label from '../../../components/RestField/Label';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';

const List{{upperCaseFirstChartWithPluralize name}} = props => (
  <RestList {...props} hasCreate resource="{{pluralize name}}">
    //content here
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </RestList>
);

export default List{{upperCaseFirstChartWithPluralize name}};
