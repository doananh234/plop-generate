import React from 'react';
import PropTypes from 'prop-types';
import { TitleWrapper } from './styles';

const Title = props => <TitleWrapper>{props.children}</TitleWrapper>;

Title.propTypes = {
  children: PropTypes.node,
};
export default Title;
