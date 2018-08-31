import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import { FilterFormWrapper } from './styles';
import IntlMessages from '../../utility/intlMessages';

class FormComponent extends Component {
  onFilter = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.retrieveList({ filter: values });
      }
    });
  };

  onClear = () => {
    this.props.form.resetFields();
    this.props.retrieveList({ filter: {} });
  };

  render() {
    const { form, children, retrieveList, resourceData } = this.props;
    const components = React.Children.map(children, element => {
      return React.cloneElement(element, {
        form,
        record: resourceData.filter || {},
        retrieveList,
        required: false,
      });
    });
    return (
      <FilterFormWrapper>
        <div className="filterContainer">
          <div className="filterContent">{components}</div>
          <div className="filterActions">
            <Button type="primary" onClick={this.onFilter} className="filterButton">
              <IntlMessages id="button.filter" />
            </Button>
            <Button onClick={this.onClear} className="filterButton">
              <IntlMessages id="button.clear" />
            </Button>
          </div>
        </div>
      </FilterFormWrapper>
    );
  }
}

const FilterForm = Form.create()(FormComponent);
const RestFilterForm = props => <FilterForm {...props} />;

FormComponent.propTypes = {
  children: PropTypes.node,
  retrieveList: PropTypes.func,
  resourceData: PropTypes.any,
  form: PropTypes.object,
};

FormComponent.defaultProps = {};

export default RestFilterForm;
