import styled from 'styled-components';

export const Layout = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    /* min-height:70vh; */
    width: 100%;
    height: 80vh;
    padding: 4rem auto;
    align-items:center;
    margin:auto;
    background: #fafafa;
    

    button{
        color:black;
    }

    h2,p{
        text-align:left;
        /* margin:0 auto; */
        margin-right:auto;
        margin-bottom: 2rem;
        padding: 0 0rem;
    }

    >div{
        /* padding: 4rem; */
    }

    @media(min-width: 800px) {
        width:100%;
        margin:0;
        min-height:70vh;


    }
`;