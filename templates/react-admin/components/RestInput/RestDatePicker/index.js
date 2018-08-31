import React from 'react';
import PropTypes from 'prop-types';
import FormDatePicker from '../../form/FormDatePicker';
import { getRecordData } from '../../../helpers/Tools';

const RestFormDateInput = props => (
  <FormDatePicker {...props} defaultValue={getRecordData(props.record, props.source)} />
);

RestFormDateInput.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestFormDateInput;
