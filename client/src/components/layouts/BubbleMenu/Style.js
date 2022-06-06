import styled from 'styled-components';
import { woo } from './keyframeAnimation';

export const StyledBubbleMenu = styled.div`
  /* // */
  .circle-container {
    position: fixed;
    top: 0px;
    right: 0px;

    &.show-nav .circle {
      transform: rotate(0deg);
    }

    .circle {
      position: absolute;
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
          top: 75%;
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
