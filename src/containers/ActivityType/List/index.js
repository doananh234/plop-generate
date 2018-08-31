import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../components/RestField/Label';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';

const ListActivityType = props => (
  <RestList {...props} hasModal hasCreate resource="ActivityType">
    <Label source="activityType" title="form.activityType" bold />
    <Label source="note" title="form.note" width={250} />
    <Label source="vi" title="form.vi" />
    <Label source="en" title="form.en" />
    <Label source="activitySubType" title="form.activitySubType" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </RestList>
);

ListActivityType.propTypes = {
  match: PropTypes.object,
};

export default ListActivityType;
