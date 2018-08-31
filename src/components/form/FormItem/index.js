import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import FormTitle from '../FormTitle';

const FormItem = Form.Item;

const FormItemUI = props => {
  const {
    source,
    title,
    required,
    requiredMessage,
    icon,
    form,
    defaultValue,
    ruleType,
    rules,
    children,
    valuePropName,
  } = props;
  return (
    <FormItem>
      <FormTitle title={title} icon={icon} />
      {form.getFieldDecorator(source, {
        rules: [{ type: ruleType, required, message: requiredMessage, ...rules }],
        valuePropName,
        initialValue: defaultValue,
      })(children)}
    </FormItem>
  );
};

FormItemUI.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.object,
  valuePropName: PropTypes.string,
  ruleType: PropTypes.string,
  children: PropTypes.node,
};
FormItemUI.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: {},
  valuePropName: 'value',
};

export default FormItemUI;
