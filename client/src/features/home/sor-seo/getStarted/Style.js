import styled from 'styled-components';

export const Layout = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    min-height:70vh;
    width: 100%;
    align-items:center;
    margin:auto;
    /* padding: 4rem; */
    background: linear-gradient(-30deg, #000000,#130F40,#000000);  
    color:white;
    
    p{
            text-align:center;
    }

    
    button{
        position:relative;
        display:flex;
        justify-content:center;
        width:100%;
        height: 4rem;
        /* color:white; */
        margin: 0 1.4rem;
        padding: 0 0.4rem;
        /* margin: 1rem 3rem; */
        text-align:center;
        /* box-shadow: #fafafa -2px 1px 12px; */
        box-shadow: black -2px 1px 12px;
        transition: all 0.5s cubic-bezier(0.55, 0.055, 0.675);


        &:hover{
            box-shadow: black -2px 1px 6px;
            transition: all 0.5s cubic-bezier(0.55, 0.055, 0.675);
        }

        i{
            position:absolute;
            right: -5rem;
        }
    }

    @media(min-width: 800px) {
        /* width:50%;
        margin:0;
        margin-left: 6rem;
        margin-right:auto;
        min-height:70vh; */

        >div{
        flex-direction:row;
    }
    }
`;