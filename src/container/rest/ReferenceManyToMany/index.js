import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retrieveReference } from '../../../redux/rest/actions';

class RestReferenceManyToMany extends Component {
  componentDidMount() {
    const { record, source } = this.props;
    this.props.retrieveReference(record[source]);
  }

  render() {
    const { resourceData, reference, retrieveList, children, type, gotoShowPage } = this.props;
    return (
      <div>
        {type === 'singleElement'
          ? resourceData.map(data => (
            <Link
              key={data.id}
              href={`/auth/${reference}/${data.id}/show`}
              to={`/auth/${reference}/${data.id}/show`}
            >
              {React.cloneElement(children, {
                  record: data,
                  retrieveList,
                })}
            </Link>
            ))
          : React.cloneElement(children, {
              resourceData: {
                list: resourceData,
                count: resourceData.length,
              },
              retrieveList,
              gotoShowPage,
            })}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    resourceData: state.rest[props.reference]
      ? state.rest[props.reference].list.filter(
          data =>
            props.record[props.source] && props.record[props.source].indexOf(data.objectId) > -1,
        )
      : [],
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    retrieveReference: ids => dispatch(retrieveReference(props.reference, ids)),
    gotoShowPage: id => props.history.push(`/auth/${props.reference}/${id}/show`),
  };
};

RestReferenceManyToMany.propTypes = {
  resourceData: PropTypes.object,
  record: PropTypes.object,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  retrieveReference: PropTypes.func,
  gotoShowPage: PropTypes.func,
  reference: PropTypes.string,
  type: PropTypes.oneOf(['singleElement', 'list', 'table']),
};

RestReferenceManyToMany.defaultProps = {
  type: 'singleElement',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestReferenceManyToMany);
