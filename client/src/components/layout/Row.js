import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin || '2rem auto'};
  padding: ${(props) => props.padding};
  margin-right: ${(props) => props.marginRight || ''};
`;
