import React, { useState } from 'react';
// import LogoAnimation from './LogoAnimation';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  @include flexContainer(row, flex-start, center);
  position: fixed;
  position: relative;
  width: 100%;
  z-index: 1;
  // background: white;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 3px rgba(255, 255, 255, 0.5);

  .logo-header {
    left: 3rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    position: absolute;
    background: #110a2e;
    opacity: 0;
    top: 0;
    right: 0;
    padding: 0;
    margin: 0;
    width: 20%;
    height: 100vh;
    font-size: 1.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    z-index: -1;
    transition: all 0.5s cubic-bezier(0.331, 0.441, 0.444, 1);
    transform: translateX(100%);
    padding-left: 2rem;

    &.show {
      opacity: 0.94;
      transform: translateY(0rem);
      /* height: 92vh; */
    }

    a {
      background: -webkit-linear-gradient(-120deg, #0e2967, white, #1f4df1);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &:hover {
        opacity: 1;
        -webkit-text-fill-color: #0e2967;
      }
    }
  }
  .nav-hamburger {
    position: absolute;
    font-size: 3rem;
    right: 2rem;
    // display: none;
    width: 50px;
    height: 50px;
    // border: 2px solid black;
    border: none;
    background-color: transparent;

    span {
      color: #000;
    }
  }
  /* 
  #box {
    width: 10em;
    height: 6em;
    border: 4px solid #ccc;
    background-color: #fff;
    position: relative;
  } */

  #box::before,
  #box::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 10rem;
    height: 10rem;
    border-color: transparent;
    border-style: solid;
  }

  #box::before {
    border-width: 11.5em;
    border-right-color: #110a2e;
    border-top-color: #0e2967;
  }

  #box::after {
    border-radius: 0.4em;
    border-width: 1.35em;
    border-right-color: #0e2967;
    border-top-color: #110a2e;
  }

  #box2::before,
  #box2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20rem;
    height: 20rem;
    border-color: transparent;
    border-style: solid;
  }

  #box2::before {
    border-width: 11.5em;
    border-right-color: #110a2e;
    border-top-color: #0e2967;
  }

  #box2::after {
    border-radius: 0.4em;
    border-width: 1.35em;
    border-left-color: #0e2967;
    border-bottom-color: #110a2e;
  }

  .nav-hamburger {
    width: 40px;
    height: 25px;
    position: fixed;
    top: 25px;
    right: 25px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateX(5px);

      span:nth-child(1) {
        transform: rotate(45deg);
        width: 50%;
        background: darken(#1f4df1, 0%);
        opacity: 0;
      }

      span:nth-child(2) {
        transform: rotate(-45deg);
        width: 50%;
        height: 20%;
        background: darken(#1f4df1, 20%);
      }

      span:nth-child(3) {
        transform: rotate(45deg);
        width: 50%;
        height: 20%;
        top: 0;
        // background: darken(#1f4df1, 0%);
        background: -webkit-linear-gradient(50deg, #1fc7f1, #1f4df1);
      }
    }

    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: -webkit-linear-gradient(-120deg, #110a2e, #0e2967);
      opacity: 0.95;
      -webkit-text-fill-color: transparent;
      border-radius: 9px;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
  }

  .nav-hamburger span:nth-child(1) {
    top: 0px;
  }

  .nav-hamburger span:nth-child(2) {
    top: 12px;
    width: 80%;
  }

  .nav-hamburger span:nth-child(3) {
    top: 24px;
  }

  .nav-hamburger:focus {
    outline: none;
    user-select: none;
  }

  // open
  .nav-hamburger.open {
    // height: 30px;
  }

  .nav-hamburger.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .nav-hamburger.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 70%;
    height: 17%;
    left: 0%;
  }

  .nav-hamburger.open span:nth-child(3) {
    /* -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg); */
    top: 12px;
    width: 70%;
    height: 17%;
    left: 0%;
  }
`;

const Header = () => {
  const [navShowing, toggleNav] = useState(false);

  const handleToggleNav = () => {
    toggleNav(!navShowing);
  };
  const closeNav = () => {
    toggleNav(!navShowing);
  };
  return (
    <StyledHeader>
      <div id="box" />
      <div id="box2" />
      <NavLink to="/" className="logo-header" onClick={closeNav}>
        <div className="">{/* <LogoAnimation /> */}</div>
      </NavLink>
      {/* <button id='menuToggle' className="hamburger" onClick={handleToggleNav}>
        <i className="fas fa-bars" />
      </button> */}
      <div className={`nav-hamburger ${navShowing ? 'open' : ''}`} onClick={handleToggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${navShowing ? 'show' : ''}`}>
        <NavLink to="/" activeClassName="underline" onClick={closeNav}>
          Solutions
        </NavLink>
        <NavLink to="/about" onClick={closeNav}>
          About SOR SEO
        </NavLink>
        <NavLink to="/account-based-marketing" onClick={closeNav}>
          Account-based EXP
        </NavLink>
        <NavLink to="/login" onClick={closeNav}>
          Client Login
        </NavLink>

        <NavLink to="/contact" onClick={closeNav}>
          Contact Us
        </NavLink>
      </ul>
    </StyledHeader>
  );
};

export default Header;
