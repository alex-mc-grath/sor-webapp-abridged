import styled from 'styled-components';

const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0 2rem;
  width: 1.5em;
  height: 1.5em;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;

  ::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 0.75em;
    height: 0.75em;
    margin: 0;
  }

  :hover {
    border: 2px solid ${(props) => props.theme.colors.primary};
    ::after {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
  :focus {
    outline: 2px solid yellow;
  }
  :checked {
    ::after {
      background-color: ${(props) => props.theme.colors.primary};
    }
    :hover {
      /* background-color: white; */
      /* border: 2px solid ${(props) => props.theme.colors.primary}; */
      ::after {
        background-color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  :disabled {
    cursor: not-allowed;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primary};
    :hover {
      ::after {
        background-color: ${(props) => props.theme.colors.primary};
      }
    }
    :checked {
      
      ::after {
        background-color: ${(props) => props.theme.colors.primary};
      }
      &:hover {
        border: 2px solid ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.primary};
        ::after {
          background-color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  font-family: StabilGrotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  ${({ disabled }) =>
    disabled &&
    `
      color: purple !important; 
      cursor: not-allowed;
   `}
`;

export const RadioField = ({ defaultValue, value, onClick }) => {
  return (
    <Wrapper>
      <Radio value={defaultValue || value} onClick={onClick} type="radio" id="radio-button" name=" " />
      <Label htmlFor="radio-button">{value}</Label>
    </Wrapper>
  );
};
