import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Select, Spin, Row, Col } from 'antd';
import IntlMessages from '../../utility/intlMessages';
import { ButtonWrapper } from './styles';

const { Option } = Select;
let searchText = '';

class AddReferenceForm extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (prevState.resourceData !== nextProps.resourceData) {
      return {
        resourceData: nextProps.resourceData,
        data: nextProps.resourceData.filter(data => {
          return data[nextProps.filterProp].toLowerCase().search(searchText) > -1;
        }),
      };
    }
    return {};
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: [],
      fetching: false,
    };
  }

  onSearch = value => {
    if (!value || value === '') {
      return;
    }
    searchText = value.toLowerCase();
    this.setState({
      data: [],
      fetching: true,
    });
    this.props.onSearch(value);
  };

  handleChange = value => {
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  };

  addReference = () => {
    const { resourceData, addReference } = this.props;
    const { value } = this.state;
    addReference(_.intersectionWith(resourceData, value, (a, b) => a.id === b.key));
    this.setState({
      value: [],
      data: [],
      fetching: false,
    });
  };

  render() {
    const { fetching, data, value } = this.state;
    const { placeholder } = this.props;
    return (
      <Row>
        <Col md={24} xs={24}>
          <Select
            mode="multiple"
            labelInValue
            value={value}
            placeholder={placeholder}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            filterOption={false}
            onSearch={this.onSearch}
            onChange={this.handleChange}
            style={{ width: '100%' }}
          >
            {data.map(d => (
              <Option key={d.id}>{d.name}</Option>
            ))}
          </Select>
        </Col>
        <Col md={20} xs={24} />
        <Col md={4} xs={24}>
          <ButtonWrapper
            disabled={value.length === 0}
            type="primary"
            icon="plus"
            onClick={this.addReference}
          >
            <IntlMessages id="button.add" />
          </ButtonWrapper>
        </Col>
      </Row>
    );
  }
}

AddReferenceForm.propTypes = {
  placeholder: PropTypes.string,
  resourceData: PropTypes.any,
  addReference: PropTypes.func,
  onSearch: PropTypes.func,
};

export default AddReferenceForm;
