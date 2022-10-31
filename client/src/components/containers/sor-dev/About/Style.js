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
  background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top:10vh;

  ul{
    padding:0;
    margin-right:auto;
    margin-left: 2rem;
  }

  h1{
    margin-bottom:0;
    font-size: 3.8rem;
  }

  /* padding-top:15vh; */


@media (min-width:900px){
  div{
    width: 70%;
  }
}
`;
