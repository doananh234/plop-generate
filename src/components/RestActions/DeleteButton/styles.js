import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  border: none;
  background: transparent;
  color: ${props => props.theme.error};
  height: 20px;
  &:hover {
  background: transparent;
  transform: scale(1.1,1.1);
  color: ${props => props.theme.error};
  }
  &:focus {
  background: transparent;
  transform: scale(1.1,1.1);
  color: ${props => props.theme.error};
  }
`;
