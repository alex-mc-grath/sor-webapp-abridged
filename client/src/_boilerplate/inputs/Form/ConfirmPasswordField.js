import { useState, useContext, useEffect, useMemo } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';
import inputStyles from './inputStyles';

const StyledPasswordField = styled.div`
  ${inputStyles};
  width: ${(props) => props.width};
`;

export const ConfirmPasswordField = ({ name = "confirmPassword", label=null, placeholder = null, defaultValue = null, passwordFieldName = "password", width}) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'password', [name]);

  const customValidation = (value, helpers) => {
    let passwordFieldValue = myFormik.getValue(passwordFieldName)
    if(value !== passwordFieldValue)
    {
      throw new Error('Field does not match password')
    }

    return value
  }

  const onChange = (e) => {
    setValue(e.target.value);
    myFormik.onValueChanged(inputName, e.target.value);
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = Joi.string().custom(customValidation, "confirm password").message('Field does not match password').required().messages({ 'string.empty': 'This field is required.' });

    myFormik.addValue(inputName, joiString, defaultValue || '', setError);
  }, []);

  return (
    <StyledPasswordField width={width} error={error}>
      <label>{label || name}</label>
      <input type="password" name={inputName} placeholder={placeholder || `Enter password`} onChange={onChange} value={value} onBlur={onBlur} onKeyDown={(e) => myFormik.onKeyDown(e)}/>
      {error !== '' && <p>{error}</p>}
    </StyledPasswordField>
  );
};
