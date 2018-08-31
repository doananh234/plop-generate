import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RestEdit from '../../rest/Edit';
import RestFormInput from '../../../components/RestInput/RestFormInput';
import RestAvatarInput from '../../../components/RestInput/RestAvatarInput';
import RestSelect from '../../../components/RestInput/RestSelect';
import { ContentWrapper } from './styles';
import { getIconCategories } from '../../../redux/config/actions';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';
import IconSelection from '../../EmergencyType/components/IconSelection';
import ColorSelection from '../../EmergencyType/components/ColorSelection';
import EmergencyImage from '../../EmergencyType/components/EmergencyImage';

class EditSafeInfo extends React.PureComponent {
  static propTypes = {
    iconCategories: PropTypes.array,
    getIconCategories: PropTypes.func,
  };

  componentDidMount() {
    this.props.getIconCategories();
  }

  render() {
    const { iconCategories } = this.props;
    return (
      <ContentWrapper>
        <RestEdit {...this.props} showModal resource="SafeInfo">
          <RestRow>
            <ColLayout elementProps={{ md: 24, xs: 24 }}>
              <RestRow>
                <ColLayout elementProps={{ md: 12, xs: 24 }}>
                  <RestSelect resourceData={iconCategories} source="iconName" title="form.icon">
                    <IconSelection />
                  </RestSelect>
                  <ColorSelection source="iconBackgroundColor" title="form.iconBackgroundColor" />
                </ColLayout>
                <ColLayout elementProps={{ md: 12, xs: 24 }}>
                  <EmergencyImage />
                </ColLayout>
                <ColLayout elementProps={{ md: 24, xs: 24 }}>
                  <RestFormInput
                    rules={{
                      transform: transformSteps,
                    }}
                    normalize={normalizeSteps}
                    textArea
                    source="stepsEn"
                    title="form.stepsEn"
                  />
                  <RestFormInput
                    rules={{
                      transform: transformSteps,
                    }}
                    normalize={normalizeSteps}
                    textArea
                    source="stepsVi"
                    title="form.stepsVi"
                  />
                  <RestAvatarInput className="image" source="image.url" title="form.image" />
                </ColLayout>
              </RestRow>
            </ColLayout>
          </RestRow>
        </RestEdit>
      </ContentWrapper>
    );
  }
}

const normalizeSteps = value => {
  return Array.isArray(value) ? value : value.split('\n');
};

const transformSteps = value => {
  return Array.isArray(value) ? value.join('') : value;
};

function mapStateToProps(state) {
  return {
    iconCategories: state.config.iconCategories,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getIconCategories: () => dispatch(getIconCategories()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true },
)(EditSafeInfo);
