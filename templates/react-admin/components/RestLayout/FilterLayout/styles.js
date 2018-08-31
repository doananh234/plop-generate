import styled from 'styled-components';
import { Form } from 'antd';

export const FilterFormWrapper = styled(Form)`
  padding: 20px 0 0;
  margin: auto;
  margin-bottom: 20px;
  .filterContainer {
    display: flex;
  }
  .filterContent {
    flex: 1;
    justify-content: flex-end;
  }
  .filterActions {
    margin-top: 4px;
  }
  .border {
  }
  .filterButton {
    margin-left: 10px;
    margin-top: 5px;
  }
  .ant-form-item {
    margin-bottom: 0px;
    margin-right: -1px;
  }
  .ant-form-item-label label {
    color: #757575;
  }
`;
