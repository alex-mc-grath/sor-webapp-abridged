import styled from 'styled-components/macro';
import { woo } from './keyframeAnimation';

export const StyledBubbleMenu = styled.div`
z-index:1;
margin-left:auto;

  .circle-container {
    position: absolute;
    top: 0px;
    right: 0px;
    overflow:hidden;

    outline: none;
    z-index: -1;

    /* &:before{

      
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
    } */

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
      z-index: 1;

      .button-holder{
        position:absolute;
          display:flex;
          position:relative;

          top: -50%;
          width: 30px;
          height: 30px;
          border-radius:50%;

          &:nth-of-type(3) {
          display: inline-block;
          top: 38%;
          left: -4%;
          font-size: 1rem;
        }

        &:nth-of-type(1) {
          top: 78%;
          left: 6%;
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
        width: 100px;
        height: 100px;
        background: transparent;
        border: 0;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        opacity: 0.6;
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
