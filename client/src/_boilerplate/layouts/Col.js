import styled, { css } from 'styled-components';

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align};
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '2rem auto'};
  padding: ${(props) => props.padding};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop || ''};
  transform: ${props => props.transform};

 
  ${props => props.mobile && css`
        width: 100%;
        align-items:center;
    `}


/* this, underneath, is the proper way =>always mobile first, with exceptions for desktop
what are theses exceptions? So far I got:
- Col: need to be column for both page layout and component layout, and  */


  @media (min-width:600px){
       
  }
`;
