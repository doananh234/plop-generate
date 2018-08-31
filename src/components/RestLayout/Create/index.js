import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getResourceTitle } from '../../../helpers/Tools';
import CustomBreadcrumb from '../../common/Breadcrumb';
import BackButton from '../../RestActions/BackButton';
import RestCreateForm from '../RestCreateForm';
import LayountContent from '../../utility/LayoutWrapper';
import Box from '../../utility/Box';
import PageHeader from '../../uielements/pageHeader';
import ActionView from '../ActionLayout';

class RestCreateComponent extends Component {
  constructor(props) {
    super(props);
    this.formCreateRef = React.createRef();
  }

  componentWillMount() {}

  render() {
    const { resource, match, onBack, showModal } = this.props;
    const BREADCRUMB_LIST = [
      {
        title: getResourceTitle(resource),
        path: `/auth/${resource}`,
      },
      {
        title: 'Create',
        path: match.url,
      },
    ];
    const actions = <BackButton onBack={onBack} />;

    return showModal ? (
      <RestCreateForm {...this.props} />
    ) : (
      <LayountContent
        bordered={false}
        title={<CustomBreadcrumb data={BREADCRUMB_LIST} />}
        extra={actions}
      >
        <PageHeader>{getResourceTitle(resource)}</PageHeader>
        <Box>
          {!showModal && <ActionView>{actions}</ActionView>}
          <RestCreateForm {...this.props} />
        </Box>
      </LayountContent>
    );
  }
}
RestCreateComponent.propTypes = {
  resource: PropTypes.string,
  match: PropTypes.object,
  onBack: PropTypes.func,
  showModal: PropTypes.bool,
};
RestCreateComponent.defaultProps = {
  noCardWrapper: false,
};
export default RestCreateComponent;
