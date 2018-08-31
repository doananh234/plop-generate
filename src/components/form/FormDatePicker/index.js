import React from 'react';
import PropTypes from 'prop-types';
import { Form, DatePicker } from 'antd';
import FormTitle from '../FormTitle';

const FormItem = Form.Item;

const FormDatePicker = props => {
  const {
 source, title, required, requiredMessage, icon, form, defaultValue,
} = props;
  const config = {
    rules: [{ type: 'object', required, message: requiredMessage }],
    initialValue: defaultValue,
  };
  return (
    <FormItem>
      <FormTitle title={title} icon={icon} />
      {form.getFieldDecorator(source, config)(<DatePicker />)}
    </FormItem>
  );
};

FormDatePicker.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
};
export default FormDatePicker;
