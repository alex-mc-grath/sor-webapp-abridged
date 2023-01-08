import styled, { css } from 'styled-components';

export const Row = styled.div`
  display: flex;

  width: ${(props) => props.width};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin || '2rem auto'};
  padding: ${(props) => props.padding};
  margin-right: ${(props) => props.marginRight || ''};
  margin-left: ${(props) => props.marginLeft || ''};
  margin-top: ${(props) => props.marginTop || ''};
  gap: ${({ gap }) => gap || "1rem"};
  flex-wrap: wrap;

  @media (min-width:400px){
    ${props => props.mobile && css`
        flex-direction:column;
        align-items:center;
    `}
  }
`;
