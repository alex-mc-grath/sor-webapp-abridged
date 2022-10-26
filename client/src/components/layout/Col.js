import styled from 'styled-components/macro';

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align  || 'center'};
  margin: ${(props) => props.margin || '2rem auto'};
  width: ${(props) => props.width || '100%'};
  padding: ${(props) => props.padding || '0 1rem'};
`;
