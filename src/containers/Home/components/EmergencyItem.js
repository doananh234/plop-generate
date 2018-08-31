import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import EmergencyItemWrapper from './EmergencyItem.style';
import { formatDateTime } from '../../../utils/textUtils';
import StatusLabel from '../../Emergency/components/StatusLabel';
import { formatSendCaseMessage } from '../../../helpers/Tools';

const EmergencyItem = ({ item, onClick, isSelected, refFunc }) => {
  if (!item.emergencyType) return <span />;
  return (
    <EmergencyItemWrapper
      onClick={onClick}
      style={{ background: isSelected ? 'rgba(0, 0, 0, 0.2)' : 'white' }}
    >
      <div ref={ref => refFunc(ref)} className="row">
        <div className="viewLeft">
          <Icon
            type={item.emergencyType.iconName}
            className="icon"
            style={{ background: item.emergencyType.iconBackgroundColor }}
          />
        </div>
        <div className="viewCenter">
          <div className="title">{item.senderName}</div>
          <div className="subTitle">
            <Icon type="ic-showonmap" /> {item.address}
          </div>
          <div className="subTitle">
            <Icon type="ic-helpcall-2" /> {item.senderPhoneNumber}
          </div>

          <div className="description">{formatSendCaseMessage(item)}</div>
        </div>
        <div className="viewRight">
          <div>
            <p>{formatDateTime(item.reportedTime)}</p>
            <StatusLabel record={item} />
          </div>
        </div>
      </div>
    </EmergencyItemWrapper>
  );
};
EmergencyItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  refFunc: PropTypes.func,
};

export default EmergencyItem;
