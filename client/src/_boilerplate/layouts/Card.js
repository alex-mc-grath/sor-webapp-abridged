import styled from 'styled-components';

export const Card = styled.div`
  position:relative;
  display: flex;
  flex-direction: ${(props) => (props.direction) || 'column'};
  justify-content: ${(props) => (props.justify && props.justify) || 'center'};
  align-items: ${(props) => (props.align && props.align) || 'center'};
  padding: ${(props) => props.padding || '2rem 3rem'};
  width: 100%;
  height: ${(props) => props.height};
  background: #ffffff;
  box-shadow: 0px 7px 21px rgba(0, 0, 0, 0.03);
  border-radius: 12px;

  gap: 3rem;

`;
