import styled, { css } from 'styled-components'
import {Badge} from '../../../../_boilerplate/elements/Badge'

export const Layout = styled.div`
width:80%;
height: 100%;
font-size: 80%;
margin:3rem auto;
/* border: 2px dotted grey; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:flex-start;

  ${props=>props.formIndex >= 1 && css`
    .li-wrapper:nth-of-type(${props=props.formIndex}){
          border-left: solid .4rem ${props=>props.theme.colors.secondary};

          .circle{
            border: solid 2px ${props=>props.theme.colors.secondary};
            background: ${props=>props.theme.colors.secondaryShade2};
        }
        }

        .li-wrapper:nth-of-type(1),.li-wrapper:nth-of-type(2){
          border-left: solid .4rem ${props=>props.theme.colors.secondary};

          .circle{
            border: solid 2px ${props=>props.theme.colors.secondary};
            background: ${props=>props.theme.colors.secondaryShade2};
        }
        }

        
  /* background: blue; */
  `}

.li-wrapper {
  position: relative;
  border-left: solid .4rem ${props=>props.theme.colors.secondaryShade1};
  border-left: solid .4rem #505050;
  /* border-left: solid .4rem white; */
  padding-left: 3.1rem;
  /* padding-bottom: 2.3rem; */
  height:100%;
  cursor:pointer;




  &.active{
    border-left: dotted .4rem ${props=>props.theme.colors.secondary};



    .circle {
      background: ${props=>props.theme.colors.secondary};
      border-color:white;
      /* box-shadow: 0px 2px 4px ${props=>props.theme.colors.secondary}; */
      
      
    }

    .number{
      box-shadow: 3px 4px 8px ${props=>props.theme.colors.secondary};
    }
      
      p{
          font-size: 1.5rem;
          font-weight: bold;
        color: ${props=>props.theme.colors.secondary};
      }
  }

  &:last-of-type {
    border-left: solid .4rem transparent;
    padding-bottom: 0;
  }

/* 
.li-last {
  position: relative;
  padding-left: 2rem;
  
} */




}


.circle {
  position: absolute;
  left: -.8rem;
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  background: ${props=>props.theme.colors.secondaryShade2};
  border: solid 2px ${props=>props.theme.colors.black};
  border: solid 2px #505050;
  border-radius: 50%;

}

.circle-last {
  left: -6px;
}

.myborder {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
}

p {
  margin: 0;
  transform: translateY(-4px);
  color:#505050;
  font-size: 1.3rem;
font-weight: 600;

  &.timestamp {
    color: #a5a5a5;
  }
}


/* Slide in */
/* p:nth-child(2) a {
  overflow: hidden;
}

p:nth-child(2) a::after {
  opacity 1;
  transform: translate3d(-100%, 0, 0);
}

p:nth-child(2) a:hover::after,
p:nth-child(2) a:focus::after{
  transform: translate3d(0, 0, 0);
} */
/* 
.number{
  position:relative;
  margin-right:3.5rem;

  &::before{
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    content:'';
    background: #000;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    z-index:-1;
  }
} */
`;

export const Number = styled.span`
 margin-right:2.5rem;



  &::before{
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    content:'${props=>props.content}';
    background: ${props=>props.theme.colors.secondaryShade2};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    z-index:-1;
  }
`

export const NavBadge = styled(Badge)`
    position:absolute;
    top:-30%;
    background: ${props=>props.theme.colors.secondary};
    font-weight:bold;
    font-size: 1.1rem;
`;