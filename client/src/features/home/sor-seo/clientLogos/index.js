import React from 'react';
import { Link } from 'react-router-dom';

import { WhistLawLongLogo as WhistlawLogo } from '../../../../app/assets/icons/whistlawLongLogo'
import image1 from '../../../../app/assets/imgs/exia-logo.png';
import image2 from '../../../../app/assets/imgs/swift-logo.png';
import image3 from '../../../../app/assets/imgs/mc2-logo2.png';
import image4 from '../../../../app/assets/imgs/s3-logo.jpg';
import image5 from '../../../../app/assets/imgs/siimin-logo.jpg';
import image6 from '../../../../app/assets/imgs/baytaq-logo-mod.png';
import image7 from '../../../../app/assets/imgs/whistlawLogo.png';
import image8 from '../../../../app/assets/imgs/packmartLogo.png';
import image9 from '../../../../app/assets/imgs/exia-logo.png';


import { Layout } from './Style';

export const ClientLogos = () => {
  return (
    <Layout>

      <div className='client-group-boxes'>
        <div className='client-logo-box'>
          <WhistlawLogo long={false} />
        </div>

        <div className='client-logo-box'>
          <img src={image6} alt='' />
        </div>

        <div className='client-logo-box'>
          <img src={image8} alt='' />
        </div>

        <div className='client-logo-box'>
          <img src={image2} alt='' />
        </div>

        <div className='client-logo-box'>
          <img src={image9} alt='' />
        </div>

        <div className='client-logo-box'>
          <img src={image3} alt='' />
        </div>

        <div className='client-logo-box'>
          <img src={image4} alt='' />
        </div>

        <div className='client-logo-box'>
          <img src={image5} alt='' />
        </div>
      </div>
    </Layout>
  );
};
