import styled from 'styled-components';

export const StyledResources = styled.article`
    display:flex;
    flex-direction:column;
    margin-top: 10vh;
`;

export const Wrapper = styled.div`
    width:100%;
    background: orange;
    display:grid;
    grid-template-columns: 1fr;
    /* flex-direction:column; */

    @media(min-width:900px){
        width:80% !important;
        height: 80%;
        margin:auto;
        grid-template-columns: 1fr 1fr;
    }
`

export const StyledResourceThumbnail = styled.div`
        width: 85%;
        height: 30rem;
        margin:.2rem auto;
        background: darkblue;
        border: 2px solid white;
`;