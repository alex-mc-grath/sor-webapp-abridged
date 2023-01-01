import styled from 'styled-components';

let width = 5.5

export const StyleToggleSwitchWithText = styled.label`
  /* The switch - the box around the slider */

  position: relative;
  display: inline-block;
  /* width: 60px; */
  width: fit-content;
  min-width: ${width}rem;
  height: ${width / 2.2}rem;

  /* Hide default HTML checkbox */
  &.switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* Toggle switch text */
  .text {
    position: absolute;
    top: 50%;
    right: 15%;
    /* transform: translate(-50%, -50%); */
    transform: translateY(-50%);
    font-size: 1.4rem;
    font-weight: bold;
    z-index: 0;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }

  .text.active {
    right: 37%;
    transition: 0.4s all ease-in-out;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #e3eeff;
    -webkit-transition: 0.4s;
    transition: 0.4s all ease-in-out;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: ${width / 2.8}rem;
    width: ${width / 2.8}rem;
    /* width: 26px; */
    left: 5px;
    bottom: 2px;
    background: #418eeb;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider.active {
    background-color: #f3f4f6;
    /* border: 1px solid #d6d6d6; */
  }
  .slider.active:before {
    -webkit-transform: translateX(${width / 2}rem);
    -ms-transform: translateX(${width / 2}rem);
    transform: translateX(${width / 2}rem);
    background-color: #c4c4c4;
  }

  /* 
  input:checked + .slider {
    background-color: #e3eeff;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #e3eeff;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(100px);
    -ms-transform: translateX(100px);
    transform: translateX(100px);
  } */

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
