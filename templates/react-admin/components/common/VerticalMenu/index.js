import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import appIcon from '../../../assets/images/app-icon.png';
import './index.css';

const listMenu = [
  {
    title: 'Dashboard',
    href: '/',
    icon: 'ti-panel',
  },
  {
    title: 'User Profile',
    href: '/profile',
    icon: 'ti-user',
  },
  {
    title: 'Maps',
    href: '#',
    icon: 'ti-map',
  },
];

class VerticalMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: listMenu[0], isMini: false };
  }

  handleItemClick(activeItem) {
    this.setState({ activeItem });
  }

  toggleMenu() {
    this.setState({ isMini: !this.state.isMini });
  }

  render() {
    return (
      <div className="body-with-vertical-menu">
        <div
          className={this.state.isMini ? 'sidebar sidebar-mini' : 'sidebar'}
          data-background-color="white"
          data-active-color="danger"
        >
          <div
            className={
              this.state.isMini
                ? 'sidebar-wrapper sidebar-wrapper-mini'
                : 'sidebar-wrapper'
            }
          >
            <div className="logo">
              <Link to="/" className="simple-text logo-mini">
                <div className="logo-img">
                  <img src={appIcon} alt="Smart SOS" />
                </div>
              </Link>

              <Link to="/" className="simple-text logo-normal">
                Smart SOS
              </Link>
            </div>

            <ul className="nav">
              {listMenu.map(item => {
                return (
                  <li
                    className={
                      this.state.activeItem.title === item.title
                        ? 'active'
                        : null
                    }
                    key={item.title}
                    onClick={() => this.handleItemClick(item)}
                  >
                    <Link to={item.href}>
                      <i className={item.icon} />
                      <p>
                        {item.title}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className={
            this.state.isMini
              ? 'content-with-vertical-menu content-with-vertical-menu-mini'
              : 'content-with-vertical-menu'
          }
        >
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-minimize">
                <button
                  className="btn btn-fill btn-icon"
                  id="minimizeSidebar"
                  onClick={() => this.toggleMenu()}
                >
                  <i className="ti-more-alt" />
                </button>
              </div>
              <div className="navbar-header">
                <Link className="navbar-brand" to={this.state.activeItem.href}>
                  {this.state.activeItem.title}
                </Link>
              </div>
            </div>
          </nav>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

VerticalMenu.propTypes = {
  children: PropTypes.element,
};

export default VerticalMenu;
