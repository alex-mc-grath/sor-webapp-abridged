import styled, { css } from 'styled-components';
import Button from '../Button';

export const MainButton = styled(Button)`
  background: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.type === 'empty' && 'transparent'};
  background: ${(props) => props.color};
  background: ${(props) => props.type === 'empty' && props.color && 'transparent'};
  color: white;
  /* color: white || ${(props) => props.type === 'empty' && `${(props) => props.theme.colors.primary}`}; */
  color: white || ${(props) => props.type === 'empty' && `#418EEB`};
  color: ${(props) => props.type === 'empty' && `#418EEB`};
  color: ${(props) => props.type === 'empty' && props.color};

  padding: ${(props) => props.padding || '1.3rem 1.8rem'};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  ${(props) => props.border ? `border:${props.border};` : ''}
  border-radius: 12px;
  width: ${(props) => props.width || 'auto'};
  transition: ${({ theme }) => theme.transitionSpeed} all ease-in-out;
  margin-left: ${(props) => props.marginLeft || ''};
  margin: ${(props) => props.margin};
  justify-content: center;

  &.main-button-custom-style{
    display: ${(props) => props.type === 'empty' ? 'flex' : ''};
    align-items:center;
  }

  /* TYPE 'none' */
  ${(props) =>
    props.type === 'none' &&
    css`
      background: none;
      color: black;
      border: none;
      padding: 0;
      font-weight: normal;
    `}

  svg,
  i {
    margin-left: 0.4rem;
    color: white !important;

    color: ${(props) => props.color} !important;
  }

  &:hover,
  &:active {
    transition: ${({ theme }) => theme.transitionSpeed} all ease-in-out;
  }
`;

export const MainButtonSpan = styled.span`
  background: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.type === 'empty' && 'transparent'};
  color: white;
  /* color: white || ${(props) => props.type === 'empty' && `${(props) => props.theme.colors.primary}`}; */
  color: white || ${(props) => props.type === 'empty' && `#418EEB`};
  color: ${(props) => props.type === 'empty' && `#418EEB`};
  padding: 1.3rem 1.8rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 12px;
  width: ${(props) => props.width || 'auto'};
  cursor: pointer;

  /* TYPE 'none' */
  ${(props) =>
    props.type === 'none' &&
    css`
      background: none;
      color: black;
      border: none;
      padding: 0;
      font-weight: normal;
    `}

  svg,
  i {
    margin-left: 0.4rem;
  }


  &:hover,
  &:active {
    transition: ${({ theme }) => theme.transitionSpeed} all ease-in-out;
  }
`;
