import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import RestRow from '../../../components/RestLayout/RowLayout';
import ColLayout from '../../../components/RestLayout/ColLayout';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const Filter = props => {
  const elementPropsRow = { align: 'mindle', justify: 'start' };
  const elementPropsCol = {
    lg: 6,
    md: 6,
    sm: 6,
    xs: 24
  };
  return (
    <RestRow {...props} elementProps={elementPropsRow}>
      //content here
    </RestRow>
  );
};

Filter.propTypes = {};

export default Filter;
