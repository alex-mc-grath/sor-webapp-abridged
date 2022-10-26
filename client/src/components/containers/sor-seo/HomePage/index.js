/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StyledHomepage } from './Style';
import { Hero } from '../HomePage/Hero/';

import { SorSeoSvg } from './SorSeoSvg';
import { motion } from 'framer-motion';
import { variants1 } from '../../../utils/animationVariants';
import BubbleMenu from '../../../layout/BubbleMenu';
import { ClientLogos } from './ClientLogos';
import { Why } from './Why';
import { What } from './What';
import { Testimonials } from './Testimonials';


import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { GetStarted } from './GetStarted';
import { Why2 } from './Why2';
import { AnimationWrapper } from '../../../layout/AnimationWrapper';
import { Carousel } from '../../../layout/Carousel';


const key = 'home';

export default function HomePage() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [view, setView] = useState('zoomed');

  const [introText, setIntroText] = useState(
    <>
      <span className='gradient-color'>
        systematic <span className='gradient-color'>organic</span> results
      </span>
    </>
  );

  // const splitCharsInArray = (word) => {
  //   const s = word;
  //   for (var i = 0; i < s.length; i++) {
  //     console.log(s.charAt(i));
  //   }
  // };

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIntroText(<span className="gradient-color">
  //     The real mantra of success is: sustainability and growth
  //   </span>)
  //   },3000)
  // },[introText])

  const contentArray = [
    <>
      <span className='gradient-color3'>
        The real mantra of success is:
        <br />
        sustainability and growth
        <br />
        <span className='author'>- Stephen R Covey</span>
      </span>
    </>,

    <>
      <span className='gradient-color3'>To learn, and not to do, is really not to learn</span>
    </>,

    <>
      <span className='gradient-color3'>To know, and not do, is really not to know</span>
    </>,

    <>
      <span className='gradient-color3'>The better you get at a given thing, the more the very nature of the challenge changes</span>
    </>,
  ];

  // const timeoutHandlerFunc = (timeoutDuration, callback) =>{

  //   contentArray.map((contentBlock, idx)=>{
  //   return setTimeout(()=>{
  //     setIntroText(contentArray[idx])
  //   },timeoutDuration)
  // })

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function sleep(fn, ...args) {
    contentArray.map((contentBlock, idx) => {
      timeout(3000);
      return fn(...args);
    });
  }

  // useEffect(()=> sleep(setIntroText),[])

  setTimeout(() => {
    setIntroText(
      <span className='gradient-color3'>
        The real mantra of success is:
        <br />
        sustainability and growth
        <br />
        <span className='author'>- Stephen R Covey</span>
      </span>
    );
  }, 4000);

  // setTimeout(() => {
  //   setIntroText(<span className='gradient-color'>To learn, and not to do, is really not to learn To know, and not do, is really not to know</span>);
  // }, 6000);

  // useEffect(
  //   () =>
  //     setTimeout(() => {
  //       setIntroText(
  //         <span className='gradient-color3'>
  //           The real mantra of success is:
  //           <br />
  //           sustainability and growth
  //           <br />
  //           <span className='author'>- Stephen R Covey</span>
  //         </span>
  //       );
  //     }, 3000),
  //   []
  //   // setTimeout(() => {
  //   //   setIntroText(<span className='gradient-color'>To learn, and not to do, is really not to learn To know, and not do, is really not to know</span>);
  //   // }, 6000),
  // );

  //  setTimeout(()=>{
  //   setIntroText(<span className="gradient-color">
  //   To know, and not do, is really not to know
  // </span>)
  // },3000)

  // setTimeout(()=>{
  //   setIntroText(<span className="gradient-color">
  //   The better you get at a given thing, the more the very nature of the challenge changes
  // </span>)
  // },3000)

  const onceToggled = () => {
    if (showNav) {
      setView('zoomed');
      setShowNav(!showNav);
    } else {
      setView('');
      setShowNav(!showNav);
    }
  };

  const ZoomInScrollOut = batch( FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

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
      <StyledHomepage>
        <Helmet>
          <title>SOR SEO | Account-based Experience</title>
          <meta name='description' content='A React.js Boilerplate application homepage' />
        </Helmet>

        <Hero
          view={view}
          content={{
            h1: introText,
          }}
        />
        
      <ScrollContainer snap="none">
          {/* // Section 2 - */}

          <ClientLogos />


          {/* // Section 3 - */}
          {/* <ScrollPage>
                  <div>
                <Animator animation={batch(Fade(), MoveOut(180, -200), )}>
                  <Why />
                </Animator>
                  </div>
          </ScrollPage> */}

          <Why />

          <Why2 />

          {/* // Section 4 - */}

          {/* <What /> */}
          {/* <Why /> */}

              {/* <ScrollPage>
                <Animator animation={batch(Fade(), MoveOut(0, -200), Sticky())}>
                  <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
                </Animator>
              </ScrollPage> */}


          {/* // Section 5 - */}
          
          {/* <ScrollPage>
              <Animator animation={batch( ZoomIn())}>
              <Testimonials />
              </Animator>
          </ScrollPage> */}
          <Testimonials />


          {/* few high level client overview (at least 3 boxes + can be as simple as opening a quick clean modal) */}
         {/* <Carousel /> */}

        <GetStarted />

        </ScrollContainer>
        
      </StyledHomepage>
    // </motion.div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
