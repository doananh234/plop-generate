import React from 'react';
import PropTypes from 'prop-types';
import { GroupWrapper } from './styles';

const ActionGroup = ({
  children,
  elementProps,
  gotoEditPage,
  gotoShowPage,
  deleteItem,
  record,
}) => {
  return (
    <GroupWrapper {...elementProps}>
      <span style={{ flex: 1 }} />
      {React.Children.map(children, element =>
        React.cloneElement(element, {
          gotoEditPage,
          gotoShowPage,
          deleteItem,
          record,
        }),
      )}
    </GroupWrapper>
  );
};

ActionGroup.propTypes = {
  children: PropTypes.node,
  elementProps: PropTypes.object,
  record: PropTypes.object,
  gotoEditPage: PropTypes.func,
  gotoShowPage: PropTypes.func,
  deleteItem: PropTypes.func,
};

ActionGroup.defaultProps = {
  source: 'group',
};
export default ActionGroup;
