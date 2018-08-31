import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import FormTitle from '../FormTitle';
import IntlMessages from '../../utility/intlMessages';
import { getRecordData } from '../../../helpers/Tools';
import { onSearch } from '../../../utils';

const FormItem = Form.Item;
const { Option } = Select;
class FormSelect extends Component {
  onSelectOption = (inputValue, option) => {
    if (onSearch(option.props.children, inputValue)) {
      return option.props.value;
    }
    return null;
  };

  render() {
    const {
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
      label,
    } = this.props;
    return (
      <FormItem label={label}>
        <FormTitle title={title} icon={icon} />
        <IntlMessages id={placeholder}>
          {placeholderText =>
            form.getFieldDecorator(source, {
              rules: [{ required, message: requiredMessage, ...rules }],
              initialValue: defaultValue,
            })(
              <Select
                disabled={disabled}
                placeholder={placeholderText}
                filterOption={this.onSelectOption}
                showSearch
              >
                {resourceData.map(data => {
                  return children ? (
                    <Option
                      key={valueProp ? getRecordData(data, valueProp) : data}
                      value={valueProp ? getRecordData(data, valueProp) : data}
                    >
                      {React.cloneElement(children, {
                        key: getRecordData(data, valueProp),
                        record: data,
                        valueProp,
                        titleProp,
                      })}
                    </Option>
                  ) : (
                    <Option
                      key={valueProp ? getRecordData(data, valueProp) : data}
                      value={valueProp ? getRecordData(data, valueProp) : data}
                    >
                      {titleProp ? getRecordData(data, titleProp) : data}
                    </Option>
                  );
                })}
              </Select>,
            )
          }
        </IntlMessages>
      </FormItem>
    );
  }
}

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
  label: PropTypes.string,
};

FormSelect.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: {},
  placeholder: 'placeholder.undefined',
};

export default FormSelect;
