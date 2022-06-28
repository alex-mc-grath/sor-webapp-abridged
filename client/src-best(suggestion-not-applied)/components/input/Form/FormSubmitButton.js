import styled from 'styled-components';

const FormSubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  height: 2rem;
  /* max-width: 120px; */
  background: ${({theme}) => theme.colors.lightBody};
  border-radius: 25px;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  text-align: center;
  margin-left: 0.5rem;
  color: ${({theme}) => theme.colors.success};
  min-width: 100px;

  &:hover {
    cursor: pointer;
    background: ${({theme}) => theme.colors.bright};
    color: ${({theme}) => theme.colors.body};
    transition: 0.5s all cubic-bezier(0.8, 0, 0.2, 1);
  }
`;

export default FormSubmitButton;
