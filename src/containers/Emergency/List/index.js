import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../../components/RestField/Label';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';
import RestSelect from '../../../components/RestInput/RestSelect';
import ReferenceInput from '../../rest/ReferenceInput';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';
import { TYPE_GROUPS, STATUS } from '../../../config/constants';
import StatusLabel from '../components/StatusLabel';
import { formatDateTime } from '../../../utils/textUtils';
import IumpedColumn from '../../../components/RestField/IumpedColumn';

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
        <RestSelect resourceData={TYPE_GROUPS} source="category" placeholder="form.typeGroup" />
      </ColLayout>
      <ColLayout
        elementProps={{
          lg: 6,
          md: 6,
          sm: 6,
          xs: 24,
        }}
      >
        <ReferenceInput source="city" reference="GeoAddressLevel1">
          <RestSelect valueProp="name" titleProp="name" placeholder="form.city" />
        </ReferenceInput>
      </ColLayout>
      <ColLayout
        elementProps={{
          lg: 6,
          md: 6,
          sm: 6,
          xs: 24,
        }}
      >
        <ReferenceInput source="district" reference="GeoAddressLevel2">
          <RestSelect valueProp="name" titleProp="name" placeholder="form.district" />
        </ReferenceInput>
      </ColLayout>
      <ColLayout
        elementProps={{
          lg: 6,
          md: 6,
          sm: 6,
          xs: 24,
        }}
      >
        <RestSelect
          resourceData={STATUS}
          valueProp="id"
          titleProp="text.vi"
          source="status"
          placeholder="form.status"
        />
      </ColLayout>
    </RestRow>
  );
};
const ListEmergency = props => (
  <RestList {...props} hasModal filter={<Filter />} resource="Emergency">
    <Label
      source="reportedTime"
      title="form.reportedTime"
      render={value => formatDateTime(value)}
    />
    <Label
      source="senderName"
      title="form.senderName"
      width={200}
      render={(value, record) => {
        return (
          <IumpedColumn
            data={[
              { title: 'form.name', value: record.senderName },
              { title: 'form.phoneNo', value: record.senderPhoneNumber },
            ]}
          />
        );
      }}
    />

    <Label source="city" title="form.city" />
    <Label source="district" title="form.district" />
    <Label source="address" title="form.address" width={200} />
    <Label source="category" title="form.category" />
    <Label source="type" title="form.type" align="center" />
    <StatusLabel title="form.status" align="center" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </RestList>
);

ListEmergency.propTypes = {
  match: PropTypes.object,
};

export default ListEmergency;
