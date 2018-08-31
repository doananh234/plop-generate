import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Button } from 'antd';
import { SketchPicker } from 'react-color';
import FormItemUI from '../../../components/form/FormItem';

class ColorSelection extends React.Component {
  handleChangeComplete = color => {
    this.props.form.setFieldsValue({ iconBackgroundColor: color.hex });
  };

  render() {
    const { form, record } = this.props;
    const iconBackgroundColor = form.getFieldValue('iconBackgroundColor');
    return (
      <div>
        <FormItemUI {...this.props} defaultValue={record.iconBackgroundColor}>
          <Popover
            content={
              <SketchPicker
                color={iconBackgroundColor}
                onChangeComplete={this.handleChangeComplete}
              />
            }
            placement="bottom"
            trigger="click"
          >
            <Button block className="btnIconBGColor">
              {iconBackgroundColor}
            </Button>
          </Popover>
        </FormItemUI>
      </div>
    );
  }
}

ColorSelection.propTypes = {
  form: PropTypes.object,
  record: PropTypes.object,
};

export default ColorSelection;
