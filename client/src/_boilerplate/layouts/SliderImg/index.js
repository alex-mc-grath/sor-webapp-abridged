import styled, { css } from 'styled-components';

export const SliderImg = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  width: 97%;
  height: 100%;
  margin: 0.75rem auto;
  min-height: 70vh;
  background: url('${(props) => props.img}');
  background-position: 0% 58%;
  background-size: cover;
  border-radius: 25px;
  /* margin: auto; */
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;


  ${props => props.cover && css`
    background-size:cover !important;
    background-position: ${props => props.backgroundPosition || '0% 58%'} !important;
    `}

  &:nth-of-type(1){
    background-size:contain;
    background-repeat:no-repeat;
    background-position: center;
  }

  &:hover{
    h4{
    font-size: 5.5rem;
    opacity: .9;
    transition: all 0.3s ease-in-out;
  }
  }

  a,
  h4 {
    margin: auto 0;
    transition: all 0.24s ease-in-out;
  }

  h4 {
    font-size: 4rem;
    margin: 0 auto;
    z-index: 2;
    opacity: 0.7;
  }

  p {
    display:none;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    width: 80%;
    margin: 0 auto !important;
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    z-index: 2;
    opacity: 0.5;
  }

  &:hover{
p{
  /* display:flex; */
}
  }

  &::before {
    content: '';
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    opacity: 0.45;
    position: absolute;
    top: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  &:nth-of-type(1)::before {
    /* background: rgb(19, 19, 63); */
    background: linear-gradient(-140deg, ${(props) => props.theme.colors.primary} 10%, ${(props) => props.theme.colors.secondary});
    z-index: 1;
  }
  &:nth-of-type(2)::before {
    background: linear-gradient(-140deg, #0e2967 10%, ${(props) => props.theme.colors.secondary});
    z-index: 1;
  }
  &:nth-of-type(3)::before {
    background: linear-gradient(-140deg, #0e2967 10%, ${(props) => props.theme.colors.secondary});
    z-index: 1;
  }

  &:hover {
    transition: all 0.4s ease-in-out;

    h4 {
      opacity: 1;
      transition: all 0.4s ease-in-out;
      transition-delay: 500ms;
    }
    p {
      opacity: 1;
      transition: all 0.4s ease-in-out;
      transition-delay: 800ms;
    }

    ::before {
      width: 0%;
    }

    &:nth-of-type(1)::before {
      background: ${(props) => props.theme.colors.primary};
      opacity: 0.65;
      transition: all 0.4s ease-out;
    }
    &:nth-of-type(2)::before {
      background: red;
      opacity: 0.45;
    }
    &:nth-of-type(3)::before {
      background: teal;
      opacity: 0.55;
    }
  }

  &::after {
    content: '';
    display: flex;
    width: 0%;
    height: 100%;
    border-radius: 25px;
    opacity: 0.65;
    position: absolute;
    top: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  &:nth-of-type(1)::after {
    background: ${(props) => props.theme.colors.tertiary};
    z-index: 1;
  }
  &:nth-of-type(2)::after {
    background: rgb(19, 19, 63);
    z-index: 1;
  }
  &:nth-of-type(3)::after {
    background: rgb(19, 19, 63);
    z-index: 1;
  }

  &:hover {
    transition: all 0.4s ease-in-out;

    ::after {
      width: 100%;
      transition-delay: 0.6s !important;
      transition-property: width;
    }

    &:nth-of-type(1)::after {
      background: ${(props) => props.theme.colors.quaternary};
      opacity: 0.18;
      transition: all 0.4s ease-out;
    }
    &:nth-of-type(2)::after {
      background: red;
      opacity: 0.25;
    }
    &:nth-of-type(3)::after {
      background: teal;
      opacity: 0.35;
    }
  }
`;
