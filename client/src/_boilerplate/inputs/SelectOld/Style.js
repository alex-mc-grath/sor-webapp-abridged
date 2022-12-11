import styled from 'styled-components';

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0rem;

  label {
    font-weight: 400;
    letter-spacing: 0px;
    margin: 1rem 0;
  }

  select {
    border: 1px solid #a5a5a5;
    border-radius: 5px;
    padding: 1rem 1rem;
    width: 263px;
    font-weight: bold;

    &:active,
    &:focus {
      outline: none;
    }

    .control {
      height: 40px;
      width: 100%;
      border: 1px solid #a1a1a1;
      border-radius: 0;
      cursor: pointer;

      &:hover {
        border-color: #a1a1a1;
      }

      &.is-focused {
        box-shadow: 0 0 0 1px black;
        outline: none;
      }
      .indicator-separator {
        display: none;
      }

      .menu {
        color: #3c3d3e;
      }
    }
  }
`;

// !! very interesting way of doing : using className Prefixes with styled components...

// const StyledSelect = styled(Select)`
// .Select__control {
//   height: 40px;
//   width: 100%;
//   border: 1px solid #a1a1a1;
//   border-radius: 0;
//   cursor: pointer;
// }

// .Select__control:hover {
//   border-color: #a1a1a1;
// }

// .Select__control--is-focused {
//   box-shadow: 0 0 0 1px black;
//   outline: none;
// }

// .Select__indicator-separator {
//   display: none;
// }

// .Select__menu {
//   color: #3c3d3e;
// }
// `;
