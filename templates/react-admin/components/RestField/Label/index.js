import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { getRecordData } from '../../../helpers/Tools';

const RestLabel = props => {
  return props.record ? (
    <span>
      {props.bold ? (
        <b>{props.format(getRecordData(props.record, props.source))}</b>
      ) : (
        props.format(getRecordData(props.record, props.source))
      )}{' '}
    </span>
  ) : (
    <Spin />
  );
};

RestLabel.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  format: PropTypes.func,
  bold: PropTypes.bool,
};

RestLabel.defaultProps = {
  format: data => data,
};
export default RestLabel;
