import { useState, useContext, useEffect, useMemo, cloneElement } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components/macro';

import { Select } from '../Select';
import inputStyles from './inputStyles';

const StyledBooleanWrapper = styled.div`
  ${inputStyles};
  border: none;
  transition: none;
  margin: 0;
  padding: 0;

  input {
    border: none;
    transition: none;
    padding: 0;
    margin: 0;
    &:hover {
      border: none;
      transition: none;
    }
  }
`;

export const BooleanWrapper = ({ name = null, label = null, defaultValue = false, validation = null, showLabel = true, onChange = null, children}) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(!!defaultValue);
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'booleanToggle', [name]);

  const onChildValueChange = (e) => {
    setValue(e);
    myFormik.onValueChanged(inputName, e);
    if (onChange) {
      onChange(e);
    }
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = validation || Joi.boolean().required();

    myFormik.addValue(inputName, joiString, defaultValue, setError);
  }, []);

  return (
    <StyledBooleanWrapper>
      {showLabel && <label>{label || name}</label>}
      {cloneElement(children, { onChange: onChildValueChange })}
      {error !== '' && <p>{error}</p>}
    </StyledBooleanWrapper>
  );
};
