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

`;
   