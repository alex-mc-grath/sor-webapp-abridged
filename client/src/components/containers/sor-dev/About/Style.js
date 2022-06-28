import styled from 'styled-components';

// export const StyledAbout = styled.article`
//   color: white;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
// `;

export const StyledAbout = styled.article`
  background: #000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 200%;

  > * {
    width: 60%;
    margin: auto;
  }
`;
