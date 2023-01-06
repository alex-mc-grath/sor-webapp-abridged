import styled, { css } from 'styled-components/macro';
import { woo } from './keyframeAnimation';

export const StyledBubbleMenu = styled.div`
z-index:1;
margin-left:auto;

${props=>props.darkText && css`
  button{
  color:black !important;

}
`}

  .circle-container {
    position: absolute;
    top: 0rem;
    right: 0rem;
    overflow:hidden;

    outline: none;
    z-index: -1;

    /* &:before{

      
      content:'';
      position: fixed;
      top: -200rem;
      right: -200rem;
      display:flex;
      background: radial-gradient(circle, white, rgba(0,0,100,0.1) 150rem);
      width: 400rem;
      height:400rem;
      border-radius:50%;
      box-shadow: 0 1rem 1rem rgba(0,0,0,0.04), 
              0 2rem 2rem rgba(0,0,0,0.04), 
              0 4rem 4rem rgba(0,0,0,0.04), 
              0 8rem 8rem rgba(0,0,0,0.04),
              0 16rem 16rem rgba(0,0,0,0.04);

              transform: rotate(725deg);
    } */

    &.show-nav .circle {
      transform: rotate(0deg);
    }

    .circle {
      position: relative;
      top: -15rem;
      right: -15rem;
      background-color: transparent;
      height: 30rem;
      width: 30rem;
      border-radius: 50%;
      transition: transform 0.5s linear;
      transform: rotate(180deg);
      z-index: 1;

      .button-holder{
        position:absolute;
          display:flex;
          position:relative;

          top: -50%;
          width: 3rem;
          height: 3rem;
          border-radius:50%;

          &:nth-of-type(3) {
          /* display: inline-block; */
          top: 38%;
          left: -4%;
          font-size: 1rem;
        }

        &:nth-of-type(1) {
          top: 78%;
          left: 6%;
          font-size: 1.3rem;
        }
        

        &:nth-of-type(2) {
          top:82%;
          left: 28%;
          font-size: 1.3rem;
        }
      

      button {
        display:block;
        cursor: pointer;
        position: absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        width: 1rem;
        height: 1rem;
        background: transparent;
        border: 0;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        opacity: 0.7;
        transition: 0.8s all ease-in-out;
        width: fit-content;
        height: fit-content;
        text-align:center;

        
/* 
        &:hover {
          animation: ${woo} 1.2s forwards;
        
        } */

       
      }}
    }
  }
`;
