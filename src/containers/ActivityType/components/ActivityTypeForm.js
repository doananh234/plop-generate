import React from 'react';
import RestFormInput from '../../../components/RestInput/RestFormInput';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';

const ActivityTypeForm = props => {
  return (
    <RestRow {...props}>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput source="vi" title="form.vi" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput source="en" title="form.en" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput source="activityType" title="form.activityType" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput source="activitySubType" title="form.activitySubType" />
      </ColLayout>
      <ColLayout elementProps={{ md: 24, xs: 24 }}>
        <RestFormInput source="note" title="form.note" />
      </ColLayout>
    </RestRow>
  );
};

export default ActivityTypeForm;
