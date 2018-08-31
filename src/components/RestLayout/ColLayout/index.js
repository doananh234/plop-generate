import React from 'react';
import PropTypes from 'prop-types';
import { ColWrapper } from './styles';

const RestCol = ({ form, children, elementProps, record }) => {
  return (
    <ColWrapper {...elementProps}>
      {React.Children.map(children, element =>
        React.cloneElement(element, {
          form: form || {},
          key: element.props.source,
          record,
        }),
      )}
    </ColWrapper>
  );
};

RestCol.propTypes = {
  children: PropTypes.node,
  record: PropTypes.object,
  form: PropTypes.object,
  elementProps: PropTypes.object,
};
export default RestCol;
