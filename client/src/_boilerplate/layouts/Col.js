import styled from 'styled-components';

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin || '2rem auto'};
  margin-left: ${(props) => props.marginLeft};
`;
