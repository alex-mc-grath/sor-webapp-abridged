import styled, { keyframes } from 'styled-components/macro';
// import { woo } from '../../../layouts/BubbleMenu/keyframeAnimation';

export const StyledHomepage = styled.div`
  /* // Mobile */
  @media (max-width: 1000px) {
    .circle button  {
      /* font-size: 40px !important; */
    }
  }
  /* // */

  &::before {
    content: '';
    width: 100%;
    height: 100vh;
    background: #000;
  }

  .gradient-color {
    /* background: -webkit-linear-gradient(120deg,#110a2e,  #110a2e, #0e2967, #1c0e93, #110a2e); */
    background: -webkit-linear-gradient(120deg, #0e2967, #0e2967, #0e2967);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  .gradient-color2 {
    background: -webkit-linear-gradient(-120deg, #110a2e, #1f4df1, #0e2967);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .gradient-color3 {
    /* background: -webkit-linear-gradient(120deg, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.tertiary}, ${(props) => props.theme.colors.secondary});; */
    background: -webkit-linear-gradient(-120deg, #110a2e, #1f4df1, #0e2967);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  .author {
    font-size: 1.8rem;
  }
`;
