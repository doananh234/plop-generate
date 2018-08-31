import React from 'react';
import PropTypes from 'prop-types';
import FormMultiUpload from '../../form/FormMultiUpload';
import { getRecordData } from '../../../helpers/Tools';

const RestFormInput = props => (
  <FormMultiUpload {...props} defaultValue={getRecordData(props.record, props.source)} />
);

RestFormInput.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestFormInput;
