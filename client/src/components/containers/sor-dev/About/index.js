import React from 'react';
import { StyledAbout } from './Style';
import { Container } from '../../../layout/Container';
import { Col } from '../../../layout/Col';
import { CTAButton } from '../../AppComponents/CTAButton';

export const About = () => {
  return (
    <StyledAbout>
      {/* <Container width='40%'> */}
      <Col width='92%' padding="6rem 2rem">
      <h1>about SOR <span className="gradient-color4">DEV</span></h1>
      <h4>full-stack web and mobile development agency</h4>
      <p>
        Based in Montreal, Canada, SOR DEV is a digital product agency specializing in tailor-made, highly perfomant, software solutions. Passionate about highly innovative, modern-feeling,
        cutting-edge systems, we will bring your project to the finish line.
      </p>
      <br />
      <ul>
        <h4 className=''>Progressive Web App & Mobile App</h4>

        <li>UI/UX Design & mockups</li>
        <li>Interactive & immersive front-end</li>
        <li>Lean and optimized back-end</li>
      </ul>
      <br />
      <ul>
        <h4 className=''>Enterprise-level Software Applications</h4>
        <li>Web automations & automated tasks</li>
        <li>Client portals & Custom Analytics</li>
        <li>Comprehensive Real-Time Dashboards</li>
      </ul>
      {/* </Container> */}
      <CTAButton width='80%' margin='2rem auto' text='any questions? send us a quick note' to='/contact' type='gradient' />
      </Col>
    </StyledAbout>
  );
};
