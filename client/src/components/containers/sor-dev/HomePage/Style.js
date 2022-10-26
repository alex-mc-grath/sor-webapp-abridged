import styled from 'styled-components/macro';

export const StyledHomepage = styled.article`
  /* //mobile-first */
  position: relative;
  color: white;
  /* overflow: hidden; */
  background: linear-gradient(-30deg, #000000,#130F40,#000000);
  background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a);
  min-height: 100vh;
  width:100%;
  padding: 4rem 0;


  .artsy{
    font-weight:bold;
    letter-spacing: 3px;
    cursor: s-resize;
  }

  .vertical-bar{ 
    width:1rem;
    height:1rem;
    background: white;
    border-radius: .2rem;
    margin: 0 1.2rem;
    text-align:center;
    line-height:0.1rem;

     transform: scale(1, 1.5);
  /* Safari and Chrome */
  -webkit-transform: scale(1, 1.5);
  /* Firefox */
  -moz-transform: scale(1, 1.5);
  /* IE 9+ */
  -ms-transform: scale(1, 1.5);
  /* Opera */
  -o-transform: scale(1, 1.5);

  /* &::before{
    content:'';
    position:absolute;
    background: blue;
    width:1rem;
    height:1rem;
    background: white;
    border-radius: .2rem;
    margin: 0 1.2rem;
    text-align:center;
    line-height:0.1rem;
  } */

    &:hover{
      background:transparent;
    }
  }

  .flex-column {
    padding: 1.3rem;
  }

  h1 {
    width: 100%;
    font-size: 3rem;
    margin: 0;
    padding: 1rem;
  }

  p {
    padding: 0.4rem 1rem;
  }

  .carousel-root {
    width: 100%;
    &:focus {
      outline: none;
    }
  }

  .carousel.carousel-slider {
    button.control-arrow {
      display: none;
    }
  }

  .slider-wrapper {
    width: 100%;
    display: flex;
    /* align-items: center; */
    /* min-width: fit-content; */

    .slider {
      display: flex;
      /* align-items: center;

      min-width: fit-content; */

      &.animated {
        /* justify-content: flex-start; */
      }
      .slide {
        width: 100%;
        min-width: 100%;
        position: relative;
        z-index: 0;
        transition: transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        margin: auto;
      }
    }
  }


  .bottom-page-button {
    position: absolute;
    bottom: 2rem;
    border-radius: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a);
    opacity: 0.8;
    color: white;
    width: 50%;
    text-align: center;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    transition: all 0.5s cubic-bezier(0.55, 0.055, 0.675);

    &:hover {
      transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
    }
  }

  @media (min-width: 1000px) {

    h1{
      width:100%;
      font-size: 3.5rem;
    }
  }

/* 
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    bottom: 0;

    width: 100%;
    color: white;
    overflow: hidden;

    h1 {
      font-size: 4rem;
      width: 50%;
      padding: 0;
    }
    p {
      font-size: 2rem;
      color: lightgrey;
      margin: 1rem 0;

      &:nth-of-type(2) {
        letter-spacing: 5px;
        font-size: 1.3rem;
      }
    }
  

    .flex-column {
      position: relative;
      display: flex;
      flex-direction: column;

      a {
        position: relative;
        width: fit-content;
        height: fit-content;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translate(-80%, 25%);

        &:hover {
          span {
            display: flex;
            top: -10px;
            transition: 0.4s all ease-in-out;
            transition-delay: 0.15s;

            :before {
              content: '\f359';
              font: normal normal normal 14px/1 FontAwesome;
              margin-right: 5px;
              margin-top: 0px;
              opacity: 1;
              transition: 1s all ease-out;
            }
          }
        }
      }

      span {
        position: absolute;
        top: 5px;
        transition: 0.4s all ease-in-out;
      }
    }
  } */
`;
