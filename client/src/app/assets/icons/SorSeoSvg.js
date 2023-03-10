import React from 'react'
import styled from 'styled-components';

const StyledSorSeoSvg = styled.svg`
    /* position: ${props => (props.variant === 'uno' ? 'relative' : 'absolute')};; */
    top: ${props => (props.variant === 'uno' ? '0' : '0rem')};
    right: ${props => (props.variant === 'uno' ? '0' : '0rem')};
    transform:${props => (props.variant === 'uno' ? 'scale(0.4)' : 'scale(0.7)')};;
    transition: .3s ease-in-out;

    fill: ${props => (props.variant === 'uno' ? 'blue' : 'transparent')};
z-index:10;

    &:hover{
        transform: ${props => (props.variant === 'uno' ? 'scale(.7)' : 'scale(.8)')};
        transition: .3s ease-in-out;
        transition: .4s ease-in-out;
        cursor:pointer;
        border-radius: 200%;
        /* box-shadow: 0 2px 2px 2px ${props=>props.theme.colors.primary}; */
        /* box-shadow: 0 1px 1px rgba(155,155,155,0.12), 
              0 2px 2px rgba(155,155,155,0.12), 
              0 4px 4px rgba(155,155,155,0.12), 
              0 8px 8px rgba(155,155,155,0.12),
              0 16px 16px rgba(155,155,155,0.12); */
    }
`;

export const SorSeoSvg = (props) => {
  return (
<StyledSorSeoSvg {...props} xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84">
<defs><linearGradient id="a" x1="42" y1="83" x2="42" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d74e55"/><stop offset="0.5" stopColor="#1c0e93" stopOpacity="0.3"/><stop offset="1" stopColor="#a3eabe"/></linearGradient><linearGradient id="b" x1="84" y1="42" x2="0" y2="42" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d74e55"/><stop offset="0.5" stopColor="#1c0e93"/><stop offset="1" stopColor="#a3eabe"/></linearGradient></defs>
    <g><circle cx="42" cy="42" r="41" strokeMiterlimit="10" strokeWidth="2" fill="url(#a)" stroke="url(#b)"/>
        <image width="64" height="64" transform="translate(23 7)" opacity="0.05" xlinkHref="data:image/png;base64,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"/>
        <path d="M67,21.12a4,4,0,0,1,2.53,5.16c-1,2.78-3.23,6.36-5.76,10.1-4.58,7.51-8.71,13-12,14.94a3.64,3.64,0,0,1-2.81.39c-3.05-.85-4.74-4.92-3.09-10.71C49,28.51,53.57,22.17,59.43,21.39A33,33,0,0,1,66.2,21a3.24,3.24,0,0,1,.75.11Z" fill="#a3eabe"/>
        <path d="M69.7,19.14a.22.22,0,0,0,.13-.38,8.67,8.67,0,0,0-3.29-1,84.72,84.72,0,0,0-10.39-.48c-1.95,0-.81,1.47-.37,1.84C56.54,19.76,69.7,19.3,69.7,19.14Z" fill="#a3eabe"/>
        <path d="M52.82,18.13c-1.2,1.38-3.57,2.23-6.92,3.19a.19.19,0,0,1-.13-.36c2.49-1.24,4.91-2.32,6.84-3.14A.19.19,0,0,1,52.82,18.13Z" fill="#a3eabe"/>
        <path d="M34.23,33.18c0,3.63,3.58,8.2,5.94,9.06a1.5,1.5,0,0,0,1,0c.59-.19,1.48-.53,2.65-3.11.84-1.86,2-5.7,2.75-7.31C48,28.71,48.92,26,48.82,24.07a1.58,1.58,0,0,0-1.7-1.51c-3.46.32-7.8,4.23-12.48,9.53A1.68,1.68,0,0,0,34.23,33.18Z" fill="#a3eabe"/>
        <path d="M37.33,26.56a16.1,16.1,0,0,1-7.18,4.17.28.28,0,0,1-.18,0,7,7,0,0,1-3.71-2.48.33.33,0,0,1,.17-.47A35.05,35.05,0,0,1,37.12,26,.32.32,0,0,1,37.33,26.56Z" fill="#a3eabe"/>
        <path d="M25.52,31.66a99.87,99.87,0,0,1-11.92-.27.51.51,0,0,1-.1-1A28.82,28.82,0,0,1,21,29h.06a7,7,0,0,1,4.79,1.78A.51.51,0,0,1,25.52,31.66Z" fill="#a3eabe"/>
        <path d="M30,36.17a12.1,12.1,0,0,1-4.41.63.6.6,0,0,1-.5-.37,2.37,2.37,0,0,1,0-1.8.55.55,0,0,1,.54-.37,8.34,8.34,0,0,1,4.43,1.39A.29.29,0,0,1,30,36.17Z" fill="#a3eabe"/>
        <path d="M23,34c-1.49-.58-4.87-.66-9.13-.51a.35.35,0,0,0-.13.66,21.82,21.82,0,0,0,6.18,1.77h0a4,4,0,0,0,3.21-1.18A.45.45,0,0,0,23,34Z" fill="#a3eabe"/>
        <path d="M12.72,35.63c6.34,1.09,11,5.67,14.45,13a.54.54,0,0,1-.76.71C22.9,47.06,14,39.38,12.18,36.47A.55.55,0,0,1,12.72,35.63Z" fill="#a3eabe"/>
        <path d="M26,42.34a22.07,22.07,0,0,0,5.16,8.59,2.87,2.87,0,0,0,2.11,1h.69a2.84,2.84,0,0,0,1.89-.74l1.41-1.26a3.09,3.09,0,0,0,.87-3.18c-1.38-4.54-3.15-7.05-5.12-8.54a2.81,2.81,0,0,0-2.09-.56,9.37,9.37,0,0,0-3.59,1.27A3.05,3.05,0,0,0,26,42.34Z" fill="#a3eabe"/>
        <path d="M47.14,53.73a17.12,17.12,0,0,1-3,.58.29.29,0,0,1-.31-.37c.24-1,.7-1.69,1.65-1.7a3.27,3.27,0,0,1,1.7,1A.3.3,0,0,1,47.14,53.73Z" fill="#a3eabe"/>
        <path d="M39.44,52.16a4.53,4.53,0,0,1,.29,1.8.46.46,0,0,1-.41.45A7.39,7.39,0,0,1,36.21,54a.48.48,0,0,1-.14-.81A5.28,5.28,0,0,1,39,51.86.44.44,0,0,1,39.44,52.16Z" fill="#a3eabe"/>
        <path d="M43.66,74.73c-1.3-2.46-.9-12.48-.36-18.24a5.41,5.41,0,0,1,5.06,2.62A30.81,30.81,0,0,1,43.66,74.73Z" fill="#a3eabe"/>
        <path d="M40.17,56.74a89.63,89.63,0,0,1,.24,18c-3.52-5.78-5.34-11-4.93-15.37C36.27,57.58,37.85,56.73,40.17,56.74Z" fill="#a3eabe"/>
    </g>
</StyledSorSeoSvg>)
}

