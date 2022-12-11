import styled from 'styled-components';

export const Row = styled.div`
  display: flex;

  width: ${(props) => props.width};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin || '2rem auto'};
  margin-right: ${(props) => props.marginRight || ''};
  gap: ${({gap}) => gap || "1rem"};
`;
