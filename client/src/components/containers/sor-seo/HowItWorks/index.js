import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { StyledHowItWorks } from './Style';
import LogoAnimation from '../../sor-dev/LogoAnimation';

import { motion } from 'framer-motion';
import { Container } from '../../../layouts/Container';
// import { variants1 } from '../../../utils/animationVariants'

import H1 from '../../../bp-components/H1';

const variants1 = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 1,
    };
  },
  center: () => {
    return {
      zIndex: 2,
      x: 0,
      opacity: 1,
    };
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
    };
  },
};

export const HowItWorks = () => {
  return (
    <motion.div
      variants={variants1}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}>
      <StyledHowItWorks>
        <Helmet>
          <title>SOR SEO | Account-based Experience</title>
          <meta name='description' content='A React.js Boilerplate application homepage' />
        </Helmet>
        <LogoAnimation branchName='SEO' mode='dark' />
        <h2>This page is currently under development, please try again later.</h2>

        {/* <Container>
          <div>
            <LogoAnimation branchName='SEO' />
            <H1>Systematically engage new in-market accounts, otherwise inaccessible</H1>
            <p>Next-gen Account Engagement for Complex B2b Sales Cycles</p>
          </div>
          <div>
            <h2>A streamlined process</h2>
            <p>Done-for-you, seamlessly integrated, next-gen sales process</p>
            <ul>
              <li>we identify your buying committee and build you a comprehensive target account list</li>
              <li>we systematically "unlock" and engage your target accounts throughout time</li>
              <li>we engage and nurture target accounts, and send the warm leads to your sales team via email</li>
              <li>
                once the prospecting and first engagement phase is done, we send the complete target account list to your sales team, to effectively "follow up on your recent LinkedIn conversation".
              </li>
            </ul>
          </div>
          <Link to='/resources' className='main-btn'>
            Resources
          </Link>
        </Container> */}
      </StyledHowItWorks>
    </motion.div>
  );
};
