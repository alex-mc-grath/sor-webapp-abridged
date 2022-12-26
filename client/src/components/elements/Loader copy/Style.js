import styled from 'styled-components';

let loaderSvgWidth = '50rem';
let loaderSvgHeight = '40rem';

export const Style = styled.div`


.svg-def {
    position: absolute;
    width: 0;
    height: 0;
}

body,
.main-view-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: hsla(150, 2%, 16%, 1);
}

.loader-container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: ${loaderSvgWidth} / 2;
    margin-top: ${loaderSvgHeight} / 2;
}

.reflection {
    transform-origin: 50% 110%;
    transform: scaleY(-1);
    opacity: 0.09;
}

`;