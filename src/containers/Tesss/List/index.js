import React from 'react';
import Label from '../../../components/RestField/Label';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';

const ListTesss = props => (
  <RestList {...props} hasCreate resource="tesss">
    <Label source="ss" title="ss" />
    <Label source="vvcv" title="vvcv" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </RestList>
);

export default ListTesss;
