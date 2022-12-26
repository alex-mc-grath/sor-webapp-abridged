import styled from 'styled-components';

export const TempGreyPlaceholder = styled.div`
    position:relative;
    color:black;
    background: lightgrey;
    width:100%;
    height:${props=>props.height || "23rem"};

    &::before{
        content:'${props=>props.title}';
        position:absolute;
        top: 2rem;
        left: 2rem;

    }
    
`;