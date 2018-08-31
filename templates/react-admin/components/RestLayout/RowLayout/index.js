import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

const RestRow = ({ elementProps, children, record, form }) => {
  return (
    <Row {...elementProps}>
      {React.Children.map(children, col =>
        React.cloneElement(col, {
          form: form || {},
          record,
        }),
      )}
    </Row>
  );
};

RestRow.propTypes = {
  elementProps: PropTypes.object,
  children: PropTypes.node,
  record: PropTypes.object,
  form: PropTypes.object,
};

export default RestRow;
