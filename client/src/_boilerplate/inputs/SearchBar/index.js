import React, { useState } from 'react';
import { StyledSearchBar } from './Style';

export const SearchBar = ({ defaultValue = '', onChange, value=null, placeholder="Search here..." }) => {

  const [valueState, setValueState] = useState(defaultValue)

  const onValueChange = ({target}) => {
    setValueState(target.value)
    if(onChange){onChange(target.value)}
  }

  return (
    <StyledSearchBar>
      <div className='inputHolder'>
        <input type='search' placeholder={placeholder} value={value || valueState} onChange={onValueChange} />
      </div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.414 20.586L18.337 15.509C19.386 13.928 20 12.035 20 10C20 4.486 15.514 0 10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C12.035 20 13.928 19.386 15.509 18.337L20.586 23.414C21.366 24.195 22.634 24.195 23.414 23.414C24.195 22.633 24.195 21.367 23.414 20.586ZM3 10C3 6.14 6.14 3 10 3C13.86 3 17 6.14 17 10C17 13.86 13.86 17 10 17C6.14 17 3 13.86 3 10Z" fill="#A5A5A5" />
      </svg>
    </StyledSearchBar>
  );
};
