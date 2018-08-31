import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../common/TextField';

const RestTextField = props =>
  props.record ? <TextField {...props} value={props.record[props.source]} /> : null;

RestTextField.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};
export default RestTextField;
