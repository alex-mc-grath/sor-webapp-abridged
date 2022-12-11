import { useState, useRef, useEffect } from 'react';
import { Dropdown, Header, List } from './Dropdown';
import { SelectLabelButton, SelectLabelButtonFilled } from './Style';
import styled, { css } from 'styled-components/macro';
import { useEvent } from '../../../hooks/useEvent';

const styleMap = {
  fill: SelectLabelButtonFilled,
};

const StyledDropdownSelect = styled.div`
  margin: 1rem;

  ${(props) =>
    props.type === 'all-status' &&
    css`
      margin-top: 0;
      display: flex;
      justify-content: space-between;
    `}

  span {
    white-space: nowrap;
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.3rem 1.3rem;
  background: white;
  color: black;

  > svg {
    width: 15px;
    /* height: 100%; */
    padding: 0.5rem;
  }

  img {
    margin-right: 1.5rem;
  }
  span {
    width: max-content;
  }

  &:hover {
    background: #418eeb;
    color: white;
  }
`;

export const Item = (props, { value = null, disabled = false, children }) => {


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
    <StyledItem ref={itemElement} onClick={itemClicked}>
      {children}
    </StyledItem>
  );
};

export const DefaultItem = ({ children }) => {
  return <>{children}</>;
};

export const DropdownSelect = ({ type, defaultValue = null, children, onChange = null, HeaderStyle = SelectLabelButton }) => {
  const [selected, setSelected] = useState({ element: null, value: null });
  const dropdownElement = useRef();

  if (!Array.isArray(children)) {
    children = [children];
  }

  let defaultItem = <></>;
  let items = [];
  for (let i = 0; i < children.length; i++) {
    if (children[i].type === DefaultItem) {
      defaultItem = children[i];
    } else {
      if(Array.isArray(children[i]))
      {
        children[i].forEach(element => {
          //items.push(element);
          items.push(<Item><div>allo</div></Item>);
        });
      }
      else
      {
        //items.push(children[i]);
        let test = (<Item><div>allo</div></Item>)
        items.push(<Item><div>allo</div></Item>);
      }
    }
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
      /*useEvent(window, 'DropdownSelectItemClick', (e) => {
                e.preventDefault()
                console.log(e);
                if(onChange)
                {
                    onChange(e.detail.value)
                }
                setSelected({element: e.detail.element, value: e.detail.value})
            })*/

      let callback = (e) => {
        e.preventDefault();
        if (onChange) {
          onChange(e.detail.value);
        }
        setSelected({ element: e.detail.element, value: e.detail.value });
      };

      let dropdownEl = dropdownElement.current;
      dropdownEl.addEventListener('DropdownSelectItemClick', callback);
      return () => dropdownEl.removeEventListener('DropdownSelectItemClick', callback);
    }
  }, [dropdownElement.current, onChange]);

  return (
    <StyledDropdownSelect type={type} ref={dropdownElement}>
      <Dropdown>
        <Header>
          <HeaderStyle>
            <div>{selected.element || defaultItem}</div>
            <i className="far fa-chevron-down"></i>
          </HeaderStyle>
        </Header>
        <List>{items}</List>
      </Dropdown>
    </StyledDropdownSelect>
  );
};
