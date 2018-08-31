import React from 'react';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';
import ReferenceInput from '../../rest/ReferenceInput';
import RestFormInput from '../../../components/RestInput/RestFormInput';
import RestSelect from '../../../components/RestInput/RestSelect';

const EmergencyTypeGroupForm = props => {
  return (
    <RestRow {...props}>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput source="displayName.vi" title="form.vi" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput source="displayName.en" title="form.en" />
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <ReferenceInput source="emergencyTypePointer" reference="EmergencyType">
          <RestSelect valueProp="objectId" titleProp="en" title="emergencyType" />
        </ReferenceInput>
      </ColLayout>
      <ColLayout elementProps={{ md: 12, xs: 24 }}>
        <RestFormInput source="country" title="form.country" />
      </ColLayout>
      <ColLayout elementProps={{ md: 24, xs: 24 }}>
        <RestFormInput source="description.vi" title="form.description.vi" />
      </ColLayout>
      <ColLayout elementProps={{ md: 24, xs: 24 }}>
        <RestFormInput source="description.en" title="form.description.en" />
      </ColLayout>
      <ColLayout elementProps={{ md: 24, xs: 24 }}>
        <ReferenceInput source="creator.objectId" reference="_User">
          <RestSelect valueProp="objectId" titleProp="fullName" title="form.creator" />
        </ReferenceInput>
      </ColLayout>
    </RestRow>
  );
};

export default EmergencyTypeGroupForm;
