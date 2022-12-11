/*import styled from 'styled-components';

const StyledLoaderThree = styled.div`
  display: flex;
  margin: auto;
  min-height: 70vh;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  @keyframes animation {
    0% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -105;
    }
    50% {
      stroke-dasharray: 80 10;
      stroke-dashoffset: -160;
    }
    100% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -300;
    }
  }

  .spinner {
    transform-origin: center;
    animation-name: animation;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier;
    animation-iteration-count: infinite;
  }
`;

export const LoaderThree = ({ size = '100px', color = '#418EEB' }) => {
  const style = { fill: 'transparent', stroke: color, strokeWidth: '7px', strokeLinecap: 'round' };

  return (
    <StyledLoaderThree size={size}>
      <svg viewBox='0 0 100 100'>
        <defs></defs>
        <circle className='spinner' style={style} cx='50' cy='50' r='45' />
      </svg>
    </StyledLoaderThree>
  );
};*/


import { useEffect } from "react"
import styled from "styled-components/macro"

export const StyledLoaderThree = styled.div`

    /* display: inline-block; */
    display:flex;
    justify-content:center;
    align-items: ${({align}) => align};
    margin:${({margin}) => margin};
    /* margin: ${({margin}) => margin}; */
    width: ${({size}) => size};
    height: ${({size}) => size};
    /* fill: pink; */
    /* width:100%; */

    @keyframes animation {
        0% {
            stroke-dasharray: 1 98;
            stroke-dashoffset: -105;
        }
        50% {
            stroke-dasharray: 80 10;
            stroke-dashoffset: -160;
        }
        100% {
            stroke-dasharray: 1 98;
            stroke-dashoffset: -300;
        }
    }

    .spinner {
        transform-origin: center;
        animation-name: animation;
        animation-duration: 1.2s;
        animation-timing-function: cubic-bezier;
        animation-iteration-count: infinite;
    }
`

export const LoaderThree = ({size="150px", color="#000000", align="center", margin="auto", StyledLoader = StyledLoaderThree}) => {

    const style = {fill:"transparent", stroke:color, strokeWidth: "7px", strokeLinecap: "round"}

    return (
        <StyledLoader size={size} align={align} margin={margin}>
            <svg viewBox="0 0 100 100">
                <defs>
                </defs>
                <circle className="spinner" style={style} cx="50" cy="50" r="45"/>
            </svg>
        </StyledLoader>
    )
}
