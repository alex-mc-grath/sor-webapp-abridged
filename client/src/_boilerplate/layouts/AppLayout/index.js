import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components/macro';
import { Header } from '../../../App/theme/header-app';
import { useNavigate } from 'react-router-dom';
import { SideNavigationMenu } from '../../../App/theme/sideNavigationMenu';
import { useState } from 'react';
// import { clearPageLoaderCache } from '../../../hoc/withActionPageLoader';

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  background: #161616;
  /* box-shadow: 0 1px 1px rgb(0 0 0 / 3%), 0 2px 2px rgb(0 0 0 / 3%), 0 4px 4px rgb(0 0 0 / 3%), 0 8px 8px rgb(0 0 0 / 3%); */
  /* overflow: hidden; */

  .whitlaw-banner {
    width: 100%;
    text-align: center;
    background: #FFEBE7;
    color: #FF6D4D;
    font-weight: 700;

    a {
      color: #418eeb;
    }
  }
/* 
  .right-panel {
    width: 100%; */
  /* } */
`;

export const PageContent = styled.div`
      width:100%;
      height: 90vh;
      padding: 1.8rem;
      margin-top: 10vh;
      background: #1f1f1f;
      transform: scale(1);
      transition: all .5s ease-in-out;
      /* transition-delay: 1s; */

      ${props => props.openMenu && css`
          background: #161616;
          transform: scale(0.975);
          *{
          transition: all .5s ease-in-out;
        }
      `}
`

// const Header = styled.div``;

export const AppLayout = ({ children, menuTabs, isLoggedIn }) => {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const accountType = useSelector(state => state.auth.accountType)

  const unmanage = () => {
    // clearPageLoaderCache()
    // setAuthToken(auth.whistlaw.token)
    dispatch({ type: "UNMANAGE" })
    dispatch({ type: "REMOVE_MANAGED_IMAGE" })
    navigate('/')
  }

  const [menuUi, setMenuUi] = useState(1)
  const [openMenu, setOpenMenu] = useState(false)

  const onClick = () => { setOpenMenu(!openMenu) }

  return (
    <StyledAppLayout>
      <SideNavigationMenu openMenu={openMenu} menuUi={menuUi} setMenuUi={setMenuUi} menuTabs={['Dashboard', 'All campaigns', 'Settings']} onClick={onClick} />
      <Header openMenu={openMenu} onClick={onClick} mainColor='' />
      <PageContent openMenu={openMenu}>{children}</PageContent>
    </StyledAppLayout>
  )
}

{/* {isLoggedIn && (
        <>
          <Header>
            <ul>
              <li className={`${menuUi === 2 ? 'selected' : ''}`} onClick={() => setMenuUi(2)}>
                {menuTabs[0]}
              </li>
              <li className={`${menuUi === 1 ? 'selected' : ''}`} onClick={() => setMenuUi(1)}>
                {menuTabs[1]}
              </li>
              <li className={`${menuUi === 3 ? 'selected' : ''}`} onClick={() => setMenuUi(3)}>
                {menuTabs[2]}
              </li>
              <li className={`${menuUi === 4 ? 'selected' : ''}`} onClick={() => setMenuUi(4)}>
                {menuTabs[3]}
              </li>
            </ul>
          </Header> */}
{/* <div className="right-panel"> */ }
{/* <Header accountType={auth.accountType}/> */ }
{/* {auth.whistlaw && <p className="whitlaw-banner">Logged into {auth.organization}, your modifications will appear as Whistlaw Admin. (<a href="#" onClick={unmanage}>Sign out</a>)</p>}
      {/* </div> */}

{/* </> */ }

