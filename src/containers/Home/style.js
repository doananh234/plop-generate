import styled from 'styled-components';
import WithDirection from '../../config/withDirection';

const HomeWrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .viewList {
    flex: 2;
    background: white;
    overflow: auto;
  }
  .divider {
    width: 20px;
  }
  .mapContainer {
    flex: 1;
  }
  .mapView {
    width: 100%;
    height: 100%;
    background: white;
    @media (max-width: 767px) {
    }
  }
`;

export default WithDirection(HomeWrapper);
