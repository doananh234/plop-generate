import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config';

// export default function({ collapsed, styling }) {
const Logo = ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              <img src={siteConfig.siteIcon} width={'60%'} alt="kuuho logo" />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">
            <img src={siteConfig.siteName} width={'60%'} alt="kuuho logo text" />
          </Link>
        </h3>
      )}
    </div>
  );
};

Logo.propTypes = {
  collapsed: PropTypes.bool,
};

export default Logo;
