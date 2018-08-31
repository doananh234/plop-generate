import React from 'react';
import PropTypes from 'prop-types';
import FormSwitch from '../../form/FormSwitch';
import { getRecordData } from '../../../helpers/Tools';

const RestFormSwitch = props => (
  <FormSwitch
    {...props}
    defaultValue={props.defaultValue || getRecordData(props.record, props.source)}
  />
);

RestFormSwitch.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.string,
};
export default RestFormSwitch;
