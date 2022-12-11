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

  /* padding-top:15vh; */


  /* COPIED FROM CTABUTTON type gradient */
  a.main-btn{

    position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        width: ${props=>props.width || '100%'};
        margin: ${props=>props.margin || '0 1.4rem'};
        height: 4rem;
        color:white;
        /* margin: 0 1.4rem; */
        padding: 0 0.4rem;
        font-size: 1.25rem;
        font-weight:bold;
        text-transform:uppercase;
        /* margin: 1rem 3rem; */
        text-align:center;
        /* box-shadow: #fafafa -2px 1px 12px; */
        box-shadow: black -2px 1px 12px;
        

        background: linear-gradient(40deg, ${(props) => props.theme.colors.secondary} 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;

        transition: all 0.5s cubic-bezier(0.55, 0.055, 0.675);

        &:hover{
            box-shadow: black -2px 1px 6px;
            background: linear-gradient(40deg, ${(props) => props.theme.colors.secondary} calc(10% - 1px), #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
            /* background: linear-gradient(7deg, currentColor calc(50% - 1px), transparent 50%); */
            background-clip: unset;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
            -webkit-box-decoration-break: unset;
            box-decoration-break: unset;
            color:#0e2967;
            transition: all 0.5s cubic-bezier(0.55, 0.055, 0.675);
        }

        i{
            position:absolute;
            right: -5rem;
        }
  }


@media (min-width:900px){
  div{
    width: 70%;
  }
}
`;
