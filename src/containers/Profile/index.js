import React from 'react';
import Helmet from 'react-helmet';
import logo from '../../assets/images/logo.svg';
import './index.css';

const App = () => {
  return (
    <div>
      <Helmet
        title="Home Page"
        meta={[
          {
            name: 'description',
            content: 'A React.js Web Base of Enouvo',
          },
        ]}
      />
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
Profile
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
