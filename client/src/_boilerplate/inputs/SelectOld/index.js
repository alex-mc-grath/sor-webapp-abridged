import React from 'react';
import { StyledSelect } from './Style';

export const Select = ({ label, options }) => {
  return (
    <StyledSelect>
      <label>{label}</label>
      <select value='All Departments'>
        <option value={options[0]}>{options[0]}</option>
        <option value={options[1]}>{options[1]}</option>
        <option value={options[2]}>{options[2]}</option>
      </select>
    </StyledSelect>
  );
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

<StyledSelect classNamePrefix='Select' options={options} value={{ value: 'hhh', label: 'hxf' }} />;
