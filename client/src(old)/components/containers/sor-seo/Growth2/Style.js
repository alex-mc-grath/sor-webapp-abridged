import styled from 'styled-components/macro';

export const StyledGrowth2 = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* min-height: 100vh; */
  margin: auto;
  background: #fefefe;
  /* margin-top:15vh; */
  background: linear-gradient(30deg, #f0f1f5, white, #d0d2d5);


  .section {
      width: 60%;
    }
  
    .hero{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:95%;
    height: 85vh;
    margin:1rem auto;
    box-shadow: 0 1px 1px rgba(0,0,0,0.04), 
              0 2px 2px rgba(0,0,0,0.04), 
              0 4px 4px rgba(0,0,0,0.04), 
              0 8px 8px rgba(0,0,0,0.04),
              0 16px 16px rgba(0,0,0,0.04);
  }

    .special-container {
      width: 90%;
      margin: 0 auto;
    }

    .mimicHuman,
    .authenticity,
    .cta {
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;

      h2 {
        margin: 2rem auto;
      }
    }

    svg {
      z-index: 3;
    }

    .circle-container {
      z-index: 2;
    }

    .text-box {

      text-align: center;
      padding: 1rem !important;

      h2 {
        margin: 1rem 0;
      }
    }


    .blending-in {
      display: flex !important;
      flex-direction: column !important;

      .blendingIn-Image {
        width: 100% !important;
        padding: 0;
        margin: 0 auto;
      }
    }



  svg {
    position: fixed;
  }

  .circle-container {
    .circle button {
      color: black !important;
    }

    .circle button svg {
      circle,
      path {
        stroke: black !important;
       
      }
    }
  
  }

  .section {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;

    .text-box {
      display: flex;
      flex-direction: column;

      justify-content: center;
      padding: 1rem;
      padding-right: 4rem;

      p {
        margin: 2rem auto;
      }
    }

    .main-btn {
      margin: 1rem auto;
    }

    &:nth-child(even) {
      margin-left: auto;
      text-align: right;
    }

    &:nth-child(2) {
      a {
        background: ${(props) => props.theme.colors.tertiary};
      }
    }
    &:nth-child(3) {
      a {
        background: ${(props) => props.theme.colors.primary};
      }
    }
    &:first-child {
      a {
        background: #16c0bc;
      }
    }
    &:last-child {
      a {
        background: #619fef;
      }
    }

    a {
      width: 50%;
      border-radius: 30px;
      margin-top: 2rem;
      margin-left: 0;
      margin-right: 0;
    }

    i.fa-arrow-right {
      margin: 0;
    }

    &.blending-in {
      flex-direction: row;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* height: 100vh; */

      .blendingIn-Image {
        width: 500px;
        height: 100%;
        background: url('/unsplash5.jpg');
        background-size: cover;

        background-repeat: no-repeat;
        border-radius: 25px;
        -webkit-filter: blur(5px);
        filter: blur(5px);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        transition: 1s all cubic-bezier(1, 100, 1, 0);

        &:hover {
          -webkit-filter: blur(0px);
          filter: blur(0px);
          transition: 1s all cubic-bezier(1, 100, 1, 100);
        }
      }
    }

    &.authenticity {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      margin: auto;
      text-align: center;
    }


    &.cta {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      img {
        border-radius: 25px;
      }
    }
  }

  .special-container {
    width: 70%;
  }

  a {
    font-size: 5rem;
  }

    h1,
    p {
      width: 70%;
      margin: 1rem auto;
      text-align: center;
    }
/* 
    p {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.secondary};
    } */
  

  .sor-dev-logo-container {
    margin: auto;
    transform: translateX(-20px);

    h2 {
      color: black;

      &.seo {
        right: -55px;
        font-size: 2.8rem !important;
      }
    }
  }

`;
