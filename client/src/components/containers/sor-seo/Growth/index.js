import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { StyledHowItWorks } from './Style';
import LogoAnimation from '../../sor-dev/LogoAnimation';

import { motion } from 'framer-motion';
import { Container } from '../../../layout/Container';
// import { variants1 } from '../../../utils/animationVariants'

import H1 from '../../../layout/bp-components/H1';
import BubbleMenu from '../../../layout/BubbleMenu';

import ctaImage from '../../../../media/img/unsplash2.jpg';
import blendingInImage from '../../../../media/img/unsplash5.jpg';
import mimicHumanImage from '../../../../media/img/unsplash4.jpg';
import { ClientLogos } from './ClientLogos';
import { ComparativeTable } from '../ComparativeTable';
import { Section } from '../../../layout/Section';
import {Col} from '../../../layout/Col'
import { CTAButton } from '../../AppComponents/CTAButton';
import Marquee from '../../../layout/HorizontalTextMarquee';


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

export const Growth = () => {
  const [showNav, setShowNav] = useState(false);

  const box = useRef();

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    setShowNav(false);
    // console.log(box.current);
    // boxes.forEach((box) => {
    //   const boxTop = box.getBoundingClientRect().top;

    //   if (boxTop < triggerBottom) {
    //     box.classList.add('show');
    //   } else {
    //     box.classList.remove('show');
    //   }
    // });
  }

  useEffect(() => {
    window.addEventListener('scroll', checkBoxes);
  }, []);

  //  Sor seo has developed a solution to carefully automate 75-90% of the heavy lifting initially done by your Sales to even get to talk to new opportunities

  return (
    // <motion.div
    //   variants={variants1}
    //   initial='enter'
    //   animate='center'
    //   exit='exit'
    //   transition={{
    //     x: { type: 'spring', stiffness: 300, damping: 30 },
    //     opacity: { duration: 0.2 },
    //   }}>
      <StyledHowItWorks>
        <Helmet>
          <title>SOR SEO | Account-based Experience</title>
          <meta name='description' content='Account-based Experience, demand generation' />
        </Helmet>
        {/* <BubbleMenu onceToggled={() => setShowNav(!showNav)} showNav={showNav} linkOptions={['/', '/app/login', '/dev']} textOptions={['Back', 'DEV']} /> */}


          <Section className='hero'>
              <LogoAnimation branchName='SEO' />
              {/* <h1>There's touch of organic behind every interaction</h1> */}
              <h1>when you start recreating something organic,<br/> it stops being organic</h1>
          </Section>


        {/* 2 IDEAS : SKEW BG IMG ON MOUSE MOVE AND 2) APPEAR SECTION LEFT AND RIGHT LIKE IN 50IN50 PROJECT */}
        {/* <Container type='large' className='special-container'> */}
          
          <Section className='blending-in' ref={box}>
          <div className='blendingIn-Image' />
            <Col>
              <h2>Tired of blending in?</h2>
              <p>
                {/* Engagement */}
                Discovering new opportunities can be done in many ways. But in our business the way you do things matter. All our campaigns are built onto our 3 core values:
              </p>
              <Col>
                <span className="bold l">
                It has to be <span className="gradient-color4">authentic.</span>
                <br />
                It has to be <span className="gradient-color4">humble.</span>
                <br />
                And it has to be <span className="gradient-color4">light.</span>
                </span>
                </Col>
                
                {/* <br /> */}
            </Col>
          </Section>

          <Section height='50vh' className='authenticity' ref={box}>
            <Col marginBottom='3rem'>
              <h2>Authenticity at the forefront</h2>
              <p>
                The most important thing to keep in mind when automating actions is that the end goal is not to "trick" people into doing actions they wouldn't otherwise have done, it's to sparkle a
                first interaction in a way that feels natural. It puts you on their map, it reaches out professionally, and when well done it opens a direct communication channel.
              </p>

              <CTAButton text='see how we do it' to='/resources' />
              {/* <Link to='/resources' className='main-btn'>
                see how we do it &nbsp;<i class='fa-thin fa-arrow-right'></i>
              </Link> */}
            </Col>
          </Section>

          <Section className='mimicHuman' ref={box}>
            <img src={mimicHumanImage} alt='' width={'100%'} />
            <Col>
              <h2>Time your messages and actions to avoid spam-like behaviours</h2>
              {/* <p>Non-invasive, non-agressive approach</p> */}
              <p>
                Our number one key success ingredient is a systematized approach:
                {/* (could have an iceberg stats popping in as you scroll - maybe strate par strate could be a nice effect) */}
                <ul>
                  <li>you don't want to spam LinkedIn with requests</li>
                  <li>you don't want to spam LinkedIn with anything, in fact</li>
                  <li>but LinkedIn has 810M professionals and 58M companies listed,</li>
                  <li>
                    so the way to systematize things is to do thorough data manipulation, multiple filters, manual filters and then and only then, automate a process with this highly epurated Target
                    Account List
                  </li>
                </ul>
              </p>
              {/* <Link to='/resources' className='main-btn'>
                <i class='fa-thin fa-arrow-up-left'></i> &nbsp; Resources
              </Link> */}
              <CTAButton text="resources" to='/resources' />
            </Col>
          </Section>

          <ComparativeTable item={'item1'} itemDescription={'itemDesc 1'} />

          {/* <Col width="85%">
          <h4 className="gradient-color4">organic means alive, it means colorful, healthy and vibrant. organic encompasses all scenarios. it can be reassuring, comforting, like the warmth of an old friend. its exploration can be somewhat unpredictable, with potentially damaging obstacles and its growth is definitely asymetical. thus it is unique.</h4>
          </Col> */}

          {/* call to action - with image or short video (need to have at least one short video effect) */}
          {/* The easiest way to grow your sales pipeline */}
          {/* Elevate your organic marketing, and see your growth SOR
          Reach buying committees with full insights
          Ready-to-go, */}

          {/* <Marquee /> */}

          <Section height="60vh" className='cta bg-gradient'>
            <Col width="80%">
              <h2>Get started with <span className="gradient-color4 lineBreakMobile">SOR SEO</span></h2>
              <CTAButton text="resources" to="/resources" type='gradient' />
            </Col>
          </Section> 
      </StyledHowItWorks>
    // </motion.div>
  );
};
