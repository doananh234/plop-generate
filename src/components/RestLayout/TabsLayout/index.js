import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const RestTabs = props => {
  return (
    <Tabs {...props.elementProps}>
      {React.Children.map(props.children, (tabPannel, index) => (
        <TabPane key={`col${index}`} {...tabPannel.props.elementProps}>
          {React.cloneElement(tabPannel, {
            record: props.record,
            form: props.form ? props.form : null,
          })}
        </TabPane>
      ))}
    </Tabs>
  );
};

RestTabs.propTypes = {
  elementProps: PropTypes.object,
  children: PropTypes.node,
  form: PropTypes.object,
};
export default RestTabs;
