import styled, { css } from 'styled-components';
import Button from '../Button';

// let mainColorGradient1 = `${props=>props.theme.colors.primary}, ${props=>props.theme.colors.black}, ${props=>props.theme.colors.primary}`

// TODO
// BUTTON STATES = active, hover, pressed, disabled

export const MainButton = styled(Button)`
  padding: 0.75rem 4.0rem;
  border: none;
  outline: none;
  position: relative;
  z-index: 1;
  border-radius: 5rem;
  width:${props=>props.width};
  /* background: linear-gradient(to right, ${props=>props.theme.colors.primary}, ${props=>props.theme.colors.black}, ${props=>props.theme.colors.primary}); */
  background: radial-gradient(780px at 37.8% 100.3%, rgb(19, 55, 115) 2.2%, rgb(32, 7, 80) 20.2%, rgb(27, 88, 111) 58.6%, rgb(115, 88, 44) 75%, rgb(99, 19, 90) 89.6%, rgb(12, 51, 76) 96.1%);

  &::before {
    content: "";
    position: absolute;
    left: .15rem;
    right: .15rem;
    top: .15rem;
    bottom: .15rem;
    /* border-radius: .4rem; */
    border-radius: 4rem;
    background-color: white;
    z-index: -1;
    transition: 200ms
  }

  &::after {
    content: '${props=>props.text}';
    font-size: 1.6rem;
    /* background: linear-gradient(to left, ${props=>props.theme.colors.primary}, ${props=>props.theme.colors.black}, ${props=>props.theme.colors.primary}); */
    background: radial-gradient(780px at 37.8% 100.3%, rgb(19, 55, 115) 2.2%, rgb(32, 7, 80) 20.2%, rgb(27, 88, 111) 58.6%, rgb(115, 88, 44) 75%, rgb(99, 19, 90) 89.6%, rgb(12, 51, 76) 96.1%);
    -webkit-background-clip: text;
    color: transparent;
    transition: 200ms
  }

&:hover::before {
  opacity: 10%;
  top: .0rem;
  right: .0rem;
  bottom: .0rem;
  left: .0rem;
}

&:hover::after{
  color: white;
}
`;
