import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import { Tabs } from 'antd';
import { push } from 'react-router-redux';
import LayoutWrapper from '../../components/utility/LayoutWrapper';
import Box from '../../components/utility/Box';
import PageHeader from '../../components/uielements/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';
import Loading from '../../components/common/LoadingScreen';
import ConfigWrapper from './style';

const TabPane = Tabs.TabPane;

const CONFIG_TABS = [
  {
    title: 'page.typeGroup',
    key: 'EmergencyTypeGroup',
    PaneComponent: Loadable({
      loader: () => import('../EmergencyTypeGroup/List'),
      loading: Loading,
    }),
    closable: false,
  },
  {
    title: 'page.caseType',
    key: 'EmergencyType',
    PaneComponent: Loadable({
      loader: () => import('../EmergencyType/List'),
      loading: Loading,
    }),
    closable: false,
  },
  {
    title: 'page.subTypeGroup',
    key: 'subTypeGroup',
    PaneComponent: Loadable({
      loader: () => import('../SafeInfo/List'),
      loading: Loading,
    }),
  },
  {
    title: 'page.userRole',
    key: 'userRole',
    PaneComponent: Loadable({
      loader: () => import('../SafeInfo/List'),
      loading: Loading,
    }),
  },
  {
    title: 'page.privatePolicy',
    key: 'privatePolicy',
    PaneComponent: Loadable({
      loader: () => import('../SafeInfo/List'),
      loading: Loading,
    }),
  },
  {
    title: 'page.activityType',
    key: 'activityType',
    PaneComponent: Loadable({
      loader: () => import('../ActivityType/List'),
      loading: Loading,
    }),
  },
  {
    title: 'page.localization',
    key: 'localization',
    PaneComponent: Loadable({
      loader: () => import('../ActivityType/List'),
      loading: Loading,
    }),
  },
  {
    title: 'page.safetyInfo',
    key: 'SafeInfo',
    PaneComponent: Loadable({
      loader: () => import('../ActivityType/List'),
      loading: Loading,
    }),
  },
  {
    title: 'page.addressLine1',
    key: 'addressLine1',
    PaneComponent: Loadable({
      loader: () => import('../ActivityType/List'),
      loading: Loading,
    }),
  },
  {
    title: 'page.addressLine2',
    key: 'addressLine2',
    PaneComponent: Loadable({
      loader: () => import('../ActivityType/List'),
      loading: Loading,
    }),
  },
  {
    title: 'page.addressLine3',
    key: 'addressLine3',
    PaneComponent: Loadable({
      loader: () => import('../ActivityType/List'),
      loading: Loading,
    }),
  },
];

class ConfigPage extends Component {
  static propTypes = {
    match: PropTypes.object,
    pushQuery: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeKey: this.props.match.params.resource || CONFIG_TABS[0].key,
    };
  }

  onChange = activeKey => {
    this.updateTabUI(this.state.panes, activeKey);
  };

  updateTabUI = (panes, activeKey) => {
    this.setState({ panes, activeKey });
    this.props.pushQuery(activeKey);
  };

  render() {
    return (
      <LayoutWrapper>
        <PageHeader>
          <IntlMessages id="page.config" />
        </PageHeader>
        <Box>
          <ConfigWrapper>
            <Tabs
              className="tabs"
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              defaultActiveKey={this.props.match.params.resource}
            >
              {CONFIG_TABS.map(({ title, key, closable, PaneComponent }) => (
                <TabPane tab={<IntlMessages id={title} />} key={key} closable={closable}>
                  <div>
                    <PaneComponent {...this.props} rootPath="/config" />
                  </div>
                </TabPane>
              ))}
            </Tabs>
          </ConfigWrapper>
        </Box>
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    pushQuery: resource => dispatch(push(`/config/${resource}`)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigPage);
