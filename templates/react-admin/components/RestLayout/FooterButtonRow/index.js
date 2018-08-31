import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { ButtonWrapper } from './styles';
import IntlMessages from '../../utility/intlMessages';

const ButtonRow = props => {
  const { loading, onBack, handleSubmit, type, showModal } = props;

  return (
    <Row gutter={8} type="flex" justify="end">
      <Col lg={showModal ? 6 : 4} md={6} sm={12} xs={24}>
        <ButtonWrapper
          onClick={() => {
            handleSubmit();
          }}
          type="primary"
          loading={loading}
        >
          {<IntlMessages id={type === 'create' ? 'button.create' : 'button.save'} />}
        </ButtonWrapper>
      </Col>
      <Col md={0} sm={0} xs={24} />
      <Col lg={showModal ? 6 : 4} md={6} sm={12} xs={24}>
        <ButtonWrapper
          onClick={() => {
            onBack();
          }}
        >
          {<IntlMessages id="button.cancel" />}
        </ButtonWrapper>
      </Col>
    </Row>
  );
};

ButtonRow.propTypes = {
  onBack: PropTypes.func,
  showModal: PropTypes.bool,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  type: PropTypes.oneOf(['create', 'edit']),
};

ButtonRow.defaultProps = {
  type: 'edit',
};
export default ButtonRow;
