import React from 'react';
import PropTypes from 'prop-types';
import FormSelectMulti from '../../form/FormSelectMulti';
import { getRecordData } from '../../../helpers/Tools';

const RestSelect = props => (
  <FormSelectMulti {...props} defaultValue={getRecordData(props.record, props.source)} />
);

RestSelect.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};
export default RestSelect;
