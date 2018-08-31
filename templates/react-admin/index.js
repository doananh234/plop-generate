import React from 'react';
import Raven from 'raven-js';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Loadable from 'react-loadable';
import 'antd/dist/antd.css';
import { ThemeProvider } from 'styled-components';
import store, { history } from './redux/store';
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import ErrorLayout from './layouts/ErrorLayout';
import Loading from './components/common/LoadingScreen';
import AppLocale from './languageProvider';
import themes from './config/themes';
import { themeConfig } from './config';
import { getCurrentLanguage } from './containers/common/LanguageSwitcher/config';
import StyleHolder from './appStyle';

const target = document.querySelector('#root');

const currentAppLocale = AppLocale[getCurrentLanguage('vietnamese').locale];

render(
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <StyleHolder>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Switch>
                <ErrorLayout
                  path="/error"
                  component={Loadable({
                    loader: () => import('./routes/ErrorRoute'),
                    loading: Loading,
                  })}
                />
                <PublicLayout
                  path="/auth"
                  component={Loadable({
                    loader: () => import('./routes/PublicRoute'),
                    loading: Loading,
                  })}
                  locale={currentAppLocale.antd.locale}
                  selectedTheme={themeConfig.theme}
                />
                <PrivateLayout
                  path="/"
                  component={Loadable({
                    loader: () => import('./routes/PrivateRoute'),
                    loading: Loading,
                  })}
                  locale={currentAppLocale.antd.locale}
                  selectedTheme={themeConfig.theme}
                />
                <Redirect to="/auth" />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </StyleHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>,
  target,
);

export { AppLocale };

Raven.config(process.env.REACT_APP_SENTRY_IO_URL).install();
