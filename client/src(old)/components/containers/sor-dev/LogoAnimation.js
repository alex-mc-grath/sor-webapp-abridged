import React from 'react';
import { Link } from 'react-router-dom';
import logoCenter from '../../../media/img/sor-dev/logo-sor-center.png';
import styled from 'styled-components/macro';

const StyledLogoAnimation = styled.div`
  .sor-dev-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 160px;
    max-height: 100px;
    font-family: 'Roboto';
    font-weight: 400;
    margin: 0;
    color: white;
    z-index: 2;

    img {
      width: 70px;
      position: absolute;
      transform: translateY(5px);
      z-index: 2;
      opacity: 1;
    }
/* 
    h2 {
      font-family: inherit;
      color: white;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 3px rgba(255, 255, 255, 0.5);
      // background: -webkit-linear-gradient(-120deg, #08a2e5, #1f4df1);
      //     background-clip: text;
      //     -webkit-background-clip: text;
      //     -webkit-text-fill-color: transparent;

      ${props=>props.colorTheme === 'dark' && `
      color: #1f4df1;
      background: -webkit-linear-gradient(-120deg, white, #1f4df1);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: .8s background ease-out;

      &:hover{
        background: -webkit-linear-gradient(-120deg, white, #1f4df1,white);
        background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: .8s background ease-out;
      }
        `} */

    }

    h2.sor {
      position: relative;
      width: 100%;
      font-size: 6.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      text-align: center;
      margin: 0;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 3px rgba(255, 255, 255, 0.5);
      animation-fill-mode: forwards;
      animation-delay: 0.65s;
    }

    h2.seo {
      position: absolute;
      width: auto;
      right: -3rem;
      min-width: fit-content;
      font-size: 1.3rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      border-radius: 4px;
      padding: 0 0.25rem;
      letter-spacing: 2px;
      line-height: inherit;
      text-shadow: 0 0 3px rgba(255, 255, 255, 0.5), 0 0 2px rgba(255, 255, 255, 0.5);
      z-index: 1;

      &::before {
        position: absolute;
        content: '';

        width: 100%;
        height: 100%;
        left: -1px;
        top: 1px;
        // background: rgb(238, 238, 238);
        opacity: 0.6;
        z-index: -1;

        border-radius: 4px;
        // transform: translate(-10%, -5%);
        animation: logoAnimation 3s ease-in-out 1;
        animation-delay: 1s;
        animation-fill-mode: forwards;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 3px rgba(255, 255, 255, 0.5);

        &:hover {
          border: 1px solid white;
        }

        @keyframes logoAnimation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
`;

const LogoAnimation = ({ branchName, className, ...props }) => {
  return (
    <StyledLogoAnimation className={className} {...props}>
      <Link to='/'>
        <div className='sor-dev-logo-container'>
          <h2 className='sor'>SOR</h2>
          <h2 className='seo'>{branchName}</h2>
          <img src={logoCenter} alt='' />
        </div>
      </Link>
    </StyledLogoAnimation>
  );
};

export default LogoAnimation;
