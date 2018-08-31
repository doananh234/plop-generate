import React from 'react';
import PropTypes from 'prop-types';
import { BoxTitle, BoxSubTitle } from './style';

const BoxTitleUI = props => {
  return (
    <div>
      {props.title ? (
        <BoxTitle className="isoBoxTitle">
          {' '}
          {props.title}
          {' '}
        </BoxTitle>
) : ''}
      {props.subtitle ? (
        <BoxSubTitle className="isoBoxSubTitle">
          {' '}
          {props.subtitle}
          {' '}
        </BoxSubTitle>
      ) : (
        ''
      )}
    </div>
  );
};
BoxTitleUI.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default BoxTitleUI;
