import { useState, useContext, useEffect, useMemo } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';
import inputStyles from './inputStyles';

const StyledEmailField = styled.div`
  ${inputStyles};
  margin-bottom: ${({verticalSpacing}) => verticalSpacing || '3rem'};
`;

export const EmailField = ({ name = null, label=null, placeholder = null, defaultValue = null, validation = null }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'email', [name]);

  const onChange = (e) => {
    setValue(e.target.value);
    myFormik.onValueChanged(inputName, e.target.value);
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString =
      validation ||
      Joi.string()
        .email({ tlds: { allow: false } })
        .message('invalid email format')
        .max(128)
        .message('cannot be over 128 characters')
        .required()
        .messages({ 'string.empty': 'Email is required' });

    myFormik.addValue(inputName, joiString, defaultValue || '', setError);
  }, []);

  return (
    <StyledEmailField {...myFormik.props} error={error}>
      <label>{label || 'Email'}</label>
      <input type='text' name={inputName} placeholder={placeholder || 'Enter Email'} onChange={onChange} value={value} onBlur={onBlur} onKeyDown={(e) => myFormik.onKeyDown(e)}/>
      {error !== '' && <p>{error}</p>}
    </StyledEmailField>
  );
};
