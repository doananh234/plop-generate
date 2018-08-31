import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Spin } from 'antd';
import { ImageWrapper } from './styles';
import { getRecordData } from '../../../helpers/Tools';

const RestImageField = props => {
  if (props.record) {
    return props.type === 'avatar' ? (
      <Avatar
        alt={getRecordData(props.record, props.source)}
        src={getRecordData(props.record, props.source)}
      />
    ) : (
      <ImageWrapper
        {...props}
        alt={getRecordData(props.record, props.source)}
        src={getRecordData(props.record, props.source)}
      />
    );
  }
  return <Spin />;
};

RestImageField.propTypes = {
  type: PropTypes.string,
  source: PropTypes.string,
  record: PropTypes.object,
};
export default RestImageField;
