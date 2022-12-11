import { useState, useContext, useEffect, useMemo } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';
import inputStyles from './inputStyles';

const StyledPasswordField = styled.div`
  ${inputStyles};
  width: ${(props) => props.width};
`;

export const PasswordField = ({ name = null, placeholder = null, label="Password", defaultValue = null, validation = null, required=true, width }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'password', [name]);

  const onChange = (e) => {
    setValue(e.target.value);
    myFormik.onValueChanged(inputName, e.target.value);
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = null;
    if(required)
    {
      joiString =
      validation ||
      Joi.string()
        .min(8)
        .message('Password must be at least 8 characters long.')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        .message('Password must contain at least one upper case, one lowercase, one number and one special character.')
        .required()
        .messages({ 'string.empty': 'Password is required.' });
    }
    else
    {
      joiString =
      validation ||
      Joi.string()
        .min(8)
        .message('Password must be at least 8 characters long.')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        .message('Password must contain at least one upper case, one lowercase, one number and one special character.').allow('');
    }

    myFormik.addValue(inputName, joiString, defaultValue || '', setError);
  }, []);

  return (
    <StyledPasswordField width={width} error={error}>
      <label>{label || inputName}</label>
      <input type="password" name={inputName} placeholder={placeholder || `Enter password`} onChange={onChange} value={value} onBlur={onBlur} onKeyDown={(e) => myFormik.onKeyDown(e)}/>
      {error !== '' && <p>{error}</p>}
    </StyledPasswordField>
  );
};
