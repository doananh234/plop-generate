import React from 'react';
import { Spin } from 'antd';
import { Container } from './styles';

const LoadingComponent = () => (
  <Container>
    <Spin />
  </Container>
  );

export default LoadingComponent;
