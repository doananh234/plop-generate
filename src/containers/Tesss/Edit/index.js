import React from 'react';
import RestEdit from '../../rest/Edit';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const EditTesss = props => (
  <RestEdit {...props} showModal resource="tesss">
    <RestFormInput source="ss" title="ss" />
    <RestFormInput source="vvcv" title="vvcv" />
  </RestEdit>
);

export default EditTesss;
