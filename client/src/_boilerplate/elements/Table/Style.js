import styled from 'styled-components';
// import { dfrcc } from '../../../../App/theme/mixins';

export const StyledTable = styled.table`
  /* border-collapse: collapse; */
  width: 100%;
  background: white;
  border-radius: 1.2rem;

  padding-bottom: 0;
  min-height: 50vh;

  thead {
    font-weight: bold;
    text-align: left;

    tr {
      margin-top: 0;
      padding: 1.5rem;
      /* box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05); */
      box-shadow: 0px 1px 0px rgb(239 239 239 / 5%);

      th {
        display: flex;

        &:last-child {
          .table-vertical-arrows {
            display: none;
          }
        }
        .table-vertical-arrows {
          margin: auto;
          margin-left: 1rem;
        }
      }
    }
  }

  tr {
    display: grid;
    grid-template-columns: ${({ columnCount }) => new Array(columnCount).fill('1fr').join(' ')};
    grid-template-columns: ${({ colCustomSize }) => colCustomSize};
    margin: 0.4rem auto;
    padding: 0rem 1.5rem;
    font-size: 1.3rem;
    align-items: center;
    td {
      margin: 0.4rem 0;

      button {
        font-size: 1rem;
      }
    }
  }

  .status-buttons {
    border-radius: 10px;
    padding: 0.8rem 1.5rem;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;

    &.blue-status {
      background: rgba(221, 236, 255, 0.81);
      color: #418eeb;
    }

    &.red-status {
      background: #fff0ed;
      color: #ff6d4d;
    }

    &.green-status {
      background: #bfe8e1;
      color: #00a389;
    }
  }

  .empty-button {
    color: #418eeb;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #418eeb;
    border-radius: 12px;
    padding: 0.7rem 0rem;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
  }

  .table-nav {
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    margin-left: auto;

    span .showing-count {
      width: 100%;
    }

    .page-numbers-nav {
      background: #e3e4eb;
      display:flex;
       align-items:center;
      justify-content: center;

      padding: 0.4rem;
      width: fit-content;
      /* background: #000; */

      > div {
        display:flex;
       align-items:center;
      justify-content: center;
        width: 4rem;
        height: 4rem;
        color: #418eeb;

        &.active {
          background: white;
          color: black;
          border-radius: 6px;
        }
      }
    }
  }
`;
