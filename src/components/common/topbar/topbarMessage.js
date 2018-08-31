import React, { Component } from 'react';
import { Popover } from 'antd';
import PropTypes from 'prop-types';
import IntlMessages from '../../utility/intlMessages';
import TopbarDropdownWrapper from './topbarDropdown.style';

import Image from '../../../assets/images/user3.png';

const demoMassage = [
  {
    id: 1,
    name: 'David Doe',
    time: '3 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 2,
    name: 'Navis Doe',
    time: '4 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 3,
    name: 'Emanual Doe',
    time: '5 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 4,
    name: 'Dowain Doe',
    time: '6 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
];

class TopbarMessage extends Component {
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
    const { customizedTheme } = this.props;
    const content = (
      <TopbarDropdownWrapper className="topbarMessage withImg">
        <div className="isoDropdownHeader">
          <h3>
            <IntlMessages id="sidebar.message" />
          </h3>
        </div>
        <div className="isoDropdownBody">
          {demoMassage.map(massage => (
            <a className="isoDropdownListItem" key={massage.id}>
              <div className="isoImgWrapper">
                <img alt="#" src={Image} />
              </div>

              <div className="isoListContent">
                <div className="isoListHead">
                  <h5>
                    {massage.name}
                  </h5>
                  <span className="isoDate">
                    {massage.time}
                  </span>
                </div>
                <p>
                  {massage.massage}
                </p>
              </div>
            </a>
          ))}
        </div>
        <a className="isoViewAllBtn">
          <IntlMessages id="topbar.viewAll" />
        </a>
      </TopbarDropdownWrapper>
    );
    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomLeft"
      >
        <div className="isoIconWrapper">
          <i
            className="ion-chatbubbles"
            style={{ color: customizedTheme.textColor }}
          />
          <span>
            {demoMassage.length}
          </span>
        </div>
      </Popover>
    );
  }
}

TopbarMessage.propTypes = {
  customizedTheme: PropTypes.object,
};

export default TopbarMessage;
