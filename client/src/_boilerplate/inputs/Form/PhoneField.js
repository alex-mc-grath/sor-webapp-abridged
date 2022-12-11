import { useState, useContext, useEffect, useMemo } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';
import inputStyles from './inputStyles';

const StyledPhoneField = styled.div`
  ${inputStyles};
`;

export const PhoneField = ({ name = null, placeholder = null, defaultValue = null, validation = null }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'phone', [name]);

  const onChange = (e) => {
    setValue(e.target.value);
    myFormik.onValueChanged(inputName, e.target.value);
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = validation || Joi.string().max(128).message('cannot be over 128 characters').required().messages({ 'string.empty': 'phone is required' });

    myFormik.addValue(inputName, joiString, defaultValue || '', setError);
  }, []);

  return (
    <StyledPhoneField error={error}>
      <label>Phone</label>
      <input type='phone' name={inputName} placeholder={placeholder || 'Enter phone'} onChange={onChange} value={value} onBlur={onBlur} onKeyDown={(e) => myFormik.onKeyDown(e)}/>
      {error !== '' && <p>{error}</p>}
    </StyledPhoneField>
  );
};
