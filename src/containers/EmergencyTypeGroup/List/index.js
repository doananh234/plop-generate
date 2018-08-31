import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../../components/RestField/Label';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';
import Reference from '../../rest/Reference';
import ReferenceInput from '../../rest/ReferenceInput';
import RestFormInput from '../../../components/RestInput/RestFormInput';
import RestSelect from '../../../components/RestInput/RestSelect';

const Filter = props => {
  return (
    <RestRow {...props} elementProps={{ type: 'flex', align: 'mindle', justify: 'start' }}>
      <ColLayout
        elementProps={{
          lg: 8,
          md: 8,
          sm: 8,
          xs: 24,
        }}
      >
        <RestFormInput source="en" placeholder="form.en" />
      </ColLayout>
      <ColLayout
        elementProps={{
          lg: 8,
          md: 8,
          sm: 8,
          xs: 24,
        }}
      >
        <RestFormInput source="vi" placeholder="form.vi" />
      </ColLayout>
      <ColLayout
        elementProps={{
          lg: 8,
          md: 8,
          sm: 8,
          xs: 24,
        }}
      >
        <ReferenceInput
          source="emergencyTypePointer"
          title="emergencyType"
          reference="EmergencyType"
        >
          <RestSelect valueProp="objectId" titleProp="en" placeholder="emergencyType" />
        </ReferenceInput>
      </ColLayout>
    </RestRow>
  );
};
const ListEmergencyTypeGroup = props => {
  return (
    <RestList {...props} hasModal filter={<Filter />} hasCreate resource="EmergencyTypeGroup">
      <Label source="displayName.vi" title="form.vi" />
      <Label source="displayName.en" title="form.en" />
      <Reference source="emergencyTypePointer" title="emergencyType" reference="EmergencyType">
        <Label source="en" />
      </Reference>
      {/* <Label source="creator.objectId" title="form.creator" /> */}
      <Label source="country" title="form.country" />
      <Label source="description.vi" title="form.description.vi" />
      <Label source="description.en" title="form.description.en" />
      <Label source="website" title="form.website" />
      <ActionGroup>
        <EditButton />
        <DeleteButton />
      </ActionGroup>
    </RestList>
  );
};

ListEmergencyTypeGroup.propTypes = {
  match: PropTypes.object,
};

export default ListEmergencyTypeGroup;
