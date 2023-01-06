import styled from 'styled-components';

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align};
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '2rem auto'};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop || ''};
  transform: ${props => props.transform};

  @media (max-width : 600px){
    width:100%;
  }
`;
