import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../../components/common/LoadingScreen';
import './index.css';

// Pages
const errorRoutes = [
  {
    path: '/401-error',
    component: Loadable({
      loader: () => import('../../components/common/404Page'),
      loading: Loading,
    }),
  },
];

const ErrorRoute = ({ match }) => {
  return (
    <div className="unauthorized-layout">
      <Switch>
        {errorRoutes.map(({ path, component, exact }) => {
          const fullPath = match.path === '/' ? path : match.path + path;
          return (
            <Route
              exact={exact}
              path={fullPath}
              component={component}
              key={fullPath}
            />
          );
        })}
        <Route
          component={Loadable({
            loader: () => import('../../components/common/404Page'),
            loading: Loading,
          })}
        />
      </Switch>
    </div>
  );
};

ErrorRoute.propTypes = {
  match: PropTypes.object,
};

export default ErrorRoute;
