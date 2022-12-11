import React, { useState } from 'react';
import { StyleToggleSwitchWithText } from './Style';

export const ToggleSwitchWithText = ({ options, switchActive, setSwitchActive }) => {
  // const [switchActive, setSwitchActive] = useState(false);

  return (
    <StyleToggleSwitchWithText className='switch' onClick={() => setSwitchActive(switchActive)}>
      {/* <input type='checkbox' /> */}

      <span className={`slider round ${switchActive ? 'active' : ''}`}></span>
      <span className={`text ${switchActive ? 'active' : ''}`}>{switchActive ? options[1] : options[0]}</span>
    </StyleToggleSwitchWithText>
  );
};
