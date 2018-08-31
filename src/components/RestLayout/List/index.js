import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomBreadcrumb from '../../common/Breadcrumb';
import { getResourceTitle } from '../../../helpers/Tools';
import CreateButton from '../../RestActions/CreateButton';
import RestTableLayout from '../TableLayout';
import LayountContent from '../../utility/LayoutWrapper';
import Box from '../../utility/Box';
import PageHeader from '../../uielements/pageHeader';
import ActionView from '../ActionLayout';
import RestFilterForm from '../FilterLayout';

class RestListComponent extends Component {
  state = {};

  componentWillMount() {}

  render() {
    const {
      retrieveList,
      noCardWrapper,
      resourceData,
      resource,
      hasCreate,
      gotoCreatePage,
      filter,
    } = this.props;
    const BREADCRUMB_LIST = [
      {
        title: getResourceTitle(resource),
        path: `/auth/${resource}`,
      },
    ];

    const actions = (
      <div>{hasCreate && <CreateButton resource={resource} gotoCreatePage={gotoCreatePage} />}</div>
    );

    if (!resourceData) return null;

    return noCardWrapper ? (
      <RestTableLayout {...this.props} />
    ) : (
      <LayountContent
        bordered={false}
        title={<CustomBreadcrumb data={BREADCRUMB_LIST} />}
        extra={actions}
      >
        <PageHeader>{getResourceTitle(resource)}</PageHeader>
        <Box>
          <ActionView>{actions}</ActionView>
          {filter && (
            <RestFilterForm resourceData={resourceData} retrieveList={retrieveList}>
              {filter}
            </RestFilterForm>
          )}
          <RestTableLayout {...this.props} />
        </Box>
      </LayountContent>
    );
  }
}

RestListComponent.propTypes = {
  resource: PropTypes.string,
  noCardWrapper: PropTypes.bool,
  retrieveList: PropTypes.func,
  resourceData: PropTypes.object,
  hasCreate: PropTypes.bool,
  gotoCreatePage: PropTypes.func,
  filter: PropTypes.object,
};
RestListComponent.defaultProps = {
  noCardWrapper: false,
};
export default RestListComponent;
