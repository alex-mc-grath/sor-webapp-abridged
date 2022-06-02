import React from 'react';
import { StyledTechStack } from './Style';
import {Container} from '../../../layouts/Container'

export const TechStack = () => {
  return (
    <StyledTechStack>
      <Container>
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
        <p className="gradient-color2">entreprise-level systems</p>
        <div className="gradient-line"></div>
        <ul>
          <li>1 modern progressive web applications (PWA)</li>
          <li> 2 advanced web automations systems</li>
          <li> 3 immersive/innovative client experience (b2b)</li>
        </ul>
        </div>
      </Container>
{/* 
      <div>
        <h2>our tech stack</h2>
        <p className="gradient-color2">Progress Web App</p>
        <div className="gradient-line"></div>
        <ul>
          <li>MERN Stack (MongoDb, Express, React, Node)</li>
          <li>Redux, Context</li>
          <li>Server-side: AWS, Azure, Heroku</li>
        </ul>
      </div> */}
    </StyledTechStack>
  );
};
