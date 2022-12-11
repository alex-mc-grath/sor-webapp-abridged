import React from 'react';
import styled from 'styled-components';

const StyledTabControl = styled.div`
  min-height: 78vh;
  border-radius: 20px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 3%), 0 2px 2px rgb(0 0 0 / 3%), 0 4px 4px rgb(0 0 0 / 3%), 0 8px 8px rgb(0 0 0 / 3%);
  background: white;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  hr {
    /* margin: 0.5rem auto; */
    width: 100%;
    border-color: #fafafa;
    border: 0.5px solid #f2f3f4;
    margin-top: 3px;
    /* border: none; */
  }
  ul {
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    margin: 0 auto;
    margin-left: auto;
    padding: 0;
    justify-content: center;

    li {
      list-style: none;
      margin: auto 0.2rem;
      border: 2px solid #fafafa;
      /* border-radius: 12px 12px 0 0; */
      border-radius: 5px;
      border-bottom: 2px solid transparent;

      width: 170px;
      padding: auto;
      text-align: center;
      font-weight: 500;
      letter-spacing: 1px;
      color: lightgrey;
      cursor: pointer;
      font-size: 1.3rem;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.03), 0 2px 2px rgba(0, 0, 0, 0.03), 0 4px 4px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.03);

      &.selected {
        color: ${(props) => props.theme.colors.secondary};
        border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
      }

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
  .fa-circle-user {
    font-size: 3.3rem;
    color: ${(props) => props.theme.colors.primary};
    margin: auto 1rem;
    margin-left: auto;
    cursor: pointer;
  }
`;

export const TabControl = ({ children, menuUi, setMenuUi, menuTabs, isLoggedIn }) => {
  return (
    <StyledTabControl>
      {isLoggedIn && (
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
          </Header>

          {children}
        </>
      )}
      {!isLoggedIn && (
        <>
          <Header>
            <ul>
              <li className={`${menuUi === 1 ? 'selected' : ''}`} onClick={() => setMenuUi(2)}>
                {menuTabs[1]}
              </li>
              <li className={`${menuUi === 1 ? 'selected' : ''}`} onClick={() => setMenuUi(1)}>
                {menuTabs[0]}
              </li>
              <li className={`${menuUi === 3 ? 'selected' : ''}`} onClick={() => setMenuUi(3)}>
                {menuTabs[2]}
              </li>
              <li className={`${menuUi === 4 ? 'selected' : ''}`} onClick={() => setMenuUi(4)}>
                {menuTabs[3]}
              </li>
            </ul>
          </Header>
          {children}
        </>
      )}
    </StyledTabControl>
  );
};
