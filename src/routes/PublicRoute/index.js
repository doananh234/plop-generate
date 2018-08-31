import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../../components/common/LoadingScreen';
import './index.css';

// Pages
const unauthorizedRoutes = [
  {
    path: '/login',
    component: Loadable({
      loader: () => import('../../containers/Login'),
      loading: Loading,
    }),
    exact: true,
  },
];

const PublicRoute = ({ match }) => {
  return (
    <div className="unauthorized-layout">
      <Switch>
        {unauthorizedRoutes.map(({ path, component, exact }) => {
          const fullPath = match.path === '/' ? path : match.path + path;
          return <Route exact={exact} path={fullPath} component={component} key={fullPath} />;
        })}
        <Redirect
          to={
            match.path === '/'
              ? unauthorizedRoutes[0].path
              : match.path + unauthorizedRoutes[0].path
          }
        />
      </Switch>
    </div>
  );
};

PublicRoute.propTypes = { match: PropTypes.object };

export default PublicRoute;
