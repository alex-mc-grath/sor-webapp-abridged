import styled from 'styled-components';

// import buttonStyles from './buttonStyles';

const StyledButton = styled.button`
  
  display: flex;
  justify-content:center;
  align-items:center;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.3rem 1.5rem;
  cursor: pointer;
  font-weight: bold;

  /* margin: auto 0rem; */
  /* border: 2px solid ${(props) => props.theme.colors.secondary}; */
  /* border-radius: 8px; */
  /* transition: ${({ theme }) => theme.transitionSpeed} all ease-in-out; */

  svg,
  i {
    margin-left: 0.4rem;
  }

  /* &:hover,
  &:active {
    color: ${(props) => props.theme.colors.secondary};
  } */
`;

export default StyledButton;
