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
  min-height:100vh;
  padding-top:10vh;

  ul{
    padding:0;
    margin-right:auto;
    margin-left: 2rem;
    font-size: 1.4rem;
  }

  h1{
    margin-bottom:0;
    margin-right:auto;
    font-size: 3.6rem;
    text-align:left;
  }

  h4{
width:100%;
  }


@media (min-width:900px){
 
}
`;
