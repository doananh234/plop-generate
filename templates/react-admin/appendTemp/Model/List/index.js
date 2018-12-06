import React from 'react';
import Label from '../../../components/RestField/Label';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';
import Filter from '../components/Filter';

const List{{upperCaseFirstChartWithPluralize name}} = props => (
  <RestList hasCreate filter={<Filter />} resource="{{pluralize name}}" {...props}>
    //content here
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </RestList>
);

export default List{{upperCaseFirstChartWithPluralize name}};
