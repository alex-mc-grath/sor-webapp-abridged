import styled from 'styled-components';

export const StyledLogin = styled.div`
position:relative;
  background: #22242b;
  
  color: #727f89;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #171717;
  background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a);
  background: ${props => props.theme.colors.secondaryShade1};
    color:white;

  
    h2{
      background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a);
      -webkit-background-clip: text;
      color: #fafafa;
      font-size: 3rem;
      font-family:'Source Sans Pro';
      font-weight:medium; 
    }
/* 
  @media (min-width: 1000px) {
    form {
      max-width: 500px;
    }
  } */

  .forgot-password {
    margin-left: auto;
    margin-top: 0.4rem;
    cursor: pointer;
    font-size: 1rem;
  }

  form {
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 75%;
    background: #222252;
    background: #222222;
    padding: 4rem;
    border-radius: 1rem;
    /* background: #0e2967;
    height: 50vh;
    font-size: 1.75rem;
    /* background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a); */
    
    >div>div{
      width:100%;
    }

      /* remove form autocomplete */
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
        -webkit-transition-delay: 9999s;
      }

      input {
        color: #727f89;
        background: #2c2e35;
        border: none;
        border-radius: .4rem .4rem 0 0;
        margin:auto;
        margin-bottom: .34rem;
        padding: 1.3rem 1.5rem;
        cursor: pointer;
        font-size: 1.55rem;
        width:100%;
        /* height: 3.3rem; */

        &::placeholder{
          font-size:1.55rem;
        }

        &:nth-of-type(2) {
          border-radius: 0;
        }

        &:focus {
          outline: none;
        }
      }


    /* button {
      background: #292c6d;
      color: #161853;
      border: none;
      width: 100%;
      margin:0 auto;
      border-radius: 0 0 4px 4px;
      padding: 0.3rem 0.5rem;
      transition: 0.2s all ease-in-out;
      font-size: 1.75rem;

      &:hover {
        color: white;
        transition: 0.3s all ease-in-out;
      }
    } */
  }


  @media (min-width: 768px) {



    form{
    width: calc(668px + 16px * 2);
    max-width: none;
    display: flex;
  }
  }
`;



export const StyledFormError = styled.p`
position: absolute;
bottom:0;
left:50%;
width:84%;
transform:translateX(-50%);
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.2rem;
`

export const StyledFieldError = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.colors.error};
  font-size: 1.2rem;
  top:25%;
  right:.6rem;
  transform:translateY(-50%);


    /* top:0; */

`
