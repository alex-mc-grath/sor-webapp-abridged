import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { StyledHowItWorks } from './Style';

import mimicHumanImage from '../../../app/assets/imgs/unsplash4.jpg'
import { ComparativeTable } from '../../../_boilerplate/layouts/ComparativeTable';
import { Section } from '../../../_boilerplate/layouts/Section';

import { Col } from '../../../_boilerplate/layouts/Col';

import { MainButton } from '../../../_boilerplate/inputs/MainButton';
// import Marquee from '../../../layout/HorizontalTextMarquee';
import LogoAnimation from '../../../app/theme/header-sor-seo-dev/LogoAnimation';
import { Row } from '../../../_boilerplate/layouts/Row';
import { Animation } from '../../../_boilerplate/layouts/Animation'


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

    <StyledHowItWorks>
      <Helmet>
        <title>SOR SEO | Account-based Experience</title>
        <meta name='description' content='Account-based Experience, demand generation' />
      </Helmet>
      {/* <BubbleMenu onceToggled={() => setShowNav(!showNav)} showNav={showNav} linkOptions={['/', '/app/login', '/dev']} textOptions={['Back', 'DEV']} /> */}

      <Animation>
        <Section className='hero'>
          <LogoAnimation branchName='SEO' />
          {/* <h1>There's touch of organic behind every interaction</h1> */}
          <h1>when you start recreating something organic,<br /> it stops being organic</h1>
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
            <Col className='slogan'>
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

        <Section height='40vh' className='authenticity' ref={box}>
          <Col marginBottom='3rem'>
            <h2>Authenticity at the forefront</h2>
            <p>
              The most important thing to keep in mind when automating actions is that the end goal is not to "trick" people into doing actions they wouldn't otherwise have done, it's to sparkle a
              first interaction in a way that feels natural. It puts you on their map, it reaches out professionally, and when well done it opens a direct communication channel.
            </p>

            <MainButton text='discover abm basics' to='/resources/abm-guide-and-definitions' width='fit-content' />
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
            <MainButton text="resources" to='/resources' margin='auto' />
          </Col>
        </Section>

        <ComparativeTable item={'item1'} itemDescription={'itemDesc 1'} />

        <Section height="60vh" className='cta bg-gradient'>
          <Col width="50%" margin='0 auto'>
            <h2>Get started with <span className="gradient-color4 lineBreakMobile">SOR SEO</span></h2>
            <Row>
              <MainButton text="resources" to="/resources" type='gradient' />
              <MainButton text="meet sor dev" to="/dev" type='gradient' />
            </Row>
          </Col>
        </Section>
      </Animation>
    </StyledHowItWorks>

  );
};
