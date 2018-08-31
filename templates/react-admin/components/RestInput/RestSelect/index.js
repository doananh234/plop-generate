import React from 'react';
import PropTypes from 'prop-types';
import FormSelect from '../../form/FormSelect';
import { getRecordData } from '../../../helpers/Tools';

const RestSelect = props => (
  <FormSelect {...props} defaultValue={getRecordData(props.record, props.source)} />
);

RestSelect.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestSelect;
