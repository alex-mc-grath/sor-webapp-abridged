import styled from 'styled-components';

export const StyledPortfolio = styled.div`
        height:85vh;
        padding: 4rem;
        padding-top:15vh;
`;


export const StyledPortfolioItem = styled.div`
    background: ${props=>props.background || props.theme.colors.primary};
    /* height: 100%; */
    margin: 4rem auto;
    border-radius:1rem;
    padding: 2rem;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;

    /* ::before{
            content:'';
            position:absolute;
            background:#000;
            width: 100px;
            height:100px;
        } */

img{
    padding-top: 3.4rem;
    width: 120%;
}

    .logo{
        position:relative;
        width: 10rem;
        max-width: 12rem;
        height: 4rem;
        background-size:contain;
        background-repeat:no-repeat;

        &::before{
            content:'';
            position:absolute;
            background:white;
            width: 100%;
            height:.4rem;
            z-index:1;
            bottom: -1rem;
        }
    }

    .badges{

        >*{
        background:white;
        color: ${props=>props.theme.colors.primary};
        margin: 0 .25rem;
        padding: 0.4rem .6rem;
        border-radius: .5rem;
        font-weight:bold;
    }
    }

    @media(min-width:700px){
        img{
    padding-top: 3.4rem;
    width: 80%;
    max-width: 60rem;

}
    }
`;