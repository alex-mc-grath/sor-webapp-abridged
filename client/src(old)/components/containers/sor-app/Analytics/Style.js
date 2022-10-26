import styled from 'styled-components';

export const StyledAnalytics = styled.div`
  background: white;
  min-height: 98vh;

  h1 {
    color: white;
    margin-left: 3rem;
    padding-top: 1rem;
    letter-spacing: 0px;
    font-size: 3.3rem;
    font-family: 'Plus Jakarta Sans';
  }

  .upper-container {
    background: #111b56;
    height: 30vh;

    .flex-container {
      display: flex;
      width: 85%;
      margin: auto;
    }

    .campaign-details {
      /* display: grid;
      grid-template-columns: 1fr 1fr; */
      width: 50%;
      display: flex;
      flex-direction: column;
      margin-top: auto;
      margin-bottom: auto;

      .detail-group {
        display: flex;

        .key,
        .value {
          padding: 0.6rem;
          margin-top: 0.2rem;
        }
        .key {
          background: #1d256d;
          width: 50%;
          border-radius: 10px 0px 0 0;
          color: white;
        }
        .value {
          background: #fafafa;
          width: 50%;
          color: #1d256d;
          border-radius: 0px 10px 0 0;
        }
        &:nth-child(2) .key {
          border-radius: 0px 0px 0px 10px;
        }
        &:nth-child(2) .value {
          border-radius: 0px 0px 10px 0px;
        }
      }
      .detail-badges {
        display: flex;
        color: #111b56;

        > * {
          background: white;
          padding: 0.2rem 0.5rem;
          border-radius: 8px;
          margin: 0.3rem;

          i {
            color: #111b56;
          }
        }
        .employee-count {
        }
        .geolocation {
        }
        .employee-count {
        }
      }
    }

    .campaign-overview-analytics {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 50%;
      .user-profile-thumb {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        img {
          border-radius: 50%;
          width: 100px;
          border: 2px solid #1d256d;
        }

        .name {
        }

        .title {
        }
      }

      ul {
        width: 100%;
        margin: 0;
        padding: 0;
        li {
          font-size: 1.3rem;

          &:not(:first-child) {
            margin-top: 0.8rem;
          }
        }
      }
    }
  }

  .lower-container {
    width: 100%;

    ul.nav-menu {
      display: flex;
      width: 80%;
      margin: auto;
      margin-top: 2rem;
      justify-content: space-evenly;

      li {
        /* box-shadow: 0px 0px 0px 4px #9be8d8 inset; */
        border: 2px solid #fafafa;
        padding: 1.5rem 4rem;
        cursor: pointer;
        font-size: 1.3rem;
        color: lightgrey;
        font-weight: bold;
        letter-spacing: 0.5px;
        border-radius: 10px 10px 0 0;
        /* box-shadow: 0 8px 2px -2px gray; */

        &.active {
          /* box-shadow: 0px -4px 1px -2px #1d256d inset;
          border: 1px solid #1d256d;
          color: #111b56; */

          background: #1d256d;
          color: white;
        }
      }
    }

    .displayed-ui-element {
      display: flex;
      width: 80%;
      height: 50vh;
      background: #fafafa;
      margin: auto;
    }
  }
`;
