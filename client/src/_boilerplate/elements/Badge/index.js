import styled from 'styled-components';

export const Badge = styled.span`
    background: ${props=>props.theme.colors.primary};
    color:white;
    padding: 0.4rem 2rem;
    margin: 0.5rem;
    border-radius:1.5rem;
    font-size: 1.3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 1.8rem;
`;