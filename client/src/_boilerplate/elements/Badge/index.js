import styled from 'styled-components';

export const Badge = styled.span`
    background: ${props=>props.theme.colors.secondary};
    color:white;
    padding: 0.3rem 1.8rem;
    margin: 0.2rem;
    border-radius:1.5rem;
    font-size: 1.2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 1.8rem;
`;