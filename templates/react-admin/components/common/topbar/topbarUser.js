import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import IntlMessages from '../../utility/intlMessages';
import userpic from '../../../assets/images/user1.png';
import TopbarDropdownWrapper from './topbarDropdown.style';

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  }

  hide() {
    this.setState({ visible: false });
  }

  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        <a className="isoDropdownLink">
          <IntlMessages id="themeSwitcher.settings" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="sidebar.feedback" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="topbar.help" />
        </a>
        <div role="button" onClick={this.props.logout} className="isoDropdownLink">
          <IntlMessages id="topbar.logout" />
        </div>
      </TopbarDropdownWrapper>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        arrowPointAtCenter
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          <img alt="user" src={userpic} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}

TopbarUser.propTypes = {
  // customizedTheme: PropTypes.object,
  logout: PropTypes.func,
};

export default TopbarUser;
