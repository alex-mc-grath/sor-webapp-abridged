import { useState, useContext, useEffect, useMemo } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';
import inputStyles from './inputStyles';

const StyledCheckboxField = styled.div`
  ${inputStyles};
  align-items: center;
  flex-direction: row-reverse;
  color: #858585;

  input {
    width: 20px;
    height: 20px;
    border-color: lightgrey;
    margin-right: 2rem;
  }
`;

export const CheckboxField = ({ name = null, defaultValue = null, label=null, validation = null, required=false, children }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || false);
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'checkboxField', [name]);

  const customValidation = (value, helpers) => {
    if(value !== true)
    {
      throw new Error('This field is required')
    }

    return value
  }

  const onChange = (e) => {
    setValue(e.target.checked);
    myFormik.onValueChanged(inputName, e.target.checked);
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = validation || Joi.boolean().required();
    if(required)
    {
      joiString = Joi.boolean().custom(customValidation, "checkbox required").message('This field is required');
    }

    myFormik.addValue(inputName, joiString, defaultValue || false, setError);
  }, []);

  return (
    <StyledCheckboxField>
      <label>{label || name}</label>
      <input type="checkbox" name={inputName} onChange={onChange} onBlur={onBlur} defaultChecked={defaultValue || false}/>
      {error !== '' && <p>{error}</p>}
    </StyledCheckboxField>
  );
};
