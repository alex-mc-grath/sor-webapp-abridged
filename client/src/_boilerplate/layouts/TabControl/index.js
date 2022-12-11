import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

export const StyledTabControl = styled.div`
  min-height: 78vh;
  border-radius: 20px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 3%), 0 2px 2px rgb(0 0 0 / 3%), 0 4px 4px rgb(0 0 0 / 3%), 0 8px 8px rgb(0 0 0 / 3%);
  background: white;
  overflow: hidden;
`;

export const TabControlHeader = styled.div`
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

      &.disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.gray};
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

//menuTabs is an array where each element is either String or {text, disabled, visible}
export const TabControl = ({ menuTabs, defaultTabIndex = 0, children }) => {
  const [tabIndex, setTabIndex] = useState(defaultTabIndex);

  const tabs = useMemo(() => {
    let tabs = [];
    menuTabs.forEach((tab) => {
      if (typeof tab === 'string') {
        tabs.push({ text: tab, disabled: false, visible: true });
      } else {
        tabs.push({ text: '', disabled: false, visible: true, ...tab });
      }
    });
    return tabs;
  }, [menuTabs]);

  return (
    <StyledTabControl>
      <TabControlHeader>
        <ul>
          {tabs.map((tab, index) => {
            if (!tab.visible) {
              return <></>;
            }

            return (
              <li key={'tab_control_' + index} className={`${tabIndex === index ? 'selected' : ''} ${tab.disabled ? 'disabled' : ''}`} onClick={() => setTabIndex(index)}>
                {tab.text}
              </li>
            );
          })}
        </ul>
      </TabControlHeader>

      {children[tabIndex]}
    </StyledTabControl>
  );
};
