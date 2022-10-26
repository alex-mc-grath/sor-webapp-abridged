import styled from 'styled-components';

export const StyledComparativeTable = styled.div`
  margin: 5rem auto;
  padding: 2rem 0;
  width: 100%;

  .logo-header {
    background: linear-gradient(145deg, #78dde2, #a3eabe);
    color: white;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 3px;
  }

  h2 {
    width: 90%;
    margin: 2rem auto;
    margin-bottom: 5rem;
    text-align: center;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    text-indent: initial;

  }

  table {
    width: 98%;
    vertical-align: middle;
    margin: auto;

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      border-top: 0.8px solid rgba(213, 197, 173, 0.4);

      td {
        font-family: 'Interstate', sans-serif;
        font-size: 1.5rem;
        line-height: 22px;
        font-weight: 400;
        padding-left: 2px;
        position: relative;
        padding: 1.5rem;
        display: table-cell;

        &:nth-child(even):before {
          box-shadow: 0 0 26px rgb(0 0 0 / 15%);
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0px;
          left: 0;
          z-index: 0;
        }

        &:nth-child(even):after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: white;
          z-index: 1;
        }
      }
      i.fa-check {
        display: flex;
        position: relative;

        width: 10px;
        height: 10px;
        font-size: 1.5rem;
        margin: auto;
        color: ${(props) => props.theme.colors.tertiary};

        &:before {
          z-index: 2;
        }

        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 14px;
          height: 14px;
          background: ${(props) => props.theme.colors.tertiary};
          border-radius: 5px;
          opacity: 0.2;
          transform: translate(-3px, 2px);
          z-index: 2;
        }
      }
      i.fa-xmark {
        display: flex;
        position: relative;

        width: 10px;
        height: 10px;
        font-size: 1.5rem;
        margin: auto;
        color: ${(props) => props.theme.colors.primary};

        &:before {
          z-index: 2;
        }

        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 14px;
          height: 14px;
          background: ${(props) => props.theme.colors.primary};
          border-radius: 5px;
          opacity: 0.2;
          transform: translate(-4px, 3px);
          z-index: 2;
        }
      }

      .feature-icon {
        position: relative;
        text-indent: -9999px;
        width: 2rem;
        height: 1.5rem;
        /* display: block; */
        margin: auto;
        background-repeat: no-repeat;
        background-position: center;

        /* background-image: url('//dy7glz37jgl0b.cloudfront.net/betterhelp_two/icons/yes.svg'); */
      }
    }

    thead tr {
      border: 0;
    }

    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
    }

    .table-comparison-icon {
      text-align: center;
      width: 20%;
    }

    .last-column{
      h4{
        padding: 0 0.2rem;
        font-size: 1.2rem;
      }
    }
  }


  @media (min-width: 900px){
    table {
    width: 78%;

    tbody tr:hover{
background: white;
    }

  }
  }
`;
