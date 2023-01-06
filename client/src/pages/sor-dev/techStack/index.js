import React from 'react';
import { Link } from 'react-router-dom';
import { StyledTechStack } from './Style';
import { Container } from '../../../_boilerplate/layouts/Container';

import { SorSeoSvg } from '../../../App/assets/icons/SorSeoSvg';

import image from '../../../App/assets/imgs/dev-tech-logos/11(2).jpg';

import { Col } from '../../../_boilerplate/layouts/Col';
import { GridRow } from '../../../_boilerplate/layouts/GridRow';


import logo1 from '../../../App/assets/imgs/dev-tech-logos/react.png';
import logo2 from '../../../App/assets/imgs/dev-tech-logos/nodejs.svg';
import logo3 from '../../../App/assets/imgs/dev-tech-logos/express.png';
import logo4 from '../../../App/assets/imgs/dev-tech-logos/mongodb.png';
import logo5 from '../../../App/assets/imgs/dev-tech-logos/heroku.png';
import logo6 from '../../../App/assets/imgs/dev-tech-logos/aws.png';
import logo7 from '../../../App/assets/imgs/dev-tech-logos/azure.png';
import logo8 from '../../../App/assets/imgs/dev-tech-logos/redux.png';
import logo9 from '../../../App/assets/imgs/dev-tech-logos/graphql.png';

import { MainButton } from '../../../_boilerplate/inputs/MainButton';


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
        <GridRow col="3" margin='1rem 0' mobile>
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
        </GridRow>
        <MainButton margin='2rem auto' text='more about SOR DEV' to='/dev/about' type='gradient' />
        {/* <Link to='/about'>Contact us</Link> */}
        {/* <LogoAnimation branchName='DEV' /> */}
      </Container>
    </StyledTechStack>
  );
};
