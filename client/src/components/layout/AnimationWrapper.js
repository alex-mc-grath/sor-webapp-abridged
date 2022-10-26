import React from 'react'
import { useInView } from 'react-intersection-observer';

import styled, {css, keyframes} from 'styled-components/macro';

const StyledAnimationWrapper = styled.div`
display:flex;
width:100%;
height:100%;
background:transparent;
transition: 0.5s all cubic-bezier(0.8, 0, 0.2, 1);

--border-size: 0.3rem;
--angle: 0deg;
--opacity: 0.5;



&.animateBorder{
    position:relative;
    border: var(--border-size) solid transparent;
    border-radius: 1rem;


@property --opacity {
    syntax: "<number>";
    initial-value: 0.5;
    inherits: false;
  }

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes opacityChange {
    to {
      --opacity: 1;
    }
  }

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}


padding-left:.6rem;
padding-right:.6rem;
width:max-content;

background-image:
  linear-gradient(to right, rgb(255 255 255 / 1), rgb(255 255 255 / 1)),
  conic-gradient(
    from var(--angle),
    ${props=>props.theme.colors.primary} 0deg 90deg,
    ${props=>props.theme.colors.secondary} 90deg 180deg,
    ${props=>props.theme.colors.tertiary} 180deg 270deg,
    ${props=>props.theme.colors.quaternary} 270deg 360deg
  );

  background-origin: border-box;
  background-clip: padding-box, border-box;

  animation: 6s rotate infinite linear;
  
  transition: 0.5s all cubic-bezier(0.8, 0, 0.2, 1);


&:hover{
    background-image:
  linear-gradient(to right, rgb(255 255 255 / 1), rgb(255 255 255 / 1)),

  conic-gradient(
    from var(--angle),
    ${props=>props.theme.colors.primary} 0deg 90deg,
    ${props=>props.theme.colors.secondary} 90deg 180deg,
    ${props=>props.theme.colors.tertiary} 180deg 270deg
    
  );
  

  border-radius: 1rem;
  /* font-size: 1.6rem;
  height: max-content; */
  /* letter-spacing: 8.5px; */
  /* letter-spacing: 2.5px; */
  padding-left:.6rem;
  /* padding-right:.0rem; */
  background-image:
  linear-gradient(to right, black, black);
  /* background-image: linear-gradient(to right, #8360c3, #2ebf91); */
  background-image: linear-gradient(to right, #fffbd5, #b20a2c);
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  /* background-image: linear-gradient(to right, #0f0c29,#24243e, black); */
  background-image: linear-gradient(to right, #0f0c29,#0e2967,#24243e, #110a2e);
  /* background-image: linear-gradient(to right, #141e30, #243b55); */


  span{

  background: -webkit-linear-gradient(120deg, ${props=>props.theme.colors.primary},  ${props=>props.theme.colors.quaternary} , #fdfd66, ${props=>props.theme.colors.secondary});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
}

transition: 0.34s all ease-in-out;
}


  /** show a warning in browers that don't support it **/
.warning {
  margin: 2em;
  padding: 1em;
  /* border: 1px solid #ccc; */
}
.warning p {
  margin: 0;
  padding: 0;
  text-align: center;
}
}






&.animateBackground{
  background: linear-gradient(140deg, ${(props) => props.theme.colors.primary}, #0f0c29 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary});
  transition: 0.5s all cubic-bezier(0.8, 0, 0.2, 1);
  border:none;



  .gradient-color4{
   color:white !important;
   background-clip:none;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
    /* -webkit-box-decoration-break: clone;
    box-decoration-break: clone; */
  }

/* 
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
} */
/* 
@keyframes opacityChange {
    to {
      --opacity: 1;
    }
  } */

@keyframes backgroundChange {
  from{
    background: linear-gradient(140deg, ${(props) => props.theme.colors.primary}) ${(props) => props.theme.colors.secondary});
  }
  to {
    background: linear-gradient(140deg, ${(props) => props.theme.colors.primary});
  }
}
/* 
@keyframes translateBg {
  from{
    transform:translateY(0rem);
  }
  to {
    transform:translateY(3rem);
  }
} */

  animation: 6s backgroundChange forwards;
  animation: .4s translateBg forwards;
  
  color:white;

  a, button{
    background: transparent;
    color: white;
    opacity:0.9;
    display:flex;
    /* justify-content:center;
    align-items:center; */
  }
    }


    /* TYPE 'animateBackground' */
/* ${(props) =>
    props.animation === 'animateBackground' &&
    css`
    &.animateBackground{
      background: black !important;
    }
    `
    } */

`;

 



export const AnimationWrapper = ({children, animation = 'animateBorder'}) => {

    const { ref: myRef, inView: myElementIsVisible } = useInView({
        threshold: .9,
    });
    // const animationStyle = null

  return (
    <StyledAnimationWrapper visible={myElementIsVisible} ref={myRef} className={`${myElementIsVisible ? animation : ''}`}>
        {children}
        {/* <div>
            <h2>{`Header inside viewport ${myElementIsVisible}.`}</h2>
        </div> */}
    </StyledAnimationWrapper>
  )
}
