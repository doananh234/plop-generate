import React from 'react';
import PropTypes from 'prop-types';
import { Spin, List } from 'antd';
import Title from '../../common/Title';
import { ImageWrapper } from './styles';
import { getRecordData } from '../../../helpers/Tools';

const RestImageField = props => {
  const { record, title, source, imageStyle, table } = props;
  if (record) {
    return (
      <div>
        {title && !table && <Title>{title}</Title>}
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={getRecordData(record, source)}
          renderItem={item => (
            <List.Item>
              <ImageWrapper key={item} alt={item} src={item} style={imageStyle} />
            </List.Item>
          )}
        />
      </div>
    );
  }
  return <Spin />;
};

RestImageField.propTypes = {
  table: PropTypes.bool,
  source: PropTypes.string,
  record: PropTypes.object,
  title: PropTypes.string,
  imageStyle: PropTypes.any,
};

export default RestImageField;
