import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { StyledHowItWorks } from './Style';
import LogoAnimation from '../../sor-dev/LogoAnimation';

import { motion } from 'framer-motion';
import { Container } from '../../../layouts/Container';
// import { variants1 } from '../../../utils/animationVariants'

import H1 from '../../../bp-components/H1';
import BubbleMenu from '../../../layouts/BubbleMenu';

import ctaImage from '../../../../media/img/unsplash2.jpg';
import blendingInImage from '../../../../media/img/unsplash5.jpg';
import mimicHumanImage from '../../../../media/img/unsplash4.jpg';
import { ClientLogos } from './ClientLogos';
import { ComparativeTable } from '../ComparativeTable';

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

  // Notes alex structure page:

  //  Hero
  //  2-3 scrollable text (with images/animations?)
  //  Screenshot sor app? (maybe in 2-3 above)
  //  comparative table
  //  greyed out logos (social proof)
  //  CTA or contact us?

  //  Sor seo has developed a solution to carefully automate 75-90% of the heavy lifting initially done by your Sales to even get to talk to new opportunities

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
        <BubbleMenu onceToggled={() => setShowNav(!showNav)} showNav={showNav} linkOptions={['/', '/app/login', '/dev']} textOptions={['Back', 'DEV']} />
        <Container>
          <div className='hero'>
            <div>
              <LogoAnimation branchName='SEO' />
              {/* <H1>Systematically engage new in-market accounts, otherwise inaccessible</H1> */}
              <H1>There's touch of organic behind every interaction</H1>
              {/* <H1>Organic marketing at its finest</H1> */}
              {/* (People like us that do things like this) */}
            </div>
            {/* <p>Next-gen account engagement solutions for complex B2b sales cycles</p> */}
          </div>
        </Container>

        {/* 2 IDEAS : SKEW BG IMG ON MOUSE MOVE AND 2) APPEAR SECTION LEFT AND RIGHT LIKE IN 50IN50 PROJECT */}
        <Container type='large' className='special-container'>
          <div className='section blending-in' ref={box}>
            <div className='text-box'>
              <h2>Tired of blending in?</h2>
              <p>
                Engagement can be done in many ways. But in our business the way you do things matter. All our campaigns are built onto our 3 core values:
                
              </p>

                <span className="bold l">
                It has to be authentic.
                <br />
                It has to be humble.
                <br />
                And it has to be light.
                </span>
                
                <br />
            </div>
            <div className='blendingIn-Image' />
            {/* 
            <Link to='/resources' className='main-btn'>
              Resources &nbsp;<i class='fa-thin fa-arrow-right'></i>
            </Link> */}
          </div>
          <div className='section authenticity' ref={box}>
            <div className='text-box'>
              <h2>Authenticity at the forefront</h2>
              <p>
                The most important thing to keep in mind when automating actions is that the end goal is not to "trick" people into doing actions they wouldn't otherwise have done, it's to sparkle a
                first interaction in a way that feels natural. It puts you on their map, it reaches out professionally, and when well done it opens a direct communication channel.
              </p>
              <Link to='/resources' className='main-btn'>
                Resources &nbsp;<i class='fa-thin fa-arrow-right'></i>
              </Link>
            </div>
          </div>
          <div className='section mimicHuman' ref={box}>
            <img src={mimicHumanImage} alt='' width={'100%'} />
            <div className='text-box'>
              <h2>Time your messages and actions to mimic human-like behaviour</h2>
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
              <Link to='/resources' className='main-btn'>
                <i class='fa-thin fa-arrow-up-left'></i> &nbsp; Resources
              </Link>
            </div>
          </div>
          <ComparativeTable item={'item1'} itemDescription={'itemDesc 1'} />
          {/* <div className='section' ref={box}>
            <div>
              <h2>Time your messages and behaviours to mimic human-like behaviour</h2>
              <p>Done-for-you, seamlessly integrated, next-gen sales process</p>
              <ul>
                <li>we identify your buying committee and build you a comprehensive target account list</li>
                <li>we systematically "unlock" and engage your target accounts throughout time</li>
                <li>we engage and nurture target accounts, and send the warm leads to your sales team via email</li>
                <li>
                  once the prospecting and first engagement phase is done, we send the complete target account list to your sales team, to effectively "follow up on your recent LinkedIn conversation".
                </li>
              </ul>
              <Link to='/resources' className='main-btn'>
                Resources
              </Link>
            </div>
          </div> */}
          {/* social proof - greyed out logos */}
          <ClientLogos />
          {/* comparative table */}
          {/* call to action - with image or short video (need to have at least one short video effect) */}
          {/* The easiest way to grow your sales pipeline */}
          {/* Elevate your organic marketing, and see your growth SOR
          Reach buying committees with full insights
          Ready-to-go, */}
          <div className='section cta'>
            <img src={ctaImage} alt='' width={'100%'} />
            <div>
              <h2>Get started with SOR SEO today</h2>
              <Link to='/resources' className='main-btn'>
                <i class='fa-thin fa-arrow-left-long'></i> &nbsp; Learn More
              </Link>
            </div>
          </div>
        </Container>
      </StyledHowItWorks>
    </motion.div>
  );
};
