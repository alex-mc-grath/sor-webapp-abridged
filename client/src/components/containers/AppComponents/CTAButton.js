import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledCTAButton  = styled.button`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    width:15rem;
    padding: 10px 20px;  
    cursor: pointer;
    font-weight: 900;
    text-transform: uppercase;
    /* font-size: 30px;   */
    font-size: 11px;  
    color: ${props=>props.color};
    background-color: ${props=>props.bgColor};
    box-shadow: #fafafa 2px 2px 22px;
    border-radius: 4px; 
    z-index: 0;  
    overflow: hidden;
    margin: 0 1rem;
    background: linear-gradient(40deg, #0e2967 10%, ${(props) => props.theme.colors.secondary});
    /* color:white; */

    &:last-of-type{
        background: linear-gradient(-140deg, #0e2967 10%, ${(props) => props.theme.colors.secondary}) !important;

      }
    

    .fa-arrow-right{
      position:absolute;
      transform: translateX(-100px);
      opacity: 0;
      font-size: 3rem;
      transition: 0.5s all cubic-bezier(0.8, 0, 0.2, 1);
      font-weight:normal;
    }

    &:hover{

      background: white !important;
      background: linear-gradient(40deg, #0e2967 10%, ${(props) => props.theme.colors.secondary}) !important;
      color:white;
      &:last-of-type{
        background: linear-gradient(-140deg, #0e2967 10%, ${(props) => props.theme.colors.secondary}) !important;
      }

      .fa-arrow-right{
        transform: translateX(10px);
        right:2rem;
        opacity: 1;
        font-size: 1.3rem;
        transition: 0.5s all cubic-bezier(0.8, 0, 0.2, 1);
      }
    }

    /* &:focus {
    outline-color: transparent;
    box-shadow: ${props=>props.color} 2px 2px 22px;
    }

    .right::after, &::after {
    content: '${props=>props.text}';
    display: block;
    position: absolute;
    white-space: nowrap;
    padding: 40px 40px;
    pointer-events:none;
    }

    &::after{
    font-weight: 200;
    top: -30px;
    left: -20px;
    } 

    &.right, .left {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    }
    &.right {
    left: 66%;
    }
    &.left {
    right: 66%;
    }
    &.right::after {
    top: -30px;
    left: calc(-66% - 20px);
    background-color: ${props=>props.bgColor};
    color:transparent;
    transition: transform .4s ease-out;
    transform: translate(0, -90%) rotate(0deg)
    }

    &:hover .right::after {
    transform: translate(0, -47%) rotate(0deg);
    background: #000;
    }

    &.right:hover::after {
    transform: translate(0, -50%) rotate(-7deg)
    }

    &.left:hover ~ .right::after {
    transform: translate(0, -50%) rotate(7deg)
    }


    &::before {
    content: '';
    pointer-events: none;
    opacity: .6;
    background:
        radial-gradient(circle at 20% 35%,  transparent 0,  transparent 2px, ${props=>props.textColor} 3px, ${props=>props.textColor} 4px, transparent 4px),
        radial-gradient(circle at 75% 44%, transparent 0,  transparent 2px, ${props=>props.textColor} 3px, ${props=>props.textColor} 4px, transparent 4px),
        radial-gradient(circle at 46% 52%, transparent 0, transparent 4px, ${props=>props.textColor} 5px, ${props=>props.textColor} 6px, transparent 6px);

    width: 100%;
    height: 300%;
    top: 0;
    left: 0;
    position: absolute;
    animation: bubbles 5s linear infinite both;
    }

    @keyframes bubbles {
    from {
        transform: translate();
    }
    to {
        transform: translate(0, -66.666%);
    }
    } */
`;


const Styled2 = styled.button`
  
        position:relative;
        display:flex;
        justify-content:center;
        width:100%;
        height: 4rem;
        color:white;
        margin: 0 1.4rem;
        padding: 0 0.4rem;
        /* margin: 1rem 3rem; */
        text-align:center;
        /* box-shadow: #fafafa -2px 1px 12px; */
        box-shadow: black -2px 1px 12px;
        transition: all 0.5s cubic-bezier(0.55, 0.055, 0.675);


        &:hover{
            box-shadow: black -2px 1px 6px;
            transition: all 0.5s cubic-bezier(0.55, 0.055, 0.675);
        }

        i{
            position:absolute;
            right: -5rem;
        }
`;


const GradientText = styled.button`
  
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height: 4rem;
        color:white;
        margin: 0 1.4rem;
        padding: 0 0.4rem;
        font-size: 1.25rem;
        font-weight:bold;
        text-transform:uppercase;
        /* margin: 1rem 3rem; */
        text-align:center;
        /* box-shadow: #fafafa -2px 1px 12px; */
        box-shadow: black -2px 1px 12px;
        

        background: linear-gradient(40deg, ${(props) => props.theme.colors.secondary} 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;

        transition: all 0.5s cubic-bezier(0.55, 0.055, 0.675);

        &:hover{
            box-shadow: black -2px 1px 6px;
            background: linear-gradient(40deg, ${(props) => props.theme.colors.secondary} calc(10% - 1px), #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
            /* background: linear-gradient(7deg, currentColor calc(50% - 1px), transparent 50%); */
            background-clip: unset;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
            -webkit-box-decoration-break: unset;
            box-decoration-break: unset;
            color:#0e2967;
            transition: all 0.5s cubic-bezier(0.55, 0.055, 0.675);
        }

        i{
            position:absolute;
            right: -5rem;
        }
`;


export const CTAButton = ({type=1, text, to, ...props}) => {

const navigate = useNavigate()

if(type===1){
  return (
    <StyledCTAButton {...props} onClick={()=>navigate(`${to}`)} >
      <div className='left'></div>{text} <i className="fa-thin fa-arrow-right"></i>
    {/* <div className='rigth'></div> */}
    </StyledCTAButton>
  )
}

  if(type===2){
    return(
      <Styled2 {...props} onClick={()=>navigate(`${to}`)} >
      <div className='left'></div>{text} <i className="fa-thin fa-arrow-right"></i>
    {/* <div className='rigth'></div> */}
    </Styled2>
    )
  }


// NOT WORKING YET - to be completed

  if(type==="gradient"){
    return(
      <GradientText {...props} onClick={()=>navigate(`${to}`)} >
      <div className='left'></div>{text} <i className="fa-thin fa-arrow-right"></i>
    {/* <div className='rigth'></div> */}
    </GradientText>
    )
  }
}

