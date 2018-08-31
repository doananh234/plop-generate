import styled from 'styled-components';
import { List } from 'antd';
import { palette } from 'styled-theme';

const EmergencyItemWrapper = styled(List.Item)`
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  .icon {
    font-size: 50px;
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 10px;
  }
  .title {
    font-weight: bold;
    color: ${palette('text', 0)};
  }
  .subTitle {
    margin-top: 5px;
    font-weight: 400;
    color: ${palette('text', 1)};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 20px; /* fallback */
    max-height: 32px; /* fallback */
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  .description {
    margin-top: 10px;
    color: ${palette('text', 2)};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 20px; /* fallback */
    max-height: 32px; /* fallback */
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  ,
  .row {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .viewRight {
  }
  .viewCenter {
    flex: 1;
  }
  .viewLeft {
    width: 110px;
    height: 110px;
  }
`;

export default EmergencyItemWrapper;
