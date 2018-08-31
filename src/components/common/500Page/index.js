import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../assets/images/rob.png';
import IntlMessages from '../../utility/intlMessages';
import FiveZeroZeroStyleWrapper from './style';

const FiveHundred = () => {
  return (
    <FiveZeroZeroStyleWrapper className="iso500Page">
      <div className="iso500Content">
        <h1>
          <IntlMessages id="page500.title" />
        </h1>
        <h3>
          <IntlMessages id="page500.subTitle" />
        </h3>
        <p>
          <IntlMessages id="page500.description" />
        </p>
        <button type="button">
          <Link to="/dashboard">
            <IntlMessages id="page500.backButton" />
          </Link>
        </button>
      </div>

      <div className="iso500Artwork">
        <img alt="#" src={Image} />
      </div>
    </FiveZeroZeroStyleWrapper>
  );
};

export default FiveHundred;
