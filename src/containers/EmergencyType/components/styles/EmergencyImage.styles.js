import styled from 'styled-components';

export const IconImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  .anticon:before {
    display: block;
    font-family: 'anticon', 'smartSOS' !important;
  }
  .anticon:after {
    display: block;
    font-family: 'anticon', 'smartSOS' !important;
  }
  .btnIconBGColor {
    text-align: left;
  }
  .iconBorder {
    width: 220px;
    height: 220px;
    border-radius: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }
  .infoContent {
    padding: 5px;
  }
`;
