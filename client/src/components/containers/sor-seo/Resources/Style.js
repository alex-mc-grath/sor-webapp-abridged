import styled from 'styled-components';

export const StyledResources = styled.article`
    display:flex;
    flex-direction:column;
    margin-top: 10vh;

    h1{
        width: 85%;
        font-size:4rem;
    }
`;

export const Wrapper = styled.div`
    width:100%;
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
        width: 100%;
        height: 30rem;
        margin:.8rem auto;
        border: 2px solid white;
        position:relative;


        .img{
            display:block;
            width: 100%;
            height:50%;
            background: #000;
            border-radius:1.2rem;
        }


        .category{
            border-radius: 50%;
    width: 6rem;
    height: 6rem;
    padding: .8rem 1.3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #fff;
    border: .2rem solid #666;
    color: #666;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;

    /* font: 32px Arial, sans-serif; */
            /* position:absolute; */
            /* position:relative;
            display:flex;
            justify-content:center;
            align-items:center;
            text-transform: uppercase;
            font-size: 1.5rem;
            width:6rem;
            height:6rem;
            font-weight:bold;
            color:white;

            &::after{
                position: absolute;
                content:'';
                width:6rem;
                height:6rem;
                border-radius: 50%;
                top:0;
                background: #000;
                z-index:0;
  } */
        }

  .title{
            background: orange;
            font-weight:bold;
            font-size: 1.4rem;

            white-space:normal;
        line-height: 1.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-height: 1.8;        /* fallback */
        max-height: 2*2;       /* fallback */
        }

        .grey{
            font-size: 1.4rem;
            color:#505050;
        }

        p{
            margin:0;
            
        }
`;