import styled from 'styled-components';

export const StyledLogin = styled.div`
  background: #22242b;
  color: #727f89;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1000px) {
    form {
      max-width: 500px;
    }
  }

  .forgot-password {
    margin-left: auto;
    cursor: pointer;
    font-size: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 70%;
    background: #22242f;
    padding: 2rem;
    height: 50vh;
    font-size: 1.5rem;

    .group {
      display: flex;
      flex-direction: column;

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
        border-radius: 4px 4px 0 0;
        margin-bottom: 2px;
        padding: 0.3rem 0.5rem;
        cursor: pointer;
        font-size: 1.5rem;

        &:nth-of-type(2) {
          border-radius: 0;
        }

        &:focus {
          outline: none;
        }
      }
    }

    button {
      background: #292c6d;
      color: #161853;
      border: none;
      border-radius: 0 0 4px 4px;
      padding: 0.3rem 0.5rem;
      transition: 0.2s all ease-in-out;

      &:hover {
        color: white;
        transition: 0.3s all ease-in-out;
      }
    }
  }
`;
