import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import ButtonRow from '../FooterButtonRow';
import FormInput from '../../RestInput/RestFormInput';

const EDIT_BLACKLIST = ['createdAt', 'updatedAt'];

class FormComponent extends Component {
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const submitData = this.props.formatOnSubmit ? this.props.formatOnSubmit(values) : values;
        this.props.onSubmit(submitData);
      }
    });
  };

  render() {
    const {
      record,
      loading,
      form,
      onBack,
      children,
      showModal,
      customEditButton,
      positionOfSubmitButton,
    } = this.props;

    if (!record) return null;

    if (!children || children.length === 0) {
      const components = Object.keys(record).map(key => {
        return EDIT_BLACKLIST.indexOf(key) > -1 ? null : (
          <FormInput
            type={typeof record[key]}
            disabled={key === 'id'}
            form={form}
            defaultValue={record[key]}
            name={key}
            title={key}
          />
        );
      });
      return (
        <Form>
          {components}
          {customEditButton ? (
            React.cloneElement(customEditButton, {
              loading,
              handleSubmit: this.handleSubmit,
              onBack,
            })
          ) : (
            <ButtonRow
              showModal={showModal}
              loading={loading}
              handleSubmit={this.handleSubmit}
              onBack={onBack}
            />
          )}
        </Form>
      );
    }
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
            {customEditButton ? (
              React.cloneElement(customEditButton, {
                loading,
                handleSubmit: this.handleSubmit,
                onBack,
              })
            ) : (
              <ButtonRow
                showModal={showModal}
                loading={loading}
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

const EditForm = Form.create()(FormComponent);
const RestEditForm = props => <EditForm {...props} />;

FormComponent.propTypes = {
  loading: PropTypes.bool,
  showModal: PropTypes.bool,
  form: PropTypes.object,
  onBack: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  positionOfSubmitButton: PropTypes.string,
  customEditButton: PropTypes.node,
  record: PropTypes.object,
  formatOnSubmit: PropTypes.func,
};

FormComponent.defaultProps = {
  positionOfSubmitButton: 'bottom',
  record: {},
  customEditButton: null,
};

export default RestEditForm;
