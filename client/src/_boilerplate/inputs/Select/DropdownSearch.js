import { useState, useRef, useEffect, useMemo, Fragment } from 'react';
import styled from 'styled-components/macro';
import { SearchBar } from '../SearchBar';
import { Dropdown, Header, List } from './Dropdown';

const StyledItem = styled.div`
  padding: 1.5rem 1.3rem;
  background: white;

  &:hover {
    background: #418eeb;
    color: white;
  }
`;

const StyledDropdownSearch = styled.div`
  /* margin: 1rem; */
  /* margin-top: 0px; */
  width: 100%;
  
`;

export const Item = ({ value = '', text = '', children, disabled = false }) => {
  const itemElement = useRef();

  const itemClicked = () => {
    if (!disabled) {
      let itemClickEvent = new CustomEvent('DropdownSearchItemClick', {
        detail: { value, text, element: children },
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

export const PinnedItem = ({ value = '', text = '', children, disabled = false }) => {
  const itemElement = useRef();

  const itemClicked = () => {
    if (!disabled) {
      let itemClickEvent = new CustomEvent('DropdownSearchItemClick', {
        detail: { value, text, element: children },
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

export const DropdownSearch = ({ defaultValue = null, children, onChange = null, HeaderStyle = SearchBar }) => {
  const [selected, setSelected] = useState({ element: null, value: null });
  const [value, setValue] = useState(defaultValue || { value: '', text: '' });
  const [filteredItems, setFilteredItems] = useState([]);
  const dropdownElement = useRef();
  const dropdownController = useRef(null);

  const items = useMemo(() => {
    if (!Array.isArray(children)) {
      children = [children];
    }

    let searchableItems = [];
    let pinnedItems = [];

    for (let i = 0; i < children.length; i++) {
      if (children[i].type === Item) {
        searchableItems.push({ value: children[i].props.value || '', element: children[i], text: children[i].props.text || children[i].props.value || '--Error--' });
      } else if (children[i].type === PinnedItem) {
        pinnedItems.push({ value: children[i].props.value || '', element: children[i], text: children[i].props.text || children[i].props.value || '--Error--' });
      }
    }

    setFilteredItems(searchableItems);

    return {
      searchableItems,
      pinnedItems,
    };
  }, [children]);

  const onTextChange = (text) => {
    text = text.trim();
    setValue({ value: text, text });

    if (dropdownController.current) {
      dropdownController.current.showDropdown((state) => true);
    }

    filterOptions(text);
  };

  const filterOptions = (text) => {
    if (text !== '') {
      text = text.toLowerCase();
      let foundItem = null;
      let newFilteredOptions = items.searchableItems.filter((item) => {
        if (item.value.toLowerCase().startsWith(text)) {
          if (item.value.toLowerCase() === text) {
            foundItem = item;
          }
          return true;
        } else {
          return false;
        }
      });

      if (foundItem !== null) {
        if (onChange) {
          dropdownController.current.showDropdown((state) => false);
          onChange(foundItem.value);
        }
      } else {
        for (let i = 0; i < items.pinnedItems.length; i++) {
          if (items.pinnedItems[i].value.toLowerCase() === text) {
            dropdownController.current.showDropdown((state) => false);
            onChange(items.pinnedItems[i].value);
            break;
          }
        }
      }
      setFilteredItems(newFilteredOptions);
    } else {
      setFilteredItems(items.searchableItems);
    }
  };

  const onItemSelected = (value, text) => {
    dropdownController.current.showDropdown(false);
    setValue({ value, text });
    filterOptions(text);
  };

  useEffect(() => {
    if (dropdownElement.current) {
      let callback = (e) => {
        e.preventDefault();
        if (onChange) {
          onChange(e.detail.value);
        }
        setValue({ value: e.detail.value, text: e.detail.text });
      };

      dropdownElement.current.addEventListener('DropdownSearchItemClick', callback);
      let toRemove = dropdownElement.current;
      return () => toRemove.removeEventListener('DropdownSearchItemClick', callback);
    }
  }, [dropdownElement]);

  return (
    <StyledDropdownSearch ref={dropdownElement}>
      <Dropdown controllerCallback={(val) => (dropdownController.current = val)}>
        <Header>
          <HeaderStyle onChange={onTextChange} value={value.text} />
        </Header>
        <List>
          {filteredItems.map((item, index) => (
            <div onClick={() => onItemSelected(item.value, item.text)} key={'item_' + index}>
              {item.element}
            </div>
          ))}
          {items.pinnedItems.map((item, index) => (
            <div onClick={() => onItemSelected(item.value, item.text)} key={'pin_' + index}>
              {item.element}
            </div>
          ))}
        </List>
      </Dropdown>
    </StyledDropdownSearch>
  );
};
