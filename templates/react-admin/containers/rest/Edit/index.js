import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import IntlMessages from '../../../components/utility/intlMessages';
import { editRecord, retrieveOneRecord } from '../../../redux/rest/actions';
import RestEditComponent from '../../../components/RestLayout/Edit';

class RestEdit extends Component {
  static propTypes = {
    retrieveOneRecord: PropTypes.func,
    showModal: PropTypes.bool,
    onBack: PropTypes.func,
    title: PropTypes.string,
    resource: PropTypes.string,
  };

  componentWillMount() {
    this.props.retrieveOneRecord();
  }

  render() {
    const { showModal, onBack, title, resource } = this.props;
    return !showModal ? (
      <RestEditComponent {...this.props} />
    ) : (
      <div>
        <Modal
          title={title || <IntlMessages id={resource} />}
          visible
          onCancel={onBack}
          footer={null}
        >
          <RestEditComponent showModal {...this.props} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.loading.isMainLoading,
    errorRequest: state.rest.errorRequest,
    record:
      state.rest && state.rest[props.resource]
        ? state.rest[props.resource].list &&
          state.rest[props.resource].list.find(data => data.id === props.match.params.id)
        : null,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    retrieveOneRecord: () => dispatch(retrieveOneRecord(props.resource, props.match.params.id)),
    onSubmit: data => {
      dispatch(editRecord(props.resource, props.match.params.id, data));
    },
    gotoShowPage: id =>
      props.history.push(`${props.match.path.replace('/:id/edit', '')}/${id}/show`),
    onBack: () => props.history.goBack(),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestEdit);
