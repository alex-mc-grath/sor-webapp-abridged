import styled from 'styled-components';
import { dfrcc } from '../../../../App/theme/mixins';

export const StyledSearchBar = styled.div`
  ${dfrcc};
  justify-content: space-between;
  background: #f3f4f6;
  padding: 0rem 1rem;
  border-radius: 12px;
  width: 40%;
  width: 100%;
  max-width: 400px;

  .inputHolder {
    width: 100%;
    padding: 0 0.5rem;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  input {
    border: none;
    width: 100%;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  svg{
    width: 20px;
    margin-right:0.5rem;
  }
`;
