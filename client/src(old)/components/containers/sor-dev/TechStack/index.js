import React from 'react';
import { Link } from 'react-router-dom';
import { StyledTechStack } from './Style';
import { Container } from '../../../layout/Container';

import { SorSeoSvg } from '../../sor-seo/HomePage/SorSeoSvg';

import image from '../../../../media/img/sor-dev/11(2).jpg';
import LogoAnimation from '../LogoAnimation';
import { Col } from '../../../layout/Col';
import { GridRow } from '../../../layout/GridRow';


import logo1 from '../../../../media/img/dev-tech-logos/react.png';
import logo2 from '../../../../media/img/dev-tech-logos/nodejs.svg';
import logo3 from '../../../../media/img/dev-tech-logos/express.png';
import logo4 from '../../../../media/img/dev-tech-logos/mongodb.png';
import logo5 from '../../../../media/img/dev-tech-logos/heroku.png';
import logo6 from '../../../../media/img/dev-tech-logos/aws.png';
import logo7 from '../../../../media/img/dev-tech-logos/azure.png';
import logo8 from '../../../../media/img/dev-tech-logos/redux.png';
import logo9 from '../../../../media/img/dev-tech-logos/graphql.png';
import { CTAButton } from '../../AppComponents/CTAButton';

export const TechStack = () => {
  return (
    <StyledTechStack img={image}>
      {/* <BubbleMenu onceToggled={() => setShowNav(!showNav)} showNav={showNav} linkOptions={['/', '/app/login', '/how-it-works']} textOptions={['Back', 'Growth']}/> */}
      <Container>
        {/* // add icons?  */}
        {/* add button "see demo reels" */}
<Col width='80%'>
    <h1>our tech stack</h1>
    <p>With our modern stack, proprietary library and cutting-edge tools, we're more capable than ever - we're delighted to create, and happy to serve.</p>
</Col>
        <GridRow col="3" className='logos'>
    <div className="logo-holder">
        <img src={logo1} alt="" />
    </div>
    <div className="logo-holder">
        <img src={logo2} alt="" />
    </div>
    <div className="logo-holder">
        <img src={logo3} alt="" />
    </div>
    <div className="logo-holder">
        <img src={logo4} alt="" />
    </div>
    <div className="logo-holder">
        <img src={logo5} alt="" />
    </div>
    <div className="logo-holder quick-width-fix">
        <img src={logo6} alt="" />
    </div>
    <div className="logo-holder">
        <img src={logo7} alt="" />
    </div>
    <div className="logo-holder">
        <img src={logo8} alt="" />
    </div>
    <div className="logo-holder">
        <img src={logo9} alt="" />
    </div>
        </GridRow>
      <Col align='flex-start'>
        <ul>
          <h3>Frontend</h3>
            <li>React, Next</li>
            <li>Apollo, Redux, Context</li>
            <li>Styled-components</li>
            <li>Our proprietary component library</li>
          </ul>
        <ul>
          <h3>Backend & server</h3>
            <li>GraphQl, Express</li>
            <li>MongoDb, Firebase</li>
            <li>AWS, Azure, Heroku</li>
          </ul>
        <ul>
          <h3>3rd party APIs</h3>
            <li>Paypal, Stripe</li>
            <li>Google Maps, Google Drive, WeChat, </li>
            <li>linearapp.com, DevCharts </li>
          </ul>
          <br />
      <CTAButton width='80%' margin='auto' text='more about SOR DEV' to='/dev/about' type='gradient' />
      </Col>
{/* 

        <div>
          <h2>Our Tech Stack</h2>
          <ul>
            <li>GraphQl, Express</li>
            <li>Apollo, Redux, Context</li>
            <li>MongoDb, Firebase</li>
            <li>AWS, Azure, Heroku</li>
          </ul>
        </div>
        <div>
          <h2>how can we help?</h2>
          <p className='gradient-color2'>entreprise-level systems</p>
          <div className='gradient-line'></div>
          <ul>
            <li>
              <div className='number-style'>1</div> modern progressive web applications (PWA)
            </li>
            <li>
              <div className='number-style'>2</div> advanced web automations systems
            </li>
            <li>
              <div className='number-style'>3</div> immersive/innovative client experience (b2b)
            </li>
          </ul>
          <Link to='/about'>About SOR DEV</Link>
          <Link to='/about'>Contact us</Link>
        </div> */}
        {/* <LogoAnimation branchName='DEV' /> */}
      </Container>
    </StyledTechStack>
  );
};
