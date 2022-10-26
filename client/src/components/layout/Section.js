import styled from 'styled-components';

export const Section = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width:100%;
    background: ${props=>props.background};
    min-height: ${props=>props.height || '100vh'};
`;