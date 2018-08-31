import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import MarkerInfoBoxWrapper from './MarkerInfoBox.style';
import { formatDateTime } from '../../../utils/textUtils';
import StatusLabel from '../../../containers/Emergency/components/StatusLabel';
import { formatSendCaseMessage } from '../../../helpers/Tools';

const EmergencyItem = ({ item }) => {
  if (!item.emergencyType) return <span />;
  return (
    <MarkerInfoBoxWrapper>
      <div className="row">
        <div className="viewLeft">
          <Icon
            type={item.emergencyType.iconName}
            className="icon"
            style={{ background: item.emergencyType.iconBackgroundColor }}
          />
        </div>
        <div className="viewCenter">
          <div>{formatDateTime(item.reportedTime)}</div>
          <StatusLabel record={item} />
          <div className="title">{item.senderName}</div>
          <div className="subTitle">
            <Icon type="ic-showonmap" /> {item.address}
          </div>
          <div className="subTitle">
            <Icon type="ic-helpcall-2" /> {item.senderPhoneNumber}
          </div>
        </div>
      </div>
      <div className="description">{formatSendCaseMessage(item)}</div>
    </MarkerInfoBoxWrapper>
  );
};
EmergencyItem.propTypes = {
  item: PropTypes.object,
};

export default EmergencyItem;
