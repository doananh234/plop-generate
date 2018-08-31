import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Layout } from 'antd';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';
import Topbar from '../../containers/common/Topbar';
import Sidebar from '../../containers/common/Sidebar';
import Loading from '../../components/common/LoadingScreen';
import AuthorizeRoute from '../subRoute/AuthorizeRoute';
import { siteConfig } from '../../config';
import appActions from '../../redux/app/actions';
import AppHolder from './style';

const { Content, Footer } = Layout;
const toggleAllApp = appActions.toggleAll;

const restRoutes = [

    {
      path: '/test',
      component: Loadable({
        loader: () => import('../../containers/Test/List'),
        loading: Loading,
      }),
    },
  {
    path: '/Emergency',
    component: Loadable({
      loader: () => import('../../containers/Emergency/List'),
      loading: Loading,
    }),
  },
  {
    path: '/config/EmergencyType/:id/edit',
    component: Loadable({
      loader: () => import('../../containers/EmergencyType/Edit'),
      loading: Loading,
    }),
  },
  {
    path: '/config/EmergencyType/:id/show',
    component: Loadable({
      loader: () => import('../../containers/EmergencyType/Show'),
      loading: Loading,
    }),
  },
  {
    path: '/config/EmergencyType/create',
    component: Loadable({
      loader: () => import('../../containers/EmergencyType/Create'),
      loading: Loading,
    }),
  },
];

const modalRoutes = [

    {
      path: '/test/create',
      component: Loadable({
        loader: () => import('../../containers/Test/Create'),
        loading: Loading,
      }),
    },
    {
      path: '/test/:id/edit',
      component: Loadable({
        loader: () => import('../../containers/Test/Edit'),
        loading: Loading,
      }),
    },
    {
      path: '/test/:id/show',
      component: Loadable({
        loader: () => import('../../containers/Test/Show'),
        loading: Loading,
      }),
    },
  {
    path: '/config/EmergencyTypeGroup/create',
    component: Loadable({
      loader: () => import('../../containers/EmergencyTypeGroup/Create'),
      loading: Loading,
    }),
  },
  {
    path: '/config/EmergencyTypeGroup/:id/edit',
    component: Loadable({
      loader: () => import('../../containers/EmergencyTypeGroup/Edit'),
      loading: Loading,
    }),
  },
  {
    path: '/config/EmergencyTypeGroup/:id/show',
    component: Loadable({
      loader: () => import('../../containers/EmergencyTypeGroup/Show'),
      loading: Loading,
    }),
  },
  {
    path: '/config/SafeInfo/:id/edit',
    component: Loadable({
      loader: () => import('../../containers/SafeInfo/Edit'),
      loading: Loading,
    }),
  },
  {
    path: '/config/SafeInfo/create',
    component: Loadable({
      loader: () => import('../../containers/SafeInfo/Create'),
      loading: Loading,
    }),
  },
  {
    path: '/config/SafeInfo/:id/show',
    component: Loadable({
      loader: () => import('../../containers/SafeInfo/Show'),
      loading: Loading,
    }),
  },
  {
    path: '/Emergency/:id/edit',
    component: Loadable({
      loader: () => import('../../containers/Emergency/Edit'),
      loading: Loading,
    }),
  },
  {
    path: '/config/ActivityType/create',
    component: Loadable({
      loader: () => import('../../containers/ActivityType/Create'),
      loading: Loading,
    }),
  },
  {
    path: '/config/ActivityType/:id/edit',
    component: Loadable({
      loader: () => import('../../containers/ActivityType/Edit'),
      loading: Loading,
    }),
  },
  {
    path: '/config/ActivityType/:id/show',
    component: Loadable({
      loader: () => import('../../containers/ActivityType/Show'),
      loading: Loading,
    }),
  },
];
// Pages
const authorizedRoutes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import('../../containers/Home'),
      loading: Loading,
    }),
    exact: true,
  },
  ...restRoutes,
  {
    path: '/config/:resource',
    component: Loadable({
      loader: () => import('../../containers/Config'),
      loading: Loading,
    }),
  },
];

class PrivateRoute extends Component {
  componentDidMount() {}

  render() {
    const { match, toggleAll } = this.props;
    return (
      <div className="authorized-layout">
        <AppHolder>
          <Layout style={{ height: '100vh', overflow: 'hidden' }}>
            <Debounce time="1000" handler="onResize">
              <WindowResizeListener
                onResize={windowSize => toggleAll(windowSize.windowWidth, windowSize.windowHeight)}
              />
            </Debounce>
            <Topbar />
            <Layout style={{ flexDirection: 'row', overflow: 'hidden' }}>
              <Sidebar />
              <Layout
                className="isoContentMainLayout"
                style={{
                  height: '100vh',
                  overflow: 'hidden',
                }}
              >
                <Content
                  className="isomorphicContent"
                  style={{
                    padding: '70px 0 0',
                    flexShrink: '0',
                    background: '#f1f3f6',
                    overflow: 'auto',
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}
                >
                  <Switch>
                    {authorizedRoutes.map(({ path, component, exact, role }) => {
                      const fullPath = match.path === '/' ? path : match.path + path;
                      return (
                        <AuthorizeRoute
                          match={match}
                          exact={exact}
                          path={fullPath}
                          component={component}
                          role={role}
                          key={fullPath}
                        />
                      );
                    })}
                    <Redirect
                      to={
                        match.path === '/'
                          ? authorizedRoutes[0].path
                          : match.path + authorizedRoutes[0].path
                      }
                    />
                  </Switch>
                  {modalRoutes.map(({ path, component, role }) => {
                    const fullPath = match.path === '/' ? path : match.path + path;
                    return (
                      <AuthorizeRoute
                        location={this.props.location}
                        match={match}
                        path={fullPath}
                        component={component}
                        role={role}
                        key={fullPath}
                      />
                    );
                  })}
                </Content>
                <Footer
                  style={{
                    background: '#ffffff',
                    textAlign: 'center',
                    borderTop: '1px solid #ededed',
                  }}
                >
                  {siteConfig.footerText}
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </AppHolder>
      </div>
    );
  }
}

PrivateRoute.propTypes = {
  match: PropTypes.object,
  toggleAll: PropTypes.func,
  location: PropTypes.object,
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAll: () => {
      dispatch(toggleAllApp());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(PrivateRoute);
