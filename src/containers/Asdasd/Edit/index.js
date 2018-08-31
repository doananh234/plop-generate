import React from 'react';
import RestEdit from '../../rest/Edit';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const EditAsdasd = props => (
  <RestEdit {...props} showModal resource="asdasd">
    <RestFormInput source="undefined" title="undefined" />
  </RestEdit>
);

export default EditAsdasd;
