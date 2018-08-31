import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../../components/RestField/Label';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';
import EmergencyIcon from '../components/EmergencyIcon';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';
import RestFormInput from '../../../components/RestInput/RestFormInput';
import RestSelect from '../../../components/RestInput/RestSelect';
import { TYPE_GROUPS } from '../../../config/constants';
import RestSwitch from '../../../components/RestField/Switch';

const Filter = props => {
  return (
    <RestRow {...props} elementProps={{ type: 'flex', align: 'mindle', justify: 'start' }}>
      <ColLayout
        elementProps={{
          lg: 6,
          md: 6,
          sm: 6,
          xs: 24,
        }}
      >
        <RestFormInput source="en" placeholder="form.en" />
      </ColLayout>
      <ColLayout
        elementProps={{
          lg: 6,
          md: 6,
          sm: 6,
          xs: 24,
        }}
      >
        <RestFormInput source="vi" placeholder="form.vi" />
      </ColLayout>
      <ColLayout
        elementProps={{
          lg: 6,
          md: 6,
          sm: 6,
          xs: 24,
        }}
      >
        <RestSelect resourceData={TYPE_GROUPS} source="typeGroup" placeholder="form.typeGroup" />
      </ColLayout>
      <ColLayout
        elementProps={{
          lg: 6,
          md: 6,
          sm: 6,
          xs: 24,
        }}
      >
        <RestFormInput source="group" placeholder="form.group" />
      </ColLayout>
    </RestRow>
  );
};

const ListActivityType = props => {
  return (
    <RestList {...props} filter={<Filter />} hasCreate key="create" resource="EmergencyType">
      <EmergencyIcon title="form.icon" source="iconName" sorter />
      <Label title="form.name" source="en" sorter />
      <Label title="form.typeGroup" source="typeGroup" sorter />
      <Label title="form.message" source="messageEn" sorter width={250} />
      <RestSwitch title="form.isActive" source="isActive" onChange={props.onChange} type="switch" />
      <RestSwitch source="isPublic" title="form.isPublic" onChange={props.onChange} type="switch" />
      <ActionGroup>
        <EditButton />
        <DeleteButton />
      </ActionGroup>
    </RestList>
  );
};

ListActivityType.propTypes = {
  onChange: PropTypes.func,
};

export default ListActivityType;
