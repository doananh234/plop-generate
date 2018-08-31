import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import ButtonRow from '../FooterButtonRow';

class FormComponent extends Component {
  handleSubmit = () => {
    return new Promise((resolve, reject) => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const submitData = this.props.formatOnSubmit ? this.props.formatOnSubmit(values) : values;
          this.props.onSubmit(submitData);
          resolve(values);
        } else {
          reject(err);
        }
      });
    });
  };

  render() {
    const {
      loading,
      form,
      onBack,
      children,
      positionOfSubmitButton,
      customSubmitButton,
      record,
      showModal,
    } = this.props;

    const components = React.Children.map(children, element => {
      return React.cloneElement(element, { form, record });
    });
    return (
      <Form>
        <Row gutter={16}>
          <Col md={positionOfSubmitButton === 'left' ? 20 : 24} xs={24}>
            {components}
          </Col>
          <Col md={positionOfSubmitButton === 'left' ? 4 : 24} xs={24}>
            {customSubmitButton ? (
              React.cloneElement(customSubmitButton, {
                handleSubmit: this.handleSubmit,
              })
            ) : (
              <ButtonRow
                type="create"
                loading={loading}
                showModal={showModal}
                handleSubmit={this.handleSubmit}
                onBack={onBack}
              />
            )}
          </Col>
        </Row>
      </Form>
    );
  }
}

const CreateForm = Form.create()(FormComponent);
const RestCreateForm = props => (
  <div>
    <CreateForm {...props} />
  </div>
);

FormComponent.propTypes = {
  loading: PropTypes.bool,
  form: PropTypes.object,
  onBack: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  positionOfSubmitButton: PropTypes.string,
  customSubmitButton: PropTypes.node,
  record: PropTypes.object,
  showModal: PropTypes.bool,
  formatOnSubmit: PropTypes.func,
};

FormComponent.defaultProps = {
  positionOfSubmitButton: 'bottom',
  record: {},
};

export default RestCreateForm;
