import styled, { css } from 'styled-components';
import Button from '../Button';

// let mainColorGradient1 = `${props=>props.theme.colors.primary}, ${props=>props.theme.colors.black}, ${props=>props.theme.colors.primary}`

// TODO
// BUTTON STATES = active, hover, pressed, disabled

export const MainButton = styled(Button)`
  /* padding: 0.74rem 2.5rem; */
  display:flex;
  padding: 0.72rem 1.85rem;
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  border: none;
  outline: none;
  position: relative;
  z-index: 1;
  width:${props => props.width || 'max-content'};
  color: ${props => props.theme.colors.secondaryShade2};
  font-weight:600;
  border-radius: 3rem;
  /* background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.black}, ${props => props.theme.colors.primary}); */
  /* background: radial-gradient(780px at 37.8% 100.3%, rgb(19, 55, 115) 2.2%, rgb(32, 7, 80) 20.2%, rgb(27, 88, 111) 58.6%, rgb(115, 88, 44) 75%, rgb(99, 19, 90) 89.6%, rgb(12, 51, 76) 96.1%); */
  /* background:${props => props.theme.colors.secondaryShade2} ; */

  &::before {
    content: "";
    position: absolute;
    left: .15rem;
    right: .15rem;
    top: .15rem;
    bottom: .15rem;
    /* border-radius: .4rem; */
    border-radius: 3rem;
    /* border-radius: 0 0 4px 4px; */
    background-color: white;
    background:${props => props.theme.colors.secondary};
    background: radial-gradient(780px at 37.8% 100.3%, ${props => props.theme.colors.secondary} 2.2%, ${props => props.theme.colors.primary} 20.2%, rgb(27, 88, 111) 58.6%, rgb(115, 88, 44) 75%, rgb(99, 19, 90) 89.6%, rgb(12, 51, 76) 96.1%);
    z-index: -1;
    transition: 200ms
  }

  &::after {
    content: '${props => props.text}';
    font-size: 1.35rem;
    /* background: linear-gradient(to left, ${props => props.theme.colors.primary}, ${props => props.theme.colors.black}, ${props => props.theme.colors.primary}); */
    /* background: radial-gradient(780px at 37.8% 100.3%, rgb(19, 55, 115) 2.2%, rgb(32, 7, 80) 20.2%, rgb(27, 88, 111) 58.6%, rgb(115, 88, 44) 75%, rgb(99, 19, 90) 89.6%, rgb(12, 51, 76) 96.1%); */
    -webkit-background-clip: text;
    color: #222222;
    color: ${props => props.theme.colors.secondaryShade2};
    color:white;
    transition: 200ms
  }

&:hover::before {
  opacity: 100%;
  /* top: .0rem;
  right: .0rem;
  bottom: .0rem;
  left: .0rem; */
}

&:hover::after{
  color:#222222;
}
`;
