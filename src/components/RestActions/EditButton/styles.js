import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  border: none;
  color: ${props => props.theme.primary};
  height: 20px;
  background: transparent;
  &:hover {
  background: transparent;
  transform: scale(1.1,1.1);
  color: ${props => props.theme.primary};
  }
  &:focus {
  background: transparent;
  transform: scale(1.1,1.1);
  color: ${props => props.theme.primary};
  }
`;
