/*
 * Dev HomePage
 *
 * This is the dev homepage, at the '/dev/' route
 */

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { WorkingCarousel } from '../../../layouts/WorkingCarousel';
import { StyledHomepage } from './Style';
import { Container } from '../../../layouts/Container';

import { motion } from 'framer-motion';

import LogoAnimation from '../LogoAnimation';

import { SorSeoSvg } from '../../sor-seo/HomePage/SorSeoSvg';
import { BubbleMenu } from '../../../layouts/BubbleMenu';

import image1 from '../../../../media/img/sor-dev/11.png';
import image2 from '../../../../media/img/sor-dev/22.jpg';
import image3 from '../../../../media/img/sor-dev/33aab.jpg';

const sliderImgs = [image1, image2, image3];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 1,
    };
  },
  center: {
    zIndex: 2,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
    };
  },
};

export const DevHomePage = () => {
  // option 1 mettre StyledHomepage comme page wrapper en article
  // option 2 laisser article toujours

  const [showNav, setShowNav] = useState(false);
  const [viewDemoBtn, setViewDemoBtn] = useState(false);

  setTimeout(() => setViewDemoBtn(true), 2000);

  return (
    <motion.div
      variants={variants}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}>
      <StyledHomepage>
        <Helmet>
          <title>SOR DEV | Modern Web Experiences</title>
          <meta name='description' content='software development needs - modern web experiences - MERN Stack' />
        </Helmet>
        <BubbleMenu onceToggled={() => setShowNav(!showNav)} showNav={showNav} linkOptions={['/', '/app/login', '/growth']} textOptions={['Back', 'Growth']} />
        <Container>
          <div className='flex-column'>
            {/* <Link to="/" style={{ color: 'white' }}>
              <span id="back">BACK</span>
              <SorSeoSvg variant="uno" />
            </Link> */}
            <div>
              <h1>Next-gen digital solutions for B2B SAAS industry leaders</h1>
              <p>Top-tier application development</p>
              <p className='artsy'>WEB | MOBILE</p>
            </div>
          </div>

          <LogoAnimation branchName='DEV' />
        </Container>
        <WorkingCarousel sliderImgs={sliderImgs} />

        {/* {viewDemoBtn && (
          <Link to='/dev/demo-reel' className='bottom-page-button'>
            view demo reel
          </Link>
        )} */}
      </StyledHomepage>
    </motion.div>
  );
};
