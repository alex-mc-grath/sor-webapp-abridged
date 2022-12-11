import styled from 'styled-components/macro'

const ErrorDiv = styled.div`
    display: block;
    width: 100%;
    max-width: 1200px;
    background: ${({theme}) => theme.colors.error};
    color: ${({theme}) => theme.colors.bright};
    text-align: center;
    border-radius:9px;
    font-weight: 500;
    padding: 0.2rem;
    margin-bottom:1rem;
`;

export default ErrorDiv;