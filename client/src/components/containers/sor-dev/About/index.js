import React from 'react';
import { StyledAbout } from './Style';
import { Container } from '../../../layouts/Container';

export const About = () => {
  return (
    <StyledAbout>
      <Container width='40%'>
        <h1>About SOR DEV</h1>
        <p>
          Based in Montreal, Canada, SOR DEV is a digital product agency specializing in tailor-made, highly perfomant, software solutions. We're passionate about highly innovative, modern-feeling,
          cutting-edge systems. Please find below our main types of deliverables.
        </p>
        <br />
        <ul>
          <h4 className='gradient-color2'>Progressive Web App & Mobile App</h4>

          <li>UI/UX Design & mockups</li>
          <li>Interactive & immersive front-end</li>
          <li>Lean and optimized back-end</li>
        </ul>
        <br />
        <ul>
          <h4 className='gradient-color'>Enterprise-level Software Applications</h4>
          <li>Web automations & automated tasks</li>
          <li>Client portals & Custom Analytics</li>
          <li>Comprehensive Real-Time Dashboards</li>
        </ul>
      </Container>
    </StyledAbout>
  );
};
