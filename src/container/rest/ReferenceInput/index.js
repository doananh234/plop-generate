import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { retrieveReference, retrieveList } from '../../../redux/rest/actions';

class RestReference extends Component {
  componentDidMount() {
    const { record, source } = this.props;
    this.props.retrieveReference(record[source]);
    this.props.retrieveList();
  }

  render() {
    const {
      resourceData,
      record,
      children,
      source,
      getFieldDecorator,
      setFieldsValue,
      form,
    } = this.props;
    const newChildren = React.cloneElement(children, {
      record,
      form,
      source,
      getFieldDecorator,
      setFieldsValue,
      resourceData,
    });
    return newChildren;
  }
}
RestReference.propTypes = {
  resourceData: PropTypes.object,
  record: PropTypes.object,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  retrieveReference: PropTypes.func,
  getFieldDecorator: PropTypes.func,
  setFieldsValue: PropTypes.func,
  form: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  return {
    resourceData: state.rest[props.reference] ? state.rest[props.reference].list : [],
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    retrieveReference: data =>
      dispatch(retrieveReference(props.reference, Array.isArray(data) ? data : [data])),
    retrieveList: filter => dispatch(retrieveList(props.reference, filter)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestReference);
