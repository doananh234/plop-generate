import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retrieveReference } from '../../../redux/rest/actions';

class RestReference extends Component {
  componentDidMount() {
    const { record, source } = this.props;
    this.props.retrieveReference(record[source]);
  }

  render() {
    const {
      resourceData,
      resource,
      record,
      reference,
      retrieveList,
      children,
      source,
    } = this.props;
    return (
      <div>
        <Link
          href={`/auth/${reference}/${record[source]}/show`}
          to={`/auth/${reference}/${record[source]}/show`}
        >
          {React.cloneElement(children, {
            record: resourceData,
            resource,
            reference,
            retrieveList,
          })}
        </Link>
      </div>
    );
  }
}

RestReference.propTypes = {
  resourceData: PropTypes.object,
  resource: PropTypes.string,
  record: PropTypes.object,
  reference: PropTypes.string,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  retrieveReference: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  return {
    resourceData: state.rest[props.reference]
      ? state.rest[props.reference].list.find(data => data.objectId === props.record[props.source])
      : null,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    retrieveReference: id => dispatch(retrieveReference(props.reference, [id])),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestReference);
