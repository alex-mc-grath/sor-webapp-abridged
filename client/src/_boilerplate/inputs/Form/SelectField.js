import { useState, useContext, useEffect, useMemo, cloneElement } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components/macro';

import { Select } from '../Select';
import inputStyles from './inputStyles';

const StyledSelectField = styled.div`
  ${inputStyles};
  border: none;
  transition: none;
  /*margin: 0;
  padding: 0;*/
  margin-top: 0.2rem;

  svg {
    margin-right: 1.25rem;
  }

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

  

  margin-bottom: ${({verticalSpacing}) => verticalSpacing || '3rem'};


`;

export const SelectField = ({ name = null, label = null, placeholder = null, defaultValue = null, validation = null, showLabel = true, onChange = null, children, ...props }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'select', [name]);

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
    let joiString = validation || Joi.string().required().messages({ 'string.empty': 'Selection is required', 'string.base': 'Selection is required' });

    myFormik.addValue(inputName, joiString, defaultValue, setError);
  }, []);

  return (
    <StyledSelectField {...props} {...myFormik.props}>
      {showLabel && <>{label || name}</>}
      <div style={{marginTop: "0.4rem"}}>{cloneElement(children, { onChange: onChildValueChange, HeaderStyle: "form", type: props.type || "grey", error: (error !== '') })}</div>
      {error !== '' && <p>{error}</p>}
    </StyledSelectField>
  );
};
