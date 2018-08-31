import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'antd';
import FormTitle from '../FormTitle';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const FormCheckbox = ({
  source,
  title,
  required,
  requiredMessage,
  icon,
  placeholder,
  form,
  defaultValue,
  dataResource,
  valueProp,
  titleProp,
  rules,
}) => {
  return (
    <FormItem>
      <FormTitle title={title} icon={icon} />
      {form.getFieldDecorator(source, {
        rules: [{ required, message: requiredMessage, ...rules }],
        initialValue: defaultValue,
      })(
        <CheckboxGroup placeholder={placeholder}>
          {dataResource.map(data => {
            return (
              <Checkbox key={data[valueProp]} value={data[valuePops]}>
                {data[titleProp]}
              </Checkbox>
            );
          })}
        </CheckboxGroup>,
      )}
    </FormItem>
  );
};

FormCheckbox.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  dataResource: PropTypes.any,
  valueProp: PropTypes.string,
  titleProp: PropTypes.string,
  rules: PropTypes.object,
};
FormCheckbox.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: {},
};

export default FormCheckbox;
