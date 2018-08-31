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

const restRoutes = [];

const modalRoutes = [];
// Pages
const authorizedRoutes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import('../../containers/Home'),
      loading: Loading
    }),
    exact: true
  },
  ...restRoutes
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
                onResize={windowSize =>
                  toggleAll(windowSize.windowWidth, windowSize.windowHeight)
                }
              />
            </Debounce>
            <Topbar />
            <Layout style={{ flexDirection: 'row', overflow: 'hidden' }}>
              <Sidebar />
              <Layout
                className="isoContentMainLayout"
                style={{
                  height: '100vh',
                  overflow: 'hidden'
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
                    flex: 1
                  }}
                >
                  <Switch>
                    {authorizedRoutes.map(
                      ({ path, component, exact, role }) => {
                        const fullPath =
                          match.path === '/' ? path : match.path + path;
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
                      }
                    )}
                    <Redirect
                      to={
                        match.path === '/'
                          ? authorizedRoutes[0].path
                          : match.path + authorizedRoutes[0].path
                      }
                    />
                  </Switch>
                  {modalRoutes.map(({ path, component, role }) => {
                    const fullPath =
                      match.path === '/' ? path : match.path + path;
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
                    borderTop: '1px solid #ededed'
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
  location: PropTypes.object
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAll: () => {
      dispatch(toggleAllApp());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PrivateRoute);
