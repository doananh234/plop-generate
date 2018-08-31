import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

const FormItem = Form.Item;

const FormLayoutUI = ({ title, children }) => {
  return (
    <FormItem label={title}>
      {children}
    </FormItem>
);
};

FormLayoutUI.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FormLayoutUI;
