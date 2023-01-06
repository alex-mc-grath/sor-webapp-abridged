import styled from 'styled-components';

export const Layout = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    min-height:70vh;
    width: 90%;
    align-items:flex-start;
    margin:auto;

    button{
        /* color:white; */
        background: none !important;
        &:last-of-type {
        background: none !important;
        }
    }


    @media(min-width: 800px) {
        width:50%;
        margin:0;
        margin-left: 11rem;
        margin-right:auto;
        min-height:70vh;
    }
`;