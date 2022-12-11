import styled from 'styled-components';

export const Loader = styled.div`
  display: inline-block;
  width: ${({sizeRatio = 1}) => (80*sizeRatio).toFixed(2)}px;
  height: ${({sizeRatio = 1}) => (80*sizeRatio).toFixed(2)}px;
  margin: auto;
  margin-top: ${({sizeRatio = 1}) => (3*sizeRatio).toFixed(2)}rem;

  &:after {
    content: ' ';
    display: block;
    width: ${({sizeRatio = 1}) => (64*sizeRatio).toFixed(2)}px;
    height: ${({sizeRatio = 1}) => (64*sizeRatio).toFixed(2)}px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
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
