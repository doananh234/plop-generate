import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { retrieveOneRecord, deleteRecord } from '../../../redux/rest/actions';
import RestShowComponent from '../../../components/RestLayout/Show';

class RestShow extends Component {
  static propTypes = {
    retrieveOneRecord: PropTypes.func,
    onBack: PropTypes.func,
    showModal: PropTypes.bool,
  };

  componentWillMount() {
    this.props.retrieveOneRecord();
  }

  render() {
    const { onBack, showModal } = this.props;
    return (
      <div>
        {!showModal ? (
          <RestShowComponent {...this.props} />
        ) : (
          <Modal visible onCancel={onBack} footer={null}>
            <RestShowComponent {...this.props} />
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.loading.isMainLoading,
    errorRequest: state.rest.errorRequest,
    record: state.rest[props.resource]
      ? state.rest[props.resource].list.find(data => data.objectId === props.match.params.id)
      : null,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    retrieveOneRecord: () => dispatch(retrieveOneRecord(props.resource, props.match.params.id)),
    onBack: () => props.history.goBack(),
    gotoEditPage: id => props.history.push(`${props.match.path.replace('/:id/show', '')}/${id}/edit`),
    deleteItem: id => {
      dispatch(deleteRecord(props.resource, id));
      props.history.push(props.match.path.replace('/:id/show', ''));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestShow);
