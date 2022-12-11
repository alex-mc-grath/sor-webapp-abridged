import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  min-height: 100vh;
  margin: auto;
  background: #fafafa;

  @media (min-width: 768px) {
    /* max-width: calc(768px + 16px * 2); */
    max-width: none;
    width: 100%;
    display: flex;
  }
  /* 
  > * {
    flex-direction: column;
  } */
`;

export const Theme = ({ layout }) => {
  return <Wrapper>{layout}</Wrapper>;
};
