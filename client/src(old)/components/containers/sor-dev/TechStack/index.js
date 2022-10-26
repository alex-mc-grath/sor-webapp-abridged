import React from 'react';
import { Link } from 'react-router-dom';
import { StyledTechStack } from './Style';
import { Container } from '../../../layouts/Container';

import { SorSeoSvg } from '../../sor-seo/HomePage/SorSeoSvg';

import image from '../../../../media/img/sor-dev/11(2).jpg';
import LogoAnimation from '../LogoAnimation';

export const TechStack = () => {
  return (
    <StyledTechStack img={image}>
      {/* <BubbleMenu onceToggled={() => setShowNav(!showNav)} showNav={showNav} linkOptions={['/', '/app/login', '/how-it-works']} textOptions={['Back', 'Growth']}/> */}
      <Container>
        {/* // add icons?  */}
        {/* add button "see demo reels" */}
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
          <Link to='/'>See Demo Reel</Link>
        </div>
        <LogoAnimation branchName='DEV' />
      </Container>
    </StyledTechStack>
  );
};
