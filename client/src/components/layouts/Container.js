import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }

  display: flex;
  justify-content: center;
  width: ${props=>props.width ? props.width : 'auto'};
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  > div {
    padding: 2rem 0;
  }
`;
