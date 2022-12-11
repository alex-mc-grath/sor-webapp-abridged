import { useState, useContext, useEffect, useMemo } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';
import inputStyles from './inputStyles';

const StyledNameField = styled.div`
  ${inputStyles};
  /* margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : ''}; */
`;

export const NameField = ({ name = 'name', placeholder = null, label='Name', defaultValue = null, validation = null, ...props }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  // const inputName = useMemo(() => name || 'name', [name]);

  const onChange = (e) => {
    setValue(e.target.value);
    myFormik.onValueChanged(name, e.target.value);
  };

  const onBlur = () => {
    myFormik.onBlur(name, value);
  };

  useEffect(() => {
    let joiString = validation || Joi.string().max(128).message('cannot be over 128 characters').required().messages({ 'string.empty': 'name is required' });

    myFormik.addValue(name, joiString, defaultValue || '', setError);
  }, [name]);

  return (
    <StyledNameField {...props} error={error}>
      <label>{label || name}</label>
      <input type='text' name={name} placeholder={placeholder || 'Enter Name'} onChange={onChange} value={value} onBlur={onBlur} onKeyDown={(e) => myFormik.onKeyDown(e)}/>
      {error !== '' && <p>{error}</p>}
    </StyledNameField>
  );
};
