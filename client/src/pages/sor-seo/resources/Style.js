import styled, { css } from 'styled-components';

export const StyledResources = styled.article`
    display:flex;
    flex-direction:column;

    h1{
        width: 85%;
        font-size:3.4rem;
        margin-left:4rem;
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
        grid-gap:2rem;
    }
`

export const StyledResourceThumbnail = styled.div`
        width: 100%;
        /* height: 30rem; */
        margin:.8rem auto;
        margin-bottom: 2rem;
        background:white;
        position:relative;
        box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
        border-radius:1.2rem;
        cursor:pointer;


        img{
            display:block;
            width: 100%;
            /* height:50%; */
            background: ${props => props.img};
            border-radius:1.2rem;
            
        }

        img{
            border-bottom: .075rem solid #1f497e;
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
    border: .2rem solid #1f497e;
    color: #1f497e;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight:bold;

    &.small{
        /* background: #000; */
        font-size: 1rem;
    }
        }

  .title{
            font-weight:bold;
            font-size: 1.4rem;
            color:#1f497e;
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
            letter-spacing:-.5px;
            
        }
`;