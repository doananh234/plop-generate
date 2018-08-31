import React from 'react';
import RestEdit from '../../rest/Edit';
import RestFormInput from '../../../components/RestInput/RestFormInput';
import RestSelect from '../../../components/RestInput/RestSelect';
import { STATUS } from '../../../config/constants';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';

const EditEmergency = props => (
  <RestEdit {...props} showModal resource="Emergency">
    <RestRow {...props}>
      <ColLayout elementProps={{ md: 24, xs: 24 }}>
        <RestFormInput disabled source="reportedTime" title="form.reportedTime" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput disabled source="senderName" title="form.senderName" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput disabled source="senderPhoneNumber" title="form.senderPhoneNumber" />
      </ColLayout>
      <ColLayout elementProps={{ md: 24, xs: 24 }}>
        <RestFormInput disabled source="address" title="form.address" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput disabled source="city" title="form.city" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput disabled source="district" title="form.district" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput disabled source="category" title="form.category" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput disabled source="type" title="form.type" />
      </ColLayout>
      <ColLayout elementProps={{ md: 24, xs: 24 }}>
        <RestSelect
          resourceData={STATUS}
          valueProp="id"
          titleProp="text.vi"
          source="status"
          title="form.status"
        />
      </ColLayout>
    </RestRow>
  </RestEdit>
);

export default EditEmergency;
