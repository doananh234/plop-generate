import React, { Component } from 'react';
import { InputSearch } from '../../uielements/input';

class Searchbar extends Component {
  componentDidMount() {
    setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {
        console.error(e);
      }
    }, 200);
  }

  render() {
    return <InputSearch id="InputTopbarSearch" placeholder="Enter search text" />;
  }
}

export default Searchbar;
