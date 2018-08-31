import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { getRecordData } from '../../../helpers/Tools';

const RestSwitch = props => {
  return <Switch checked={getRecordData(props.record, props.source)} onChange={props.onChange} />;
};

RestSwitch.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  onChange: PropTypes.func,
};

RestSwitch.defaultProps = {
  format: data => data,
};
export default RestSwitch;
