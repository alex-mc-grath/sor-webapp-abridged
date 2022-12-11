import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  max-width: 1200px;
  margin: auto;
  width: ${(props) => props.width || 'auto'};
`;
