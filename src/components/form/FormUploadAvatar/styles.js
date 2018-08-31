import styled from 'styled-components';
import { Upload } from 'antd';

export const UploadWrapper = styled(Upload)`
  .ant-upload {
    width: 100%;
    height: auto;
    font-size: 12px;
    .ant-upload {
      padding: 0px;
    }
  }
`;

export const ImgWrapper = styled('img')`
    width: 100%;
    height: auto;
`;
