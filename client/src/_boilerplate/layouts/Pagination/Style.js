import styled from 'styled-components';

export const StyledPagination = styled.div`
  .page-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ul {
      margin: 0 2rem;
    }

    button {
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 5rem;

      &:first-of-type {
        svg {
          margin-right: 1rem;
        }
      }
      &:last-of-type {
        svg {
          margin-left: 1rem;
        }
      }
    }
  }

  .page-numbers {
    background: #e3e4eb;
    border-radius: 6px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding: 0.5rem;
    width: fit-content;

    li {
      list-style: none;
      display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
      width: 4rem;
      height: 4rem;
      color: #418eeb;
      margin: 0 0.7rem;
      cursor: pointer;

      &.active {
        background: white;
        color: black;
        border-radius: 6px;
      }
    }
  }
  .table-nav {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2rem;
  }

  .showing-count {
    font-size: 1.5rem;
    padding: 1rem auto;
    margin-top: 0rem;
  }
`;
