import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Tag } from 'antd';
import Title from '../../common/Title';
import { getRecordData } from '../../../helpers/Tools';

const RestTag = props => {
  return props.record ? (
    <div>
      {!props.table && <Title>{props.title}</Title>}
      <Tag color={!props.record[props.source] ? '#f50' : '#2db7f5'}>
        {String(getRecordData(props.record, props.source))}
      </Tag>
    </div>
  ) : (
    <Spin />
  );
};

RestTag.propTypes = {
  table: PropTypes.bool,
  source: PropTypes.string,
  record: PropTypes.object,
  title: PropTypes.string,
};

export default RestTag;
