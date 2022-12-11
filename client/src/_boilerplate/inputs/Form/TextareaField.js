import { useState, useContext, useEffect, useMemo } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';
import inputStyles from './inputStyles';

const StyledTextareaField = styled.div`
  ${inputStyles};
  

  input {
    height: 10rem;
  }
`;

export const TextareaField = ({ name = null, label=null, placeholder = null, defaultValue = null, validation = null, rows, cols }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'text', [name]);

  const onChange = (e) => {
    setValue(e.target.value);
    myFormik.onValueChanged(inputName, e.target.value);
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = validation || Joi.string().max(128).message('cannot exceed 1024 characters').required().messages({ 'string.empty': 'This field is required' });

    myFormik.addValue(inputName, joiString, defaultValue || '', setError);
  }, []);

  return (
    <StyledTextareaField error={error}>
      <label>{label || name}</label>
      <textarea name={inputName} rows={rows} cols={cols} placeholder={placeholder || `Enter ${inputName}`} onChange={onChange} value={value} onBlur={onBlur} onKeyDown={(e) => myFormik.onKeyDown(e)}/>
      {error !== '' && <p>{error}</p>}
    </StyledTextareaField>
  );
};
