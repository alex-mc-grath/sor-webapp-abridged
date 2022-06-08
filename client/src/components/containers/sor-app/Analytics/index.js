import React from 'react';
import { StyledAnalytics } from './Style';

import linkedinProfileImg from '../../../../media/img/person1business.png';

export const Analytics = () => {
  return (
    <StyledAnalytics>
      <div className='upper-container'>
        <h1>Campaign Analytics</h1>
        <div className='flex-container'>
          <div className='campaign-details'>
            <div className='detail-group'>
              <p className='key'>campaign:</p>
              <p className='value'>First Campaign</p>
            </div>
            <div className='detail-group'>
              <p className='key'>client:</p>
              <p className='value'>MC2 Consilium</p>
            </div>

            <div className='detail-badges'>
              <div className='employee-count'>
                <i class='fa-solid fa-users'></i> 10 - 1 000
              </div>
              <div className='geolocation'>
                <i class='fa-solid fa-earth-americas'></i> Montreal, QC
              </div>
              <div className='employee-count'>
                <i class='fa-solid fa-buildings'></i> Software Companies
              </div>
            </div>
          </div>
          <div className='campaign-overview-analytics'>
            {/* //ring */}

            {/* // user profile thumb */}
            <div className='user-profile-thumb'>
              <img src={linkedinProfileImg} alt='' />
              <span className='name'>Patrick Vernon</span>
              <span className='title'>president</span>
            </div>

            {/* // results % audience spread */}
            <ul>
              <li>4%&nbsp;&nbsp; managing partners</li>
              <li>23%&nbsp;&nbsp; partners</li>
              <li>35%&nbsp;&nbsp; managing directors</li>
              <li>24%&nbsp;&nbsp; vc investor</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='lower-container'>
        <ul className='nav-menu'>
          <li>Initial Campaign Macro filters</li>
          <li className='active'>Current Period Stats</li>
          <li>Campaign Overview</li>
          <li>Messages</li>
        </ul>
        <div className='displayed-ui-element'></div>
        {/* Initial Campaign Macro filters

            Current Period Stats

            Campaign Overview


            Messages */}
      </div>
    </StyledAnalytics>
  );
};
