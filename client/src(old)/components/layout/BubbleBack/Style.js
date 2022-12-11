import styled from 'styled-components'

export const StyledBubbleBack = styled.div`
  background: blue;

  .flex-column {
    position: relative;
    display: flex;
    flex-direction: column;

    a {
      position: relative;
      width: fit-content;
      height: fit-content;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translate(-80%, 25%);

      &:hover {
        span {
          display: flex;
          top: -10px;
          transition: 0.4s all ease-in-out;
          transition-delay: 0.15s;

          :before {
            content: '\f359';
            font: normal normal normal 14px/1 FontAwesome;
            margin-right: 5px;
            margin-top: 0px;
            opacity: 1;
            transition: 1s all ease-out;
          }
        }
      }
    }
  }
`
