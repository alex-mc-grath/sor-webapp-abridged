import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`

/* primary font */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500&display=swap');

/* secondary font */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


*{
  box-sizing:border-box;
}

  html,
  body {
    scroll-behaviour: smooth;
    height: 100%;
    width: 100%;
    font-size: 62.5%;
    line-height: 1.5;
    margin:0;
    padding:0;
    font-family: inherit;

    /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  }

  body {
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6em
  }

  

/* // style resets */

  input{
    font-family:inherit;
  }

  button{
    border:0;
    background:transparent;
  }

  a{
    text-decoration:none;
    color: unset;
    margin:0 !important;
  }
  
`;

export default GlobalStyle;
