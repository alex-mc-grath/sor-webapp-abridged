import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  margin: auto 0rem;
  padding: 0.3rem 1.5rem;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  /* transition: ${({ theme }) => theme.transitionSpeed} all ease-in-out; */

  svg,
  i {
    margin-left: 0.4rem;
  }

  &:hover,
  &:active {
    /* color: ${(props) => props.theme.colors.secondary}; */
  }
`;

// const buttonStyles2 = css`
//   display: inline-block;
//   box-sizing: border-box;
//   padding: 0.25em 2em;
//   text-decoration: none;
//   border-radius: 4px;
//   -webkit-font-smoothing: antialiased;
//   -webkit-touch-callout: none;
//   user-select: none;
//   cursor: pointer;
//   outline: 0;
//   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   font-weight: bold;
//   font-size: 16px;
//   border: 2px solid #41addd;
//   color: #41addd;

//   &:active {
//     background: #41addd;
//     color: #fff;
//   }
// `;

export default buttonStyles;
