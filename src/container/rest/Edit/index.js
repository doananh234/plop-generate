import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { editRecord, retrieveOneRecord } from '../../../redux/rest/actions';
import RestEditComponent from '../../../components/RestLayout/Edit';

class RestEdit extends Component {
  static propTypes = {
    retrieveOneRecord: PropTypes.func,
    showModal: PropTypes.bool,
    onBack: PropTypes.func,
  };

  componentWillMount() {
    this.props.retrieveOneRecord();
  }

  render() {
    const { showModal, onBack } = this.props;
    return (
      <div>
        {!showModal ? (
          <RestEditComponent {...this.props} />
        ) : (
          <Modal visible onCancel={onBack} footer={null}>
            <RestEditComponent {...this.props} />
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
    onSubmit: data => {
      dispatch(editRecord(props.resource, props.match.params.id, data));
      if (props.showModal) props.history.goBack();
    },
    gotoShowPage: id => props.history.push(`${props.match.path.replace('/:id/edit', '')}/${id}/show`),
    onBack: () => props.history.goBack(),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestEdit);
