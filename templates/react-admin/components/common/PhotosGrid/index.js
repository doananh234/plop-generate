import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { ImgWrapper } from './styles';

export default class PhotoCoverflow extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    if (!Array.isArray(data)) {
      return <div>please upload new photo</div>;
    }
    return (
      <Row>
        {data.map(item => (
          <Col xs={24} sm={24} md={6} lg={6}>
            <ImgWrapper src={item} alt={item} />
          </Col>
        ))}
      </Row>
    );
  }
}

PhotoCoverflow.propTypes = {
  data: PropTypes.array,
};
