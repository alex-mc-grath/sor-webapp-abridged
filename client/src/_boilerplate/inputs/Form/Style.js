import styled from 'styled-components';

export const StyledReactForm = styled.div`
  background: transparent;
  background: ${props=>props.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: ${props=>props.height};
`;
