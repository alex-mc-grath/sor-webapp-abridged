import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { Img } from '../../../components/elements/Img';
import { ToggleSwitchWithText } from '../../../_boilerplate/inputs/ToggleSwitchWithText';
// this logo can be turned into an svg
import logo from '../../assets/imgs/logo-sor-center-shadow.png'

// var headerHeight is in both sideNav and Header => needs to be put in one place, maybe in AppLayout and passed? or even in theme settings :D
let headerHeight = 8
let borderWidth = headerHeight * 1
let logoWidth = headerHeight * .9

const StyledSideNavigationMenu = styled.div`
    position:relative;
    font-family:'Source Sans Pro';
    width: ${headerHeight + 1}rem;
    background: #181818;
    z-index:0;
    transition: 1.2s all ease-in-out;


    &::before{
            content:'';
            position:absolute;
            background: linear-gradient(40deg, #0e2967 10%, ${(props) => props.theme.colors.secondary});
            background: ${(props) => props.theme.colors.tertiary};
            background: white;
            /* background: #001016; */
            width: ${borderWidth}rem;
            height: 100%;
            transition: 1.2s all ease-in-out;
        }

    ${props => props.openMenu && css`
        width: 53vh;
        width: ${borderWidth * 5}rem;
        background: #282828;


        &::before{
            content:'';
            /* position:absolute; */
            background: linear-gradient(40deg, #0e2967 10%, ${(props) => props.theme.colors.secondary});
            /* width: ${borderWidth}rem;
            height: 100%; */
            transition: 2s all ease-in-out;
        }
    `}

    img{
        position: absolute;
        left:.3rem;
        bottom:1rem;
    }

    h3{
      letter-spacing: 1px;
    }


 

    ul{
        /* width:${borderWidth}; */
        opacity:0;
        transform:translateX(-10%);
        width:19rem;
        color:white;
        position:absolute;
        bottom:2rem;
        right:0;
        height: 30rem;
        list-style:none;
        padding:0;

        background: linear-gradient(40deg, ${(props) => props.theme.colors.secondary} 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
        : text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        transition: 1.2s all ease-in-out;

      

        li{
            margin: 2.6rem 0;
            cursor:pointer; 


            &.selected{
              color: white !important;
background: white;
-webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        transition: 1.2s all ease-in-out;

        border-bottom: 2px solid ${props => props.theme.colors.secondary};
        width:fit-content;

}

           
            /* background: linear-gradient(40deg, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary}); */
            
/*             

              box-shadow:
                0 0 .50rem #fff,           
                -.5rem 0 .50rem  ${(props) => props.theme.colors.secondary},       
                1.0rem 0 .50rem ${(props) => props.theme.colors.secondary};         */
              
                /* box-shadow:
                inset 0 0 5.0rem #fff,      
                inset 2.0rem 0 8.0rem #f0f,
                inset -2.0rem 0 8.0rem #0ff,  
                inset 2.0rem 0 30.0rem #f0f,  
                inset -2.0rem 0 30.0rem #0ff, 
                0 0 2.0rem #fff,            
                -1.0rem 0 2.0rem #f0f,        
                1.0rem 0 2.0rem #0ff;          */

              /* &::before{
                content:'';
                position:absolute;
                width:100%;
              height:4rem;
              } */
              
             
            }
        }
    }


    ${props => props.openMenu && css`
    ul{
        transform:translateX(0%);
        opacity:1;
        width:19rem;
        color:white;
        position:absolute;

        background: linear-gradient(40deg, ${(props) => props.theme.colors.secondary} 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        transition: 1.2s all ease-in-out;

        

        li{
            margin: 2.6rem 0;
            cursor:pointer; 
            font-weight: 500;
        }
    }

    `}
`;

export const SideNavigationMenu = ({ menuTabs, menuUi, setMenuUi, ...props }) => {

  const navigate = useNavigate()

  return (
    <StyledSideNavigationMenu openMenu={props.openMenu} {...props}>
      <Img src={logo} width={logoWidth + 'rem'} notDraggable alt="sor logo"
        // onClick={()=>setOpenMenu(!openMenu)}
        onClick={props.onClick}
      />
      <ul>
        <h3>SOR APP</h3>
        <li className={`${menuUi === 1 ? 'selected' : ''}`} onClick={() => { setMenuUi(1); navigate('/app/dashboard') }}>
          {menuTabs[0]}
        </li>
        <li className={`${menuUi === 2 ? 'selected' : ''}`} onClick={() => { setMenuUi(2); navigate('/app/campaigns') }}>
          {menuTabs[1]}
        </li>
        <li className={`${menuUi === 3 ? 'selected' : ''}`} onClick={() => { setMenuUi(3); navigate('/app/dashboard') }}>
          {menuTabs[2]}
        </li>
        {/* <li className={`${menuUi === 4 ? 'selected' : ''}`} onClick={() => {setMenuUi(4); navigate('/app/dashboard')}}>
                {menuTabs[3]}
              </li> */}
        <ToggleSwitchWithText switchActive={true} setSwitchActive={console.log('dark')} options={['Dark mode', 'Light mode']} />
      </ul>

    </StyledSideNavigationMenu>
  )
}
