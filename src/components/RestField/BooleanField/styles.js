import styled from 'styled-components';
import { Tag } from 'antd';

export const TrueTag = styled(Tag)`
  color: ${props => props.theme.primary};
`;

export const FalseTag = styled(Tag)`
  color: ${props => props.theme.error};
`;
