import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomBreadcrumb from '../../common/Breadcrumb';
import { getResourceTitle } from '../../../helpers/Tools';
import ButtonEdit from '../../RestActions/EditButton';
import DeleteButton from '../../RestActions/DeleteButton';
import BackButton from '../../RestActions/BackButton';
import LayountContent from '../../utility/LayoutWrapper';
import Box from '../../utility/Box';
import PageHeader from '../../uielements/pageHeader';
import ActionView from '../ActionLayout';

class RestShowComponent extends Component {
  state = {};

  componentWillMount() {}

  render() {
    const {
      noCardWrapper,
      onBack,
      deleteItem,
      gotoEditPage,
      record,
      resource,
      children,
      match,
      hasEdit,
      hasDel,
    } = this.props;
    const BREADCRUMB_LIST = [
      {
        title: getResourceTitle(resource),
        path: `/auth/${resource}`,
      },
      {
        title: 'Show',
        path: match.url,
      },
    ];
    if (!record) return null;

    const actions = (
      <div>
        <BackButton resource={resource} record={record} onBack={onBack} />
        {hasEdit && <ButtonEdit resource={resource} record={record} gotoEditPage={gotoEditPage} />}
        {hasDel && <DeleteButton resource={resource} record={record} deleteItem={deleteItem} />}
      </div>
    );

    const components = React.Children.map(children, element => {
      return React.cloneElement(element, { key: element.props.source, record });
    });

    return noCardWrapper ? (
      <div>{components}</div>
    ) : (
      <LayountContent
        bordered={false}
        title={<CustomBreadcrumb data={BREADCRUMB_LIST} />}
        extra={actions}
      >
        <PageHeader>{getResourceTitle(resource)}</PageHeader>
        <Box>
          <ActionView>{actions}</ActionView>
          {components}
        </Box>
      </LayountContent>
    );
  }
}
RestShowComponent.propTypes = {
  children: PropTypes.node,
  record: PropTypes.object,
  noCardWrapper: PropTypes.object,
  onBack: PropTypes.func,
  deleteItem: PropTypes.func,
  gotoEditPage: PropTypes.func,
  resource: PropTypes.object,
  match: PropTypes.object,
  hasEdit: PropTypes.bool,
  hasDel: PropTypes.bool,
};

RestShowComponent.defaultProps = {
  noCardWrapper: false,
};
export default RestShowComponent;
