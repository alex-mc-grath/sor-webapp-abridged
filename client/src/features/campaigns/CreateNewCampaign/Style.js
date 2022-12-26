import styled from 'styled-components'

export const Layout = styled.div`

    h3{
        color: ${props=>props.theme.colors.secondary};
        font-size: 1rem;
        text-transform: uppercase;
    }

    h4{
        color: lightgrey;
        font-size: 1.15rem;
        letter-spacing: 0px;
    }

    h3,h4{
        margin:0;
    }

    .box{
        position:relative;
        background: ${props=>props.theme.colors.secondaryShade1};
        width: 10rem;
        height: 10rem;
        border-radius: 1rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        &:before{
            content:'➡';

            position:absolute;
            color:white;
            top:50%;
            right:-10%;
            transform:translate(-0%,-50%);

            &:last-of-type{
                display:none;
                background: #000;
            }
        }
    }
`;
   