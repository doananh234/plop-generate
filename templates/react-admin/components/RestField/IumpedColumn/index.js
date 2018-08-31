import React from 'react';
import { map } from 'lodash';
import IntlMessages from '../../utility/intlMessages';

const IumpedColumn = ({ data }) => {
  return map(data, item => (
    <div>
      <IntlMessages id={item.title} />: <b>{item.value}</b>
    </div>
  ));
};

export default IumpedColumn;
