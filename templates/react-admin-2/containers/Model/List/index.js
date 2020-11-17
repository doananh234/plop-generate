import React from 'react';
import List from 'containers/rest/List';
import RestFieldItem from 'components/RestField/RestFieldItem';
import ActionGroup from 'components/RestActions/ActionGroup';
import EditButton from 'components/RestActions/EditButton';
import DeleteButton from 'components/RestActions/DeleteButton';

const {{upperCaseFirstChartWithPluralize name}}List = props => (
  <List {...props} resource="{{pluralize name}}">
    //content here
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

{{upperCaseFirstChartWithPluralize name}}List.propTypes = {};

export default {{upperCaseFirstChartWithPluralize name}}List;
