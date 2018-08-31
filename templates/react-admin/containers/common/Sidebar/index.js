import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import clone from 'clone';
import { Scrollbars } from 'react-custom-scrollbars';
import IntlMessages from '../../../components/utility/intlMessages';
import { getCurrentTheme } from '../ThemeSwitcher/config';
import SidebarWrapper from './style';

import Logo from '../../../components/utility/logo';
import { rtl } from '../../../config/withDirection';

const { Sider } = Layout;
const customizedTheme = getCurrentTheme('sidebarTheme', 'themedefault');
const stripTrailingSlash = str => {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
};
const listMenu = [
  {
    key: 'dashboard',
    url: '/',
    icon: 'anticon anticon-dashboard',
    text: 'sidebar.dashboard'
  }
];

class Sidebar extends Component {
  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  };

  renderView({ style, ...props }) {
    const viewStyle = {
      marginRight: rtl === 'rtl' ? '0' : '-25px',
      paddingRight: rtl === 'rtl' ? '0' : '9px',
      marginLeft: rtl === 'rtl' ? '-17px' : '0',
      paddingLeft: rtl === 'rtl' ? '9px' : '0'
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  }

  render() {
    const { app } = this.props;
    const url = stripTrailingSlash('/');
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const mode = collapsed === true ? 'vertical' : 'inline';
    const scrollheight = app.height;
    const styling = {
      backgroundColor: customizedTheme.backgroundColor
    };
    const submenuColor = {
      color: customizedTheme.textColor
    };
    return (
      <SidebarWrapper>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width="240"
          className="isomorphicSidebar"
          style={styling}
        >
          <Logo collapsed={collapsed} />
          <Scrollbars
            renderView={this.renderView}
            style={{ height: scrollheight - 70 }}
          >
            <Menu
              theme="dark"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              defaultSelectedKeys={app.current}
              className="isoDashboardMenu"
            >
              {listMenu.map(menu => {
                return (
                  <Menu.Item key={menu.key}>
                    <Link to={`${url}${menu.url}`}>
                      <span className="isoMenuHolder" style={submenuColor}>
                        <i className={menu.icon} />
                        <span className="nav-text">
                          <IntlMessages id={menu.text} />
                        </span>
                      </span>
                    </Link>
                  </Menu.Item>
                );
              })}

              {/* {getDevSidebar(url, submenuColor)} */}
            </Menu>
          </Scrollbars>
        </Sider>
      </SidebarWrapper>
    );
  }
}

Sidebar.propTypes = {
  app: PropTypes.object
};

export default connect(
  state => ({
    app: state.App
  }),
  null
)(Sidebar);
