import styled from 'styled-components';
import { palette } from 'styled-theme';

const MarkerInfoBoxWrapper = styled.div`
  width: 300px;
  flex-direction: column;
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
  }
  .description {
    margin-top: 10px;
    color: ${palette('text', 2)};
  }
  ,
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .viewCenter {
    flex: 1;
  }
  .viewLeft {
    width: 110px;
    height: 110px;
  }
`;

export default MarkerInfoBoxWrapper;
