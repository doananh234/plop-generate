import React from 'react';
import Label from '../../../components/RestField/Label';
import ImageField from '../../../components/RestField/ImageField';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';
import EmergencyIcon from '../../EmergencyType/components/EmergencyIcon';

const ListSafeInfo = props => (
  <RestList {...props} hasCreate resource="SafeInfo">
    <EmergencyIcon title="form.icon" />
    <ImageField avatar source="image.url" title="form.image" />
    <Label format={formatSteps} source="stepsEn" title="form.stepsEn" />
    <Label format={formatSteps} source="stepsVi" title="form.stepsVi" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </RestList>
);

const formatSteps = data => {
  return data.map((text, index) => {
    return <div key={text}>{`${index + 1}. ${text}`}</div>;
  });
};

export default ListSafeInfo;
