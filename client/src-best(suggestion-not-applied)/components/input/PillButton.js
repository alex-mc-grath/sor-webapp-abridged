import styled from 'styled-components/macro'

export const PillButton = styled.button`
    background:${({background, theme}) => theme.colors[background] || theme.colors.lightBody};
    color:${({color, theme}) => theme.colors[color] || theme.colors.fadedText};
    border:none;
    border-radius:1rem;
    padding: 0.2rem 0.4rem;

    &:hover {
        padding: 0.1rem 0.3rem;
        border: solid 0.1rem ${({color, theme}) => theme.colors[color] || theme.colors.fadedText};
    }
`