import React from 'react';
import PropTypes from 'prop-types';

const RestTabPanel = ({ elementProps, children, record, form }) => {
  return (
    <div {...elementProps}>
      {React.Children.map(children, col =>
        React.cloneElement(col, {
          record,
          key: col.props.source,
          form: form || null,
        }),
      )}
    </div>
  );
};

RestTabPanel.propTypes = {
  elementProps: PropTypes.object,
  children: PropTypes.node,
  form: PropTypes.object,
  record: PropTypes.object,
};
export default RestTabPanel;
