import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
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


export default buttonStyles;
