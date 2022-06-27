import { keyframes } from 'styled-components/macro';

export const woo = (props) => keyframes`
0%{
  transform: scale(1);
  color: ${props.theme.colors.secondary};
  letter-spacing:auto;
  letter-spacing:2px;
}
33%{
  transform: scale(1.2);
  color: ${props.theme.colors.primary};
  /* letter-spacing:4px; */
}
66%{
  transform: scale(1.4);
  color: ${props.theme.colors.tertiary};
  letter-spacing:4px;
}
100%{
  transform: scale(1);
  color:white;
  letter-spacing:2px;
}
`;