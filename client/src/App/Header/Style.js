import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
    position:absolute;
    width:100%;
    height: 15vh;
    padding: 0 .9rem;
    padding-left:.3rem;

    background: ${props=>props.darkBg ? 'linear-gradient(40deg, ${(props) => props.theme.colors.secondary} 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary})' : ''};

    svg{
        margin-top:.4rem;
    }



  ${(props) =>
    props.darkBg === 'true' &&
    css`
      background: linear-gradient(40deg, ${(props) => props.theme.colors.secondary} 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});

    `}
`;