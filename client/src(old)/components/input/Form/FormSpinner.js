import styled from 'styled-components/macro';

const FormSpinner = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: auto;
  margin-top: 0.2rem;

  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 4px;
    border-radius: 50%;
    border: 3px solid ${({theme}) => theme.colors.highlight};
    border-color: ${({theme}) => theme.colors.highlight} transparent ${({theme}) => theme.colors.highlight} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default FormSpinner;