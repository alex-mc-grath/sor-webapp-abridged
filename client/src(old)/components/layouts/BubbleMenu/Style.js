import styled from 'styled-components';
import { woo } from './keyframeAnimation';

export const StyledBubbleMenu = styled.div`
  /* // */
  .circle-container {
    position: fixed;
    top: 0px;
    right: 0px;
    

    outline: none;

    &:before{

      
      content:'';
      position: fixed;
      top: -200px;
      right: -200px;
      display:flex;
      background: radial-gradient(circle, white, rgba(0,0,100,0.1) 150px);
      width: 400px;
      height:400px;
      border-radius:50%;
      box-shadow: 0 1px 1px rgba(0,0,0,0.04), 
              0 2px 2px rgba(0,0,0,0.04), 
              0 4px 4px rgba(0,0,0,0.04), 
              0 8px 8px rgba(0,0,0,0.04),
              0 16px 16px rgba(0,0,0,0.04);

              transform: rotate(725deg);
    }

    &.show-nav .circle {
      transform: rotate(0deg);
    }

    .circle {
      position: relative;
      top: -150px;
      right: -150px;
      background-color: transparent;
      height: 300px;
      width: 300px;
      border-radius: 50%;
      transition: transform 0.5s linear;
      transform: rotate(180deg);
      z-index: 0;

      button {
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 50%;
        height: 100px;
        background: transparent;
        border: 0;
        font-size: 26px;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        opacity: 0.6;
        transition: 0.8s all ease-in-out;
        width: fit-content;
        height: fit-content;

        &:hover {
          animation: ${woo} 1.2s forwards;
        }

        &:nth-of-type(1) {
          top: 77%;
          left: 7%;
        }
        &:nth-of-type(2) {
          top: 90%;
          left: 19%;
          font-size: 1.3rem;
        }
        &:nth-of-type(3) {
          display: inline-block;
          top: 63%;
          left: -1%;
          font-size: 1.3rem;
        }
      }
    }
  }
`;
