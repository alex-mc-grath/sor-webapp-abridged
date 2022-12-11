/*
 * Dev HomePage
 *
 * This is the dev homepage, at the '/dev/' route
 */

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import { WorkingCarousel } from '../../../layouts/WorkingCarousel';
import { StyledHomepage } from './Style';
import { Container } from '../../../layout/Container';

import { motion } from 'framer-motion';

import LogoAnimation from '../LogoAnimation';

import { SorSeoSvg } from '../../sor-seo/HomePage/SorSeoSvg';
import { BubbleMenu } from '../../../layout/BubbleMenu';
import { Col } from '../../../layout/Col';

import image1 from '../../../../media/img/sor-dev/11.png';
import image2 from '../../../../media/img/sor-dev/22.jpg';
import image3 from '../../../../media/img/sor-dev/33aab.jpg';
import { SliderImg } from './SliderImg';

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
    // <motion.div
    //   variants={variants}
    //   initial='enter'
    //   animate='center'
    //   exit='exit'
    //   transition={{
    //     x: { type: 'spring', stiffness: 300, damping: 30 },
    //     opacity: { duration: 0.2 },
    //   }}>
      <StyledHomepage>
        <Helmet>
          <title>SOR DEV | Modern Web Experiences</title>
          <meta name='description' content='software development needs - modern web experiences - MERN Stack' />
        </Helmet>

          {/* <LogoAnimation branchName='DEV' /> */}
        <Container>
          <Col>
            <div>
              <h1>aesthetic sensitivity<br />working for you</h1>
              <p>next-gen digital solutions</p>
              {/* <h1>Next-gen digital solutions for B2B SAAS industry leaders</h1>
              <p>Top-tier software application development</p> */}
              <p className='artsy'><span className="gradient-color4">WEB</span><span className="vertical-bar">|</span><span className="gradient-color4">MOBILE</span></p>
            </div>
          </Col>

          <Link to='/dev/recent-mern-stack-projects'>
        <SliderImg img={sliderImgs[0]}>
          <h4>recent projects</h4>
          <p>Take a look at our recent work and see if it suits your tech/project needs.</p>
        </SliderImg>
      </Link>
      <Link to='/dev/our-tech' className='card'>
        <SliderImg img={sliderImgs[1]}>
          <h4>our tech stack</h4>
          {/* <p>We use the most recent technologies and framework to build your sophisticated applications.</p> */}
        </SliderImg>
      </Link>
      <Link to='/dev/about' className='card'>
        <SliderImg img={sliderImgs[2]}>
          <h4>about SOR DEV</h4>
          <p>Enterprise-level software solutions, stunning user experiences and lightning speed site performance. Discover what it's like to work with us.</p>
        </SliderImg>
      </Link>

          
        </Container>
        {/* <WorkingCarousel sliderImgs={sliderImgs} /> */}

      </StyledHomepage>
    // </motion.div>
  );
};
