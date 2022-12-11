import styled from 'styled-components';

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  width: 100%;
  height: 1.7rem;
  /* max-width: 120px; */
  background: ${({theme}) => theme.colors.lightBody};
  border-radius: 25px;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  text-align: center;
  margin-left: 0.5rem;
  color: ${({theme}) => theme.colors.fadedText};

  &:hover {
    cursor: pointer;
    background: ${({theme}) => theme.colors.underline};
    color: ${({theme}) => theme.colors.bright};
    transition: 0.5s all cubic-bezier(0.8, 0, 0.2, 1);
  }
`;
