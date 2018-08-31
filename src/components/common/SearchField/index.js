import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { SearchWrapper } from './styles';

// const { Option } = Select
const Search = props => {
  // const suffix = userName ? <Icon type='close-circle' onClick={this.emitEmpty} /> : null
  return (
    <div>
      <SearchWrapper
        placeholder={props.placeholder}
        suffix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)', fontSize: 30 }} />}
        onChange={props.onChange}
      >
        {/* {['test', 'test1'].map(data => <Option value={data} key={data}>{data}</Option>)} */}
      </SearchWrapper>
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
export default Search;
