import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import styled from 'styled-components';

const StyledMarquee = styled.div`
position:relative;
    display:flex;
    align-items:center;
    width:100%;
    height: 15rem;
    background: linear-gradient(40deg, ${(props) => props.theme.colors.secondary} calc(10% - 1px), #0e2967 calc(10% - 1px), ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
    p{
        position:absolute;
        width:max-content;
    overflow:hidden;
        margin: 0 5rem;
    font-size: 4rem;
    text-align:left;

    .colored{
    color:white;
}
}


`;

const marqueeTexts = [
  "organic means alive",
  "it means colorful, healthy and vibrant.",
  "organic encompasses all scenarios.",
  "known and unknown, good and bad.",
  "it can be reassuring, comforting, like the warmth of an old friend.",
  "its exploration can be somewhat unpredictable, with potentially damaging obstacles and its growth is definitely asymetical. thus it is unique.",
//   organic means alive, it means colorful, healthy and vibrant. organic encompasses all scenarios. 
//   it can be reassuring, comforting, like the warmth of an old friend. its exploration can be somewhat unpredictable, with potentially damaging obstacles and its growth is definitely asymetical. thus it is unique.
];

const Marquee = () => {
  const marqueeElements = useRef([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const marqueeTween = useRef();

  const [colored, setColored] = useState(false)

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      marqueeTween.current.pause().kill();
    };
  }, []);

  useEffect(() => {
    marqueeInitialSet();
    marqueeTween.current && marqueeTween.current.pause().kill();
    marqueeTween.current = gsap.to(marqueeElements.current, {
      x: `+=${screenWidth * -2.25}`,
      ease: "none",
      repeat: -1,
      duration: 40,
      rotation: 0.1,
      modifiers: {
        x: (x) => {
          return (parseFloat(x) % (screenWidth * 4.5)) + "px";
        }
      }
    });
  }, [screenWidth]);

  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      xPercent: 1.5,
      x: function (index) {
        return (screenWidth / 2) * index;
      }
    });
  };

  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: "all" });
    setScreenWidth(window.innerWidth);
  };

  const marqueeElementsRefHandler = (e, i) => {
    marqueeElements.current[i] = e;
  };

  const renderMarqueeElements = () => {
    if (marqueeTexts.length === 1) {
      marqueeTexts[2] = marqueeTexts[1] = marqueeTexts[0];
    }
    if (marqueeTexts.length === 2) {
      marqueeTexts[2] = marqueeTexts[0];
    }

const changeColor = (e) =>{
    // e.target.classList.add('colored')
    setColored(true)
    console.log(e.target)
    setTimeout(() => {
        return null
    }, 1000);
}


    return marqueeTexts.map((e, i) => (
      <p
        className={`${colored && 'colored'} text-center px-4 text-2xl font-semibold absolute pin-l w-1/2`}
        key={`marquee-${i}`}
        ref={(el) => marqueeElementsRefHandler(el, i)}
        onMouseEnter={(el)=>changeColor(el)}
      >
        {e}
      </p>
    ));
  };
  return (
    <StyledMarquee
      className=" relative w-screen mt-8 py-4 bg-green-600 text-gray-200 flex overflow-hidden items-center"
    //   style={{ minHeight: "200px" }}
    >
      {renderMarqueeElements()}
    </StyledMarquee>
  );
};

export default Marquee;
