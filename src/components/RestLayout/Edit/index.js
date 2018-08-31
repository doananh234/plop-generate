import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getResourceTitle } from '../../../helpers/Tools';
import CustomBreadcrumb from '../../common/Breadcrumb';
import RestEditForm from '../RestEditForm';
import LayountContent from '../../utility/LayoutWrapper';
import Box from '../../utility/Box';
import PageHeader from '../../uielements/pageHeader';

class RestEditComponent extends Component {
  state = {};

  componentWillMount() {}

  render() {
    const { resource, showModal, match } = this.props;

    const BREADCRUMB_LIST = [
      {
        title: getResourceTitle(resource),
        path: `/auth/${resource}`,
      },
      {
        title: 'Edit',
        path: match.url,
      },
    ];
    const actions = <div />;

    return !showModal ? (
      <LayountContent
        bordered={false}
        title={<CustomBreadcrumb data={BREADCRUMB_LIST} />}
        extra={actions}
      >
        <PageHeader>{getResourceTitle(resource)}</PageHeader>
        <Box>
          <RestEditForm {...this.props} />
        </Box>
      </LayountContent>
    ) : (
      <RestEditForm {...this.props} />
    );
  }
}

RestEditComponent.propTypes = {
  resource: PropTypes.string,
  match: PropTypes.object,
  showModal: PropTypes.bool,
};

RestEditComponent.defaultProps = {
  noCardWrapper: false,
};

export default RestEditComponent;
