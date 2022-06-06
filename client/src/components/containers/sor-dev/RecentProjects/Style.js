import styled, { css } from 'styled-components/macro';

export const StyledRecentProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #292929;
  width: auto;
  margin: 0;
  min-height: 100vh;
`;

export const StyledProject = styled.div`
  /* // Mobile */
  @media (max-width: 1000px) {
    .screenshots {
      flex-direction: column !important;
      margin: 2.5rem auto !important;
    }
  }

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  width: 90%;
  min-height: 60vh;
  border-radius: 10px;
  color: black;
  padding: 2rem;
  /* height: 80%; */

  button.arrows {
    position: absolute;
    border: none;
    padding: 1rem;
    color: grey;
    border-radius: 50%;

    &:hover {
      background: ${(props) => props.theme.colors.primary};
      transition: all 275ms ease;
      color: white;
    }

    &:nth-of-type(1) {
      left: 1rem;
    }
    &:nth-of-type(2) {
      right: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .screenshots {
      margin-top: 1rem;
      width: 100% !important;
      img {
        width: 100% !important;

        &:not(:first-of-type) {
          margin-top: 10px;
        }
      }
    }
  }

  > div {
    margin: auto 2rem;
  }

  .screenshots {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 50%;

    img {
      width: auto;
      height: fit-content;
      max-width: 50%;
      border-radius: 10px;
      margin: 0 1rem;
    }
  }

  h3 {
    margin: 0;
    font-size: 2.5rem;
  }

  .desc {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  ul {
    font-size: 1.4rem;

    li {
      list-style-type: bullets;
      background: #292929;
      padding: 0.1rem 0.4rem;
      border-radius: 4px;
      margin: 0.6rem 0;
      width: fit-content;
      border: 2px solid transparent;

      &:hover {
        cursor: pointer;
        border: 2px dotted lightblue;
        color: lightblue;
      }

      /* // test */

      position: relative;
      /* display: inline-block; */
      /* font-size: 2em; */
      font-weight: 800;
      color: royalblue;
      overflow: hidden;
      background: linear-gradient(to right, midnightblue, midnightblue 50%, royalblue 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
      transition: background-position 275ms ease;
      text-decoration: none; // text decorations are clipped in WebKit browsers
      &:hover {
        background-position: 0 100%;
      }
    }
  }

  .links {
    width: fit-content;
    font-size: 1.2rem;
    margin: auto;
    margin-top: 2rem;

    a {
      margin-right: 1rem;
      background: ${(props) => props.theme.colors.primary};
      padding: 1rem 2rem;

      &:nth-of-type(2) {
        margin-left: 0rem;
      }

      &:hover {
        cursor: pointer;
        color: blue;
      }
    }
  }
`;
