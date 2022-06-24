import styled from 'styled-components/macro';

export const StyledHowItWorks = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-left: 4rem; */
  background: #fefefe;
  min-height: 100vh;
  margin: auto;
  /* color:white; */

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
        /* stroke-width: 1px; */
      }
    }
    /* circle {
      background: #000 !important;
      width: 75px;
      height: 75px;
      border-radius: 50%;
    } */
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
      /* align-items: center; */
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
      /* font-weight: bold; */
      margin: 0;
    }

    &.blending-in {
      flex-direction: row;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100vh;

      .blendingIn-Image {
        width: 500px;
        height: 100%;
        background: url('/unsplash5.jpg');
        background-size: cover;
        /* background-size: 80%;
      background-position: bottom; */
        background-repeat: no-repeat;
        border-radius: 25px;
        -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
        filter: blur(5px);

        /* padding: 2rem; */
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        transition: 1s all cubic-bezier(1, 100, 1, 0);

        &:hover {
          -webkit-filter: blur(0px); /* Safari 6.0 - 9.0 */
          filter: blur(0px);
          transition: 1s all cubic-bezier(1, 100, 1, 100);
        }
        /* &:hover {
        background-size: cover;
        background-origin: content-box;
        padding: 2rem;
      } */
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

    &.mimicHuman {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      ul {
        li {
          list-style: disc;
        }
      }

      .text-box {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        padding: 1rem;
        padding-left: 4rem;
      }

      img {
        border-radius: 25px;
      }
    }

    &.cta {
      /* background: #000; */
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
    /* margin-left: 0rem; */
    /* background: blue; */
    width: 70%;
  }

  a {
    font-size: 5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .hero {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5vh;
    background: #fafafa;
    min-height: 90vh;
    border-radius: 25px;

    h1,
    p {
      width: 70%;
      margin: 1rem auto;
      text-align: center;
    }

    p {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.secondary};
    }
  }

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

  @media (max-width: 1000px) {
    .section {
      width: 60%;
    }
    .hero {
      margin: 0;
      /* min-height: 100vh; */
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
      /* margin-bottom: 2rem; */
      text-align: center;
      padding: 1rem !important;

      h2 {
        margin: 1rem 0;
      }
    }

    /* .main-btn {
      margin: 1rem auto !important;
    } */

    .blending-in {
      display: flex !important;
      flex-direction: column !important;

      .blendingIn-Image {
        width: 100% !important;
        padding: 0;
        margin: 0 auto;
      }
    }
  }
`;
