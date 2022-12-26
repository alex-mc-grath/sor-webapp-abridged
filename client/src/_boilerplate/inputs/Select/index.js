import React, { useState } from 'react';
import { DropdownItem, DropdownStyle, SelectContainer, SelectLabelButton, Textlabel } from './Style';
// import flag from '../../../../media/img/us-flag.png';
import { useEffect } from 'react';

//settings prop(optional): hidden (boolean), side ('left' or 'right'), itemPadding(string)
export const Select = ({ textLabel, label, values = [], onChange, type, onRequestClose, settings = {}, defaultValue=null, children }) => {
  const [currentValue, setCurrentValue] = useState(() => {
    if(!defaultValue){return ''}

    for(let i=0;i<values.length;i++)
    {
      if(typeof values[i].value !== "undefined")
      {
        if(values[i].value === defaultValue)
        {
          return values[i].text
        }
      }
      else if(values[i] === defaultValue)
      {
        return values[i]
      }

    }

    return ''
  });

  const [open, setOpen] = useState(false);

  const { hidden = null, side = null, dropdownWidth = null, itemPadding = null } = settings;

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value) => {
    setCurrentValue(value);
  };
  const handleChange = (value) => {
    handleValueChange(value);
    // call method, if it exists
    if (onChange) onChange(value);
    // close, after all tasks are finished
    handleClose();
  };

  useEffect(() => {
    window.addEventListener('click', () => setOpen(false));
    window.addEventListener('click', () => onRequestClose);

    return () => {
      window.removeEventListener('click', () => setOpen(false));
      window.removeEventListener('click', () => onRequestClose);
    };
  }, []);

  return (
    <>
      <SelectContainer onClick={(e) => e.stopPropagation()}>
        {textLabel && <Textlabel>{textLabel}</Textlabel>}
        <SelectLabelButton hidden={hidden} type={type} onClick={handleOpen}>
          {type === 'language' && <>language</>
          // <img src={flag} width="30px" alt="" />
          } {currentValue !== '' ? (currentValue.text || currentValue) : label} <i className="far fa-chevron-down"></i>
        </SelectLabelButton>
        <DropdownStyle isVisible={open} side={side} dropdownWidth={dropdownWidth}>
          {values.map((value, index) => (
            <DropdownItem onClick={() => handleChange(value)} active={value.value ? value.value === currentValue : value === currentValue} key={index} itemPadding={itemPadding}>
              {value.text || value}
            </DropdownItem>
          ))}
        </DropdownStyle>
      </SelectContainer>
    </>
  );
};
