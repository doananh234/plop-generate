import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createRecord } from '../../../redux/rest/actions';
import RestCreateComponent from '../../../components/RestLayout/Create';

const RestCreate = props => <RestCreateComponent {...props} />;

const mapStateToProps = (state, props) => {
  const defaultValues = decodeURI(props.location.search.substring(1)).trim();
  return {
    record: defaultValues !== '' ? JSON.parse(defaultValues) : {},
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: data => dispatch(createRecord(props.resource, data, props.goShowPageWhenSuccess)),
    gotoShowPage: id => props.history.push(`${props.match.path.replace('create', '')}/${id}/edit`),
    onBack: () => props.history.goBack(),
  };
};

const ConnectedRestCreate = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestCreate);

ConnectedRestCreate.propTypes = {
  goShowPageWhenSuccess: PropTypes.bool,
};
ConnectedRestCreate.defaultProps = {
  goShowPageWhenSuccess: true,
};
export default ConnectedRestCreate;
