import { css } from 'styled-components';

const inputStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  /*margin: 0.4rem 0;*/
  margin: 0rem;
  margin-bottom: 2.5rem;
  margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : ''};
  ${(props) => props.margin && props.margin};
  width: ${(props)=>props.width ? props.width : '100%'};
  border: 2px solid transparent;
  transition: ${({ theme }) => theme.transitionSpeed} all ease-in-out;

  input {
    background: #f3f4f6;
    border-radius: 12px;
    /* border: none; */
    width: 100%;
    margin-top: 0.4rem;
    /*padding: ${(props) => props.padding || '1.2rem 1rem'};*/
    height: 4.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition: ${({ theme }) => theme.transitionSpeed} all ease-in-out;

    &:hover,
    &:active,
    &:focus {
      border: 2px solid transparent;
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
      border-color: ${(props) => props.theme.colors.primary};
      transition: ${({ theme }) => theme.transitionSpeed} all ease-in-out;
    }

    /* // error handling style // */

    ${(props) => props.error ? "border: 1px solid #861724;" : "border: 1px solid transparent;"}
    
    
    /* // alt approach would have been to dynamically add remove class on element directly, with this styling // */
    /* &.error {
      border: 1px solid #861724;
    } */
  }

  textarea{
    ${(props) => props.error ? "border: 1px solid #861724;" : "border: 1px solid transparent;"}
  }
  


  p {
    position: absolute;
    top: 100%;
    right: 0;
    color: #861724;
    font-size: 1.4rem;
    margin: 0;
  }

  label {
    color: #969ba0;
    font-size: 1.4rem;
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

export default inputStyles;
