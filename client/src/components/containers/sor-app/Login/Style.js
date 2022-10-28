import styled from 'styled-components';

export const StyledLogin = styled.div`
position:relative;
  background: #22242b;
  
  color: #727f89;
  height: 96.89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #171717;
  background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a);
  
    color:white;

  
/* 
  @media (min-width: 1000px) {
    form {
      max-width: 500px;
    }
  } */

  .forgot-password {
    margin-left: auto;
    cursor: pointer;
    font-size: 1rem;
  }

  form {
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 95%;
    background: #0e2967;
    background: #1a1a40;
    
    padding: 2rem;
    height: 50vh;
    font-size: 1.5rem;
    border-radius: 1rem;
    /* background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a); */
    

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
        padding: 0.3rem 0.5rem;
        cursor: pointer;
        font-size: 1.75rem;
        width:100%;
        height: 3.3rem;

        &::placeholder{
          font-size:1.75rem;
        }

        &:nth-of-type(2) {
          border-radius: 0;
        }

        &:focus {
          outline: none;
        }
      }


    button {
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
    }
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
width:80%;
transform:translateX(-50%);
  background: ${({theme}) => theme.colors.error};
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
  padding: 0.5rem;
`

export const StyledFieldError = styled.p`
  color: ${({theme}) => theme.colors.error};
  font-size: 1.2rem;
`
