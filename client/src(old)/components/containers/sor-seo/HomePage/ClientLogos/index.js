import React from 'react';
import { Link } from 'react-router-dom';

import { WhistlawLogo } from '../../.././../../app/IconsAndSvgs/WhistawLogo';
import image1 from '../../../../../media/img/exia-logo.png';
import image2 from '../../../../../media/img/swift-logo.png';
import image3 from '../../../../../media/img/mc2-logo2.png';
import image4 from '../../../../../media/img/s3-logo.jpg';
import image5 from '../../../../../media/img/siimin-logo.jpg';
import image6 from '../../../../../media/img/baytaq-logo-mod.png';
import image7 from '../../../../../media/img/whistlaw.png';
import image8 from '../../../../../media/img/packmartLogo.png';
import image9 from '../../../../../media/img/exia-logo.png';
// import image5 from '../../../../../media/img/siimin-logo.jpg';
// import image5 from '../../../../../media/img/siimin-logo.jpg';
// import image5 from '../../../../../media/img/siimin-logo.jpg';

import { StyledClientLogos } from './Style';

export const ClientLogos = () => {
  return (
    <StyledClientLogos>
      {/* <div data-aos='fade-up'>
<h2>Trusted by some of the world's most forward-thinking B2B companies</h2> 
 <div className='btn-box'>
          <Link to='/account-based-marketing' className=''>
            <span>More on Account-based Marketing</span>
          </Link>
          <Link to='/contact' className=''>
            <span>Contact Us</span>
          </Link>
        </div> 
      </div> */}
      <div className='client-group-boxes'>
        <div className='client-logo-box'>
          <WhistlawLogo />
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
    </StyledClientLogos>
  );
};
