import styled from 'styled-components';

export const StyledCarousel = styled.div`
position:relative;
overflow: hidden;
background: purple;
width: 100%;
cursor: grab;

.carousel{
display:flex;
  
  &.dragging {
    cursor: grabbing;
  }
  
  &.wrap {
    white-space: nowrap;
  }
  
  .item {
    display: inline-block;
    width: 30vw;
    padding: 3vw;
    user-select: none;
    
    figure {
      position: relative;
      z-index: 1;
      display: block;
      height: 0;
      padding-bottom: 56.25%;
      overflow: hidden;
      
      img {
        position: absolute;
        z-index: 1;
        height: 100%;
        width: 100%;
        object-fit: cover;
        vertical-align: middle;
        transform-origin: center;
      }
    }
  }
    
    h2 {
      position: absolute;
      z-index: 1;
      bottom: 1.8vw;
      font-size: 6vw;
      bottom: 1vw;
      color: #fff;
    }
  }
  
  &--progress {
    position: fixed;
    z-index: 2;
    pointer-events: none;
    bottom: 2vw;
    width: 20vw;
    left: 3vw;
    height: 1px;
    background: rgba(255, 255, 255, .2);
    
    &-bar {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .8);
      transform: scaleX(0);
      transform-origin: 0% 0%;
    }
  }
}
}

@font-face {
    font-weight: inherit;
    font-style: inherit;
}
`;