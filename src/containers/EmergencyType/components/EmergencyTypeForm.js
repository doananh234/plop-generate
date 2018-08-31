import React from 'react';
import PropTypes from 'prop-types';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';
import RestFormInput from '../../../components/RestInput/RestFormInput';
import RestSwitch from '../../../components/RestInput/RestSwitch';
import RestSelect from '../../../components/RestInput/RestSelect';
import RestFormInputNumber from '../../../components/RestInput/RestFormInputNumber';
import IconSelection from '../components/IconSelection';
import ColorSelection from '../components/ColorSelection';
import EmergencyImage from '../components/EmergencyImage';

const EmergencyTypeForm = props => {
  const { iconCategories } = props;
  return (
    <RestRow {...props} gutter={48}>
      <ColLayout elementProps={{ md: 10, xs: 24 }}>
        <RestRow gutter={48}>
          <ColLayout elementProps={{ md: 12, xs: 24 }}>
            <EmergencyImage />
          </ColLayout>
          <ColLayout elementProps={{ md: 12, xs: 24 }}>
            <RestRow>
              <ColLayout elementProps={{ md: 24 }}>
                <RestSelect resourceData={iconCategories} source="iconName" title="form.icon">
                  <IconSelection />
                </RestSelect>
              </ColLayout>
              <ColLayout elementProps={{ md: 24 }}>
                <ColorSelection source="iconBackgroundColor" title="form.iconBackgroundColor" />
              </ColLayout>
              <ColLayout elementProps={{ md: 24 }}>
                <RestFormInputNumber source="iconSize" title="form.iconSize" />
              </ColLayout>
              <ColLayout elementProps={{ md: 12, xs: 24 }}>
                <RestSwitch source="isPublic" title="form.isPublic" />
              </ColLayout>
              <ColLayout elementProps={{ md: 12, xs: 24 }}>
                <RestSwitch source="isActive" title="form.isActive" />
              </ColLayout>
            </RestRow>
          </ColLayout>
        </RestRow>
      </ColLayout>
      <ColLayout elementProps={{ md: 14, xs: 24 }}>
        <ColLayout elementProps={{ md: 24, xs: 24 }}>
          <RestRow>
            <ColLayout elementProps={{ md: 12, xs: 24 }}>
              <RestFormInput source="en" title="form.en" />
            </ColLayout>
            <ColLayout elementProps={{ md: 12, xs: 24 }}>
              <RestFormInput source="vi" title="form.vi" />
            </ColLayout>
            <ColLayout elementProps={{ md: 12, xs: 24 }}>
              <RestFormInput source="shortnameEn" title="form.shortnameEn" />
            </ColLayout>
            <ColLayout elementProps={{ md: 12, xs: 24 }}>
              <RestFormInput source="shortnameVi" title="form.shortnameVi" />
            </ColLayout>
            <ColLayout elementProps={{ md: 12, xs: 24 }}>
              <RestFormInput source="messageEn" title="form.messageEn" />
            </ColLayout>
            <ColLayout elementProps={{ md: 12, xs: 24 }}>
              <RestFormInput source="messageVi" title="form.messageVi" />
            </ColLayout>
            <ColLayout elementProps={{ md: 12, xs: 24 }}>
              <RestFormInput source="group" title="form.group" />
            </ColLayout>
            <ColLayout elementProps={{ md: 6, xs: 24 }}>
              <RestFormInput source="typeGroup" title="form.typeGroup" />
            </ColLayout>
            <ColLayout elementProps={{ md: 6, xs: 24 }}>
              <RestFormInputNumber source="expireTimeByHour" title="form.expireTimeByHour" />
            </ColLayout>
          </RestRow>
        </ColLayout>
      </ColLayout>
    </RestRow>
  );
};

EmergencyTypeForm.propTypes = {
  iconCategories: PropTypes.array,
};

export default EmergencyTypeForm;
