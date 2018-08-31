import styled from 'styled-components';
import { palette, font } from 'styled-theme';

const DashAppHolder = styled.div`
  body {
    min-width: 1024px;
  }
  font-family: ${font('primary', 0)};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  input,
  textarea,
  span,
  div,
  img,
  svg {
    &::selection {
      background: ${palette('primary', 0)};
      color: #fff;
    }
  }

  .ant-row:not(.ant-form-item) {
    ${'' /* margin-left: -8px;
    margin-right: -8px; */};
    &:before,
    &:after {
      display: none;
    }
  }

  .ant-row > div {
    ${'' /* padding: 0;
    padding: 0; */};
  }

  .isoLeftRightComponent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .isoCenterComponent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .isoLayoutContentWrapper {
    padding: 30px 20px;
  }
  .anticon:before {
    display: block;
    font-family: 'anticon', 'smartSOS' !important;
  }
  .anticon:after {
    display: block;
    font-family: 'anticon', 'smartSOS' !important;
  }
  button,
  a,
  li,
  input,
  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link,
  .ant-select-selection {
    border-radius: 2px;
  }
  .ant-btn-primary {
    color: #fff;
    background-color: #247ecb;
    border-color: #247ecb;
  }
  .ant-switch-checked {
    background-color: #247ecb;
  }
  .ant-pagination-item-active {
    background-color: #26324b;
    border-color: #26324b;
    a {
      color: #fff;
    }
  }
  .ant-pagination-item:hover {
    background-color: #26324b;
    border-color: #26324b;
    a {
      color: #fff;
    }
  }
`;

export default DashAppHolder;
