import styled from 'styled-components';
import { Card, Icon } from 'antd';

export const IconWrapper = styled(Icon)`
  color: ${props => props.theme.grayscale};
  font-size: 20px;
`;
export const OverlayWrapper = styled(Card)`
  background: rgba(0, 0, 0, 0);
#toggle {
  display: none;
  visibility: hidden;
}
#expand {
  z-index: -1;
  height:auto;
  max-height:0;
  transition: max-height 0.5s;
  color: #FFF;
  position: relative;
}

#expand > * {
  background: white;
  padding: 20px;
  margin: 0px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  transition: height 0.5s;
  background: rgba(0, 0, 0, 0);
  transition: background-color 0.5s;
  color: #FFF;
}

#toggle:checked ~ #expand {
  z-index: 2;
  max-height: 500px;
}
#toggle:checked ~ #expand  > * {
  z-index: 2;
}
#toggle:checked ~ #expand  > * > * {
  z-index: 2;
}

#toggle:checked ~ .overlay {
  background-color: #00000050;
  z-index: 1;
}

#toggle:checked ~ label::before {
}
.btnClose {
  border: 0px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}
`;
