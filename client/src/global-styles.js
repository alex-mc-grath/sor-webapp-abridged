import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    scroll-behaviour: smooth;
    height: 100%;
    width: 100%;
    font-size: 62.5%;
    line-height: 1.5;
    margin:0;
    padding:0;
  }
  
  html, body, #app, #app>div {
  height: 100%
}


  body {
    /* font-family: 'Open Sans','Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-family: 'Plus Jakarta Sans';
    -webkit-font-smoothing: antialiased;
  }

  body.fontLoaded {
    /* font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    /* font-family:'Black Delights Font'; */
  }

  article{
    width: 100%;
  }


  /* // Headings // */

  h1{
    font-size: 4rem;
  }
  h2{
    font-size: 2.8rem;
  }
  h3{
    font-size: 2rem;
  }
  h4{
    font-size: 1.6rem;
  }

  p{
    font-size: 1.5rem;
  }


button {
  cursor: pointer;
}

button:disabled {
  cursor: default;
}

a {
  text-decoration: none;
  color: black;
}

li{
  list-style-type:none;
}

.big-button{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 250px;
    height: 80px;
    border-radius: 55px;
    background: #292C6D;
    margin:auto;
    border: 2px solid transparent;
    transition: .8s all ease-out;
    color:white;
    /* font-size: 1.7rem; */

    &:hover{
    /* background: #161853; */
    border: 2px solid #EC255A;
    color: #292C6D;
    cursor:pointer;
    transition: .3s all ease-in-out;
    }
}

.page-nav-button{
  display:flex;
  color:#292C6D;
  width:fit-content !important;
  font-size:1.4rem;
  margin-right:1rem;
  margin-left: auto;
  margin-top: 1rem;
  /* padding: 1rem; */
  width:auto;
  justify-content:flex-end;
  align-items:center;
  transition: .8s all ease-out;
  border: none;
  background: transparent;

  &:hover{
    /* background: #161853; */
    color: #292C6D;
    cursor:pointer;
    transition: .3s all ease-in-out;
    }
}


`;

export default GlobalStyle;
