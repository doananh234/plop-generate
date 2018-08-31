import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import FormTitle from '../FormTitle';

const FormItem = Form.Item;
const { Option } = Select;

const FormSelect = ({
  source,
  title,
  required,
  requiredMessage,
  icon,
  placeholder,
  form,
  defaultValue,
  disabled,
  resourceData,
  valueProp,
  titleProp,
  children,
  rules,
}) => (
  <FormItem>
    <FormTitle title={title} icon={icon} />
    {form.getFieldDecorator(source, {
      rules: [{ required, message: requiredMessage, type: 'array', ...rules }],
      initialValue: defaultValue,
    })(
      <Select disabled={disabled} mode="multiple" placeholder={placeholder}>
        {resourceData.map(data => {
          return children ? (
            <Option key={data[valueProp]} value={data[valueProp]}>
              {React.cloneElement(children, {
                key: data[valueProp],
                record: data,
                valueProp,
                titleProp,
              })}
            </Option>
          ) : (
            <Option key={data[valueProp]} value={data[valueProp]}>
              {data[titleProp]}
            </Option>
          );
        })}
      </Select>,
    )}
  </FormItem>
);

FormSelect.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  resourceData: PropTypes.any,
  valueProp: PropTypes.string,
  titleProp: PropTypes.string,
  children: PropTypes.node,
  rules: PropTypes.object,
};
FormSelect.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: {},
};
export default FormSelect;
