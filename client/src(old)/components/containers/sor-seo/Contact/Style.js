import styled from 'styled-components';

export const StyledContact = styled.div`
        display: flex;
        background: white;
        min-height:100vh;
        background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a);
        color: white;

            

  hr{
    background:-webkit-linear-gradient(-120deg, $secondary-color, #1f4df1);
    height: 2px;
    border:none;
    width: 15%;
  }

  form {
    display: flex;
    flex-direction:column;
    /* background: #fafafa; */
            width:100%;
            max-width: 800px;
            margin:auto;
            padding: 2rem 3rem;
    width: 100%;

    div > * {
      display: flex;
    }


      label {
        width: 75%;
        margin-bottom: 1rem;
        background: -webkit-linear-gradient(-120deg, $secondary-color, #1f4df1);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

  input{
        font: inherit;
        border: none;
        /* width: 50vw; */
        width:85%;
        height: 3rem;
        margin:auto;
        background: #fafafa;
        border-radius: 3px;
        font-weight: 100;
        border-bottom: 2px solid transparent;

        &:focus{
            outline:none;
            border-bottom: 2px solid green;
        }
      } 
    /* } */
    /* input[type="submit"] {
      background: #fafafa;
      color: grey;
      border: none;
      border-radius: 50px;
      padding: 2rem 4rem;
      margin-top: 2rem;
      background: #e0e0e0;
      box-shadow: 20px 20px 60px #e9e8e8, -20px -20px 60px #ffffff;
      background: -webkit-linear-gradient(-120deg, $secondary-color, #1f4df1);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      font-size: inherit;

      &:hover{
        color:${props=>props.theme.colors.primary};
        /* box-shadow: -webkit-linear-gradient(-120deg, green, #1f4df1); */
        box-shadow: 2px 5px 7px 2px rgba(33,33,33,.1); 
        
      }

      &:active{
        /* box-shadow: 2px 5px 11px 2px rgba(33,33,33,.4);  */
      }
    } */
  }
        }
`;