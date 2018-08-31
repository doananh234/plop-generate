import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
// import LoadingScreenTransparent from '../../components/common/LoadingScreenTransparent';
import './index.css';

class PublicLayout extends Component {
  componentWillMount() {}

  componentDidMount() {}

  render() {
    const { component, notifications } = this.props;
    return (
      <div>
        <Route {...this.props} component={component} />
        {/* {isMainLoading ? <LoadingScreenTransparent /> : null} */}
        <Notifications notifications={notifications} />
      </div>
    );
  }
}

PublicLayout.propTypes = {
  component: PropTypes.func,
  // isMainLoading: PropTypes.bool,
  notifications: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    isMainLoading: state.loading.isMainLoading,
    notifications: state.notifications,
  };
}

export default connect(mapStateToProps)(PublicLayout);
