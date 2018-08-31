import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { retrieveList, editRecord, deleteRecord } from '../../../redux/rest/actions';
import RestListComponent from '../../../components/RestLayout/List';
import { getFilterFromUrl, getSearch } from '../../../helpers/Tools';

class RestList extends Component {
  constructor(props) {
    super(props);
    const filter = getFilterFromUrl(this.props.location.search);
    this.props.retrieveList(filter, true);
  }

  retrieveList = filter => {
    this.props.pushQuery(filter);
    this.props.retrieveList(filter, true);
  };

  render() {
    return <RestListComponent {...this.props} retrieveList={this.retrieveList} />;
  }
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.loading.isMainLoading,
    resourceData: state.rest[props.resource],
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    retrieveList: (filter, isRefresh) => {
      return dispatch(
        retrieveList(
          props.resource,
          {
            ...props.initialFilter,
            ...filter,
          },
          isRefresh,
        ),
      );
    },
    updateRecord: (id, data, isChangeToEdit) =>
      dispatch(editRecord(props.resource, id, data, isChangeToEdit)),
    gotoEditPage: id => dispatch(push(`${props.rootPath}/${props.resource}/${id}/edit`)),
    gotoShowPage: id => props.history.push(`${props.rootPath}/${props.resource}/${id}/show`),
    gotoCreatePage: () => props.history.push(`${props.rootPath}/${props.resource}/create`),
    deleteItem: id => dispatch(deleteRecord(props.resource, id)),
    pushQuery: filter => dispatch(push(`${props.rootPath}/${props.resource}?${getSearch(filter)}`)),
  };
};

const ConnectRestList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestList);

RestList.propTypes = {
  location: PropTypes.object,
  pushQuery: PropTypes.func,
  retrieveList: PropTypes.func,
};

ConnectRestList.defaultProps = {
  rootPath: '',
};

export default ConnectRestList;
