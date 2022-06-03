import styled from 'styled-components/macro';

export const StyledHomepage = styled.article`
  /* //mobile-first */
  position: relative;
  color: white;
  overflow: hidden;
  min-height: 100vh;

  .flex-column {
    padding: 1.3rem;
  }

  h1 {
    width: 100%;
    font-size: 3rem;
    margin: 0;
  }

  .carousel.carousel-slider {
    button.control-arrow {
      display: none;
    }
  }

  .slider-wrapper {
    .slider {
      display: flex;
      align-items: center;
      min-width: fit-content;
      .slide {
        width: 100%;
        min-width: 100%;
        position: relative;
        z-index: 0;
        transition: transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        margin: auto 2rem;
      }
    }
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: rgb(15, 15, 15);
    bottom: 0;
    position: absolute;
    width: 100%;
    color: white;
    overflow: hidden;

    h1 {
      font-size: 4rem;
      width: 50%;
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
  }
`;
