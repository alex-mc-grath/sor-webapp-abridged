import styled, { css } from 'styled-components/macro';
import React, { useState, useEffect, useRef } from 'react';

const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  ${({ width = null }) => (width ? `width: ${width};` : '')}
`;

const StyledHeader = styled.div``;

const StyledList = styled.div`
  position: absolute;
  min-width: 100%;
  top: 100%;
  left: 50%;
  transform: translatex(-50%);
  box-shadow: 0px 10px 49px rgba(0, 0, 0, 0.13);
  border-radius: 12px;
`;

export const Header = ({ onHeaderClick, children }) => {
  return <StyledHeader onClick={onHeaderClick}>{children}</StyledHeader>;
};

export const List = ({ setShowDropdownList, children }) => {

  const randomKey = useRef("list"+Math.random()+"_")

  if (!Array.isArray(children)) {
    children = [children];
  }

  return (
    <StyledList onClick={() => setShowDropdownList(false)}>
      {children.map((item,index) => (
        <div key={randomKey.current+index}>{item}</div>
      ))}
    </StyledList>
  );
};

export const Dropdown = ({ showList = null, width = null, children }) => {
  const [showDropdownList, setShowDropdownList] = useState(false);

  const onHeaderClick = () => {
    setShowDropdownList(!showDropdownList);
  };

  let HeaderComponent = () => <></>;
  let ListComponent = () => <></>;

  if (!Array.isArray(children)) {
    children = [children];
  }

  children.forEach((child) => {
    if (child.type === Header) {
      HeaderComponent = child;
    } else if (child.type === List) {
      ListComponent = child;
    }
  });

  useEffect(() => {
    const toggle = () => setShowDropdownList(false);

    window.addEventListener('click', toggle);

    return () => {
      window.removeEventListener('click', toggle);
    };
  }, []);

  return (
    <StyledDropdown width={width} onClick={(e) => e.stopPropagation()}>
      {React.cloneElement(HeaderComponent, { onHeaderClick })}
      {(showDropdownList || showList) && <>{React.cloneElement(ListComponent, { setShowDropdownList })}</>}
    </StyledDropdown>
  );
};
