import styled, { css } from 'styled-components';

export const Label = styled.span`
color:#505050;
font-size: ${props=>props.fontSize || '1.3rem'};
font-weight: 600;
text-align:center;

${props=>props.active && css`
    color: ${props=>props.theme.colors.secondary};
`}
`
