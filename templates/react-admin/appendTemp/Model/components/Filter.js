import React from 'react';
// import PropTypes from 'prop-types';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const Filter = props => {
  const elementPropsRow = { gutter: 10, align: 'mindle', justify: 'start' };
  const elementPropsCol = {
    lg: 6,
    md: 6,
    sm: 6,
    xs: 24,
  };
  return (
    <RestRow {...props} elementProps={elementPropsRow}>
      //content here
    </RestRow>
  );
};

Filter.propTypes = {};

export default Filter;
