import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import IntlMessages from '../../utility/intlMessages';
import { ButtonWrapper } from './styles';

class EditButton extends Component {
  state = {
    visible: false,
  };

  onOk = () => {
    this.setState({ visible: false });
    const { deleteItem, record } = this.props;
    return new Promise((resolve, reject) => {
      setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      deleteItem(record.id);
    }).catch(() => {
      console.log('Oops errors!');
    });
  };

  onCancel = () => {
    this.setState({ visible: false });
  };

  handleDelete = () => {
    this.setState({ visible: true });
  };

  render() {
    const { record } = this.props;
    return (
      <span>
        <ButtonWrapper icon="delete" onClick={this.handleDelete}>
          {/* <IntlMessages id="button.delete" /> */}
        </ButtonWrapper>
        <Modal
          visible={this.state.visible}
          onOk={this.onOk}
          onCancel={this.onCancel}
          okText={<IntlMessages id="button.ok" />}
          cancelText={<IntlMessages id="button.cancel" />}
        >
          <span>
            <IntlMessages id="text.alertDelete" />
            {`(#${record.id})?`}
          </span>
        </Modal>
      </span>
    );
  }
}

EditButton.propTypes = {
  deleteItem: PropTypes.func,
  record: PropTypes.object,
};

EditButton.defaultProps = {
  source: 'delete',
};

export default EditButton;
