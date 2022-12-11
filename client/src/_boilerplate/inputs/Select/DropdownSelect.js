import { useState, useRef, useEffect } from 'react';
import { Dropdown, Header, List } from './Dropdown';
import { SelectLabelButton, SelectLabelButtonFilled, SelectLabelButtonForm } from './Style';
import styled, { css } from 'styled-components/macro';
import { useEvent } from '../../../hooks/useEvent';

const styleMap = {
  fill: SelectLabelButtonFilled,
  //form: SelectLabelButtonForm
  form: SelectLabelButtonForm
};

const StyledDropdownSelect = styled.div`
  margin: 0 0rem;
  margin-top: 0px;
  width: ${(props) => props.width || '100%'};
  color: #858585;

  margin-right: ${(props) => props.marginRight || ''};

  ${(props) =>
    props.type === 'all-status' &&
    css`
      display: flex;
      width: 190px;
      height: 5rem;
      justify-content: space-between;
      align-items: center;
      margin-top: 0;
      font-weight: bold;
      font-size: 1.3rem;
      margin-left: auto;

      svg {
        margin: 0;
        color: ${(props) => props.theme.colors.primary};
        margin-right: 2.5rem;
      }

      i.far.fa-chevron-down {
        color: #d3d6e4;
        font-size: 1.5rem;
      }
    `
  }

  ${(props) => props.error ? "border: 1px solid #861724;border-radius: 12px;" : "border: 1px solid transparent;"}

  /* svg {
    margin-left: 2rem;
  } */
`;

const StyledItem = styled.div`
  display: flex;
  padding: 1.3rem 1.3rem;
  background: ${props=>props.bgColor ? props.bgColor : 'white'};
  border-radius:0;
  /* width: 100%; */
  font-size: 1.4rem;

  svg {
    display: none;
  }

  &:last-child {
    /* border-radius: 0 0 12px 12px; */
  }

  span {
    margin-left: 2rem;
  }

  &:hover {
    
    background: #418eeb;
    border-radius: 1.2rem;
    color: white;

    button {
      color: white;
    }
  
  }

`;

export const Item = ({ value = null, disabled = false, children, ...props }) => {
  const itemElement = useRef();

  const itemClicked = () => {
    if (!disabled) {
      let itemClickEvent = new CustomEvent('DropdownSelectItemClick', {
        detail: { value, element: children },
        bubbles: true,
        cancelable: true,
        composed: true,
      });

      itemElement.current.dispatchEvent(itemClickEvent);
    }
  };

  return (
    <StyledItem {...props} ref={itemElement} onClick={itemClicked}>
      {children}
    </StyledItem>
  );
};

export const DefaultItem = ({ children }) => {
  return <>{children}</>;
};

export const DropdownSelect = ({ defaultValue = null, children, onChange = null, HeaderStyle = SelectLabelButton, width, marginRight, type, maxHeight=null, ...props }) => {
  const [selected, setSelected] = useState({ element: null, value: null });
  const dropdownElement = useRef();

  if (!Array.isArray(children)) {
    children = [children];
  }

  let defaultItem = <></>;
  let foundSelected = null;
  let items = [];
  for (let i = 0; i < children.length; i++) {
    if (children[i].type === DefaultItem) {
      defaultItem = children[i];
    }
    else if(Array.isArray(children[i]))
    {
      let subChildren = children[i]
      for(let i=0;i<subChildren.length;i++)
      {
        if(subChildren[i].props.value === defaultValue)
        {
          foundSelected = subChildren[i]
        }
        items.push(subChildren[i]);
      }
    }
    else if(typeof children[i] === "boolean")
    {
      //do nothing
    }
    else
    {
      if(children[i].props.value === defaultValue)
      {
        foundSelected = children[i]
      }
      items.push(children[i]);
    }
  }

  
  if(foundSelected)
  {
    defaultItem = foundSelected.props.children || foundSelected
  }

  if (typeof HeaderStyle !== 'function') {
    if (HeaderStyle in styleMap) {
      HeaderStyle = styleMap[HeaderStyle];
    } else {
      HeaderStyle = SelectLabelButton;
    }
  }

  useEffect(() => {
    if (dropdownElement.current) {

      let callback = (e) => {
        e.preventDefault();
        if (onChange) {
          onChange(e.detail.value);
        }
        setSelected({ element: e.detail.element, value: e.detail.value });
      };

      dropdownElement.current.addEventListener('DropdownSelectItemClick', callback);
      let toRemove = dropdownElement.current;
      return () => toRemove.removeEventListener('DropdownSelectItemClick', callback);
    }
  }, [dropdownElement]);

  return (
    <StyledDropdownSelect type={type} ref={dropdownElement} width={width} marginRight={marginRight} {...props}>
      <Dropdown>
        <Header>
          <HeaderStyle type={type}>
            <div>{selected.element || defaultItem}</div>
            <i className="far fa-chevron-down"></i>
          </HeaderStyle>
        </Header>
        <List maxHeight={maxHeight}>{items}</List>
      </Dropdown>
    </StyledDropdownSelect>
  );
};
