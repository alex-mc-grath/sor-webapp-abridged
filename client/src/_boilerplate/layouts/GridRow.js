import styled, { css } from 'styled-components';

export const GridRow = styled.div`
  display: grid;
  /* grid-template-columns: ${(props) => props.col} */
  grid-template-columns: repeat(${(props) => props.col}, minmax(0, 1fr));
  ${(props) => props.colTemplate && `grid-template-columns: ${props.colTemplate};`}
  grid-gap: ${(props) => props.gridGap || '2rem'};
  margin: ${(props) => props.margin || "2.5rem 0"};
  width: ${props=>props.width || '100%'};
  height: ${props=>props.height};
  text-align: ${props=>props.textAlign};

  @media (max-width:50rem){
  ${props=>props.mobile && css`
      grid-template-columns: 1fr;
  `}
  }
`;
