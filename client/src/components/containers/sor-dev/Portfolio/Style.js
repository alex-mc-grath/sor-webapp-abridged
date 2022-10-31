import styled from 'styled-components';

export const StyledPortfolio = styled.div`
        /* background: linear-gradient(-30deg, #000000,#130F40,#000000);   */
        color:white;
        padding: 0 1rem;
        padding-top: 15vh;

        h1{
            color:black;
            margin-bottom:0;
        }
        p{
            color:grey;
            margin:0;
        }
        
        
`;


export const StyledPortfolioItem = styled.div`
    /* background: ${props=>props.background || props.theme.colors.primary}; */
    background: linear-gradient(60deg, #29323c 0%, #485563 100%);
    /* height: 100%; */
    margin: 4rem auto;
    border-radius:1rem;
    padding: 2rem 1rem;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    /* transition: .4s all ease-out; */

    &:hover{
        background: ${props=>props.background || props.theme.colors.primary};
        /* transition: .4s all ease-in-out; */
    }

    /* ::before{
            content:'';
            position:absolute;
            background:#000;
            width: 100px;
            height:100px;
        } */

img{
    padding-top: 3.4rem;
    width:100%;
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