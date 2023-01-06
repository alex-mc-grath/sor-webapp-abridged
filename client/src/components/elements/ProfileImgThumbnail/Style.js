import styled from 'styled-components/macro';

export const Style = styled.div`
    position:${props=>props.position};
    /* top:1.1rem;
    right:2rem; */
    border: .3rem solid ${props=>props.openMenu ? props=>props.theme.colors.secondary : props=>props.theme.colors.secondary};
    box-shadow: 0px 10px 49px rgba(0, 0, 0, 0.13);
    border-radius: 50%;
    height: ${props=>props.height || '7.5rem'};
    width: ${props=>props.width || '7.5rem'};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props=>props.background || '#f7f7f7'};

    margin:auto 0;
    margin-left: ${props=>props.marginLeft};
    margin-right: ${props=>props.marginRight};

    img{
        /* height: 5rem; */
        width: 5rem;
    }
`;