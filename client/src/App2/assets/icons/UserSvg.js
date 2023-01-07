import styled, { css } from 'styled-components';

const StyledUserSvg = styled.svg`
  width: 20px;
  height: fit-content;

  ${props=>props.darkText && css`

  circle, path {
    stroke: black;
  }

`
}

`

export const UserSvg = ({...props}) => (
  <StyledUserSvg {...props} xmlns='http://www.w3.org/2000/svg' width='88' height='91.5' viewBox='0 0 88 91.5'>
    <circle cx='44' cy='25.5' r='23' fill='none' stroke='#fff' strokeMiterlimit='10' strokeWidth='5' />
    <path d='M2.5,90.1v-11c0-11.4,11.65-20.64,26-20.64h31c14.36,0,26,9.24,26,20.64V91.5' fill='none' stroke='#fff' strokeMiterlimit='10' strokeWidth='5' />
  </StyledUserSvg>
);
