import React from 'react'
import { Style } from './Style'

import gsap, { Linear, Power1 } from 'gsap'
import { useEffect, useRef } from 'react';

export const Loader = () => {
   
useEffect(()=>{

    /**
     * Set the filter property for an element, accounting for both
     * 'webkitFilter' and 'filter'
     *
     * example: setFilter('url("/svg/filters/gooey-effects.svg#goo")', menuContainerElem);
     */

    var setFilter = function setFilter(path, elem) {
        elem.style.filter = path;
        elem.style.webkitFilter = path;
      };

            let loaderContainer = document.querySelector('.loader-container'),
            loaderSVG = document.querySelector('#loader'),
           circleL = document.querySelector('#circleL'),
           circleR = document.querySelector('#circleR'),
           jumpArc = document.querySelector('#jump');

            // const loaderContainer = useRef()
            // const loaderSVG = useRef()
            // const circleL = useRef()
            // const circleR = useRef()
            // const jumpArc = useRef()
      
            let BASE_DURATION_MULTIPLIER = 1.0

          const jumpArcReflection = jumpArc.cloneNode();
      
          jumpArcReflection.setAttribute('class', 'reflection'); // setAttribute needs to be used for classing SVG in JS
          loaderSVG.appendChild(jumpArcReflection);
      
          setFilter('url("#strokeGlow")', jumpArc);
          setFilter('url("#strokeGlow")', jumpArcReflection);
      
          const masterTL = new gsap.timeline({repeat: -1})
        //   (
        //     {
        //     repeat: -1
        //   });
      
          function jump() {
      
            const jumpTL = new gsap.timeline();
            console.log('test jump', jumpTL)
      

            jumpTL
              .set(
                [jumpArc, jumpArcReflection], {
                  drawSVG: '0% 0%'
                }
              )
              .set(
                [circleL, circleR], {
                  attr: {
                    rx: 0,
                    ry: 0
                  }
                }
              )
              .to(
                [jumpArc, jumpArcReflection],
                BASE_DURATION_MULTIPLIER * 0.4, {
                  drawSVG: '0% 30%',
                  ease: Linear.easeNone
                }
              )
      
            // scale up the ripple ovals (with x scaling a bit more since, you know, it's a horizontal oval :-) )
            .to(
              circleL,
              BASE_DURATION_MULTIPLIER * 2, {
                attr: {
                  rx: '+=30',
                  ry: '+=10'
                },
                opacity: 0, // ripple, then fade out
                ease: Power1.easeOut
              },
              '-=0.1'
            )
      
            .to(
              [jumpArc, jumpArcReflection],
              BASE_DURATION_MULTIPLIER * 1.0, {
                drawSVG: '50% 80%',
                ease: Linear.easeNone
              },
              '-=1.9'
            )
      
            .to(
              [jumpArc, jumpArcReflection],
              BASE_DURATION_MULTIPLIER * 0.7, {
                drawSVG: '100% 100%',
                ease: Linear.easeNone
              },
              '-=0.9'
            )
      
            // finish by animating the right circle ripple
            .to(
              circleR,
              BASE_DURATION_MULTIPLIER * 2, {
                attr: {
                  rx: '+=30',
                  ry: '+=10'
                },
                opacity: 0, // ripple, then fade out
                ease: Power1.easeOut
              },
              '-=0.5'
            );
      
            jumpTL.timeScale(3);
      
            return jumpTL;
      
          };
      
          masterTL.add(jump());
      
},[])



  return (
    <Style>
        <svg className="svg-def">
  <defs>

    {/* <!-- a glow that takes on the stroke color of the object it's applied to --> */}
    <filter id="strokeGlow" y="-10" x="-10" width="250" height="150">

      <feOffset in="StrokePaint" dx="0" dy="0" result="centeredOffset"></feOffset>

      <feGaussianBlur in="centeredOffset" stdDeviation="2" result="blur1"></feGaussianBlur>
      <feGaussianBlur in="centeredOffset" stdDeviation="5" result="blur2"></feGaussianBlur>
      <feGaussianBlur in="centeredOffset" stdDeviation="15" result="blur3"></feGaussianBlur>

      <feMerge>
        {/* <!-- this contains the offset blurred image --> */}
        <feMergeNode in="blur1"></feMergeNode>
        <feMergeNode in="blur2"></feMergeNode>
        <feMergeNode in="blur3"></feMergeNode>

        {/* <!-- this contains the element that the filter is applied to --> */}
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>

  </defs>
</svg>


<div className="main-view-container">

  <div className="loader-container">

    <svg id="loader" xmlns="http://www.w3.org/2000/svg" width="250px" height="200px" viewBox="0 0 250 200">
      <svg style={{overflow: "visible"}}>
      <path id="jump" fill="none" stroke="#33FFFF" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10" d="M55.5 98.5c0-35.3 31.3-64 70-64s70 28.7 70 64"></path>
      </svg>

      <g fill="none" stroke-width="1" stroke="#33FFFF" stroke-linecap="round" stroke-miterlimit="10">
        <ellipse id="circleL" cx="55.2" cy="102.5" rx="21.7" ry="5.5"></ellipse>
        <ellipse id="circleR" cx="195.2" cy="103.5" rx="21.7" ry="5.5"></ellipse>
      </g>
    </svg>


  </div>

</div>
    </Style>
  )
}

