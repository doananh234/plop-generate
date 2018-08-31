import React from 'react';
import PropTypes from 'prop-types';
import FormUploadAvatar from '../../form/FormUploadAvatar';
import { getRecordData } from '../../../helpers/Tools';

const RestFormInput = props => (
  <FormUploadAvatar {...props} defaultValue={getRecordData(props.record, props.source)} />
);

RestFormInput.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestFormInput;
