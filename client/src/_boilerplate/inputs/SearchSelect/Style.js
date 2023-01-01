import styled from 'styled-components';

export const StyledSearchSelect = styled.div`
  width: -webkit-fill-available;
  .wrapper {
    max-width: 100%;
    padding: 0.2rem .85rem;
    /* border: 1px solid lightgray; */
    border-radius: 1.5em;
    overflow: hidden;
    /* background: #f3f4f6; */
    border-radius: 12px;
    &:hover,
    &.focus {
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    }
  }
  .search {
    display: flex;
    height: 3em;
    align-items: center;

    input {
      flex: 1;
      width: 100%;
      border: 0;
      background: transparent;

      &:focus {
        outline: none;
      }
    }
    i {
      color: #a5a5a5;
      font-size:1.4rem;
    }
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-bottom: 1.5em;
    border-top: 1px solid lightgray;
    max-height: 0;
    overflow: hidden;
    overflow-y: auto;
    animation: enlarge 0.25s forwards;
    li {
      margin-right: -1.5em;
      margin-left: -1.5em;
      padding: 0 1.5em;
      line-height: 1.5;
      cursor: pointer;
      &:hover {
        background: whitesmoke;
      }
    }
  }
  .result {
    display: flex;
    align-items: center;
    b {
      margin-right: 0.5em;
    }
    span {
      margin: 0 0.5em;
      width: 1em;
      height: 1em;
      border-radius: 0.5em;
    }
  }
  @keyframes enlarge {
    to {
      max-height: 10em;
    }
  }
`;
