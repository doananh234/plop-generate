import React from 'react';
import PropTypes from 'prop-types';
import FormInputNumber from '../../form/FormInputNumber';
import { getRecordData } from '../../../helpers/Tools';

const RestFormInputNumber = props => (
  <FormInputNumber {...props} defaultValue={getRecordData(props.record, props.source)} />
);

RestFormInputNumber.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestFormInputNumber;
