import React from 'react';
import PropTypes from 'prop-types';
import { Form, Radio } from 'antd';
import FormTitle from '../FormTitle';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormRadio = props => {
  const {
    source,
    title,
    required,
    requiredMessage,
    icon,
    placeholder,
    form,
    defaultValue,
    type,
    dataResource,
    valuePops,
    titleProps,
    rules,
  } = props;
  return (
    <FormItem>
      <FormTitle title={title} icon={icon} />
      {form.getFieldDecorator(source, {
        rules: [{ required, message: requiredMessage, ...rules }],
        initialValue: defaultValue,
      })(
        <RadioGroup placeholder={placeholder}>
          {dataResource.map(data => {
            return type === 'button' ? (
              <RadioButton key={data[valuePops]} value={data[valuePops]}>
                {data[titleProps]}
              </RadioButton>
            ) : (
              <Radio key={data[valuePops]} value={data[valuePops]}>
                {data[titleProps]}
              </Radio>
            );
          })}
        </RadioGroup>,
      )}
    </FormItem>
  );
};

FormRadio.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  dataResource: PropTypes.any,
  type: PropTypes.string,
  rules: PropTypes.object,
  valuePops: PropTypes.string,
  titleProps: PropTypes.string,
};

FormRadio.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: {},
};
export default FormRadio;
