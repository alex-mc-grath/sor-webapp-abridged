import React, { useState } from 'react';
import { StyleToggleSwitchWithText } from './Style';

export const ToggleSwitch = ({ onChange = null, defaultValue = false, switchLabels=['',''] }) => {
  const [value, setValue] = useState(defaultValue);

  const onToggle = () => {
        let newValue = !value
        setValue(newValue)
        if(onChange)
        {
            onChange(newValue)
        }
  }

  return (
<>
    <StyleToggleSwitchWithText className='switch' onClick={onToggle}>
      {/* <input type='checkbox' /> */}
      <span className={`slider round ${value ? 'active' : ''}`}></span>
      <span className={`text ${value ? 'active' : ''}`}>{value ? switchLabels[0] : switchLabels[1]}</span>
    </StyleToggleSwitchWithText>
    </>
  );
};
