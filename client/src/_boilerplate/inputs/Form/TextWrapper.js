import { useState, useContext, useEffect, useMemo, cloneElement } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components/macro';
import inputStyles from './inputStyles';

const StyledTextField = styled.div`
  ${inputStyles};
  margin-bottom: ${({verticalSpacing}) => verticalSpacing || '2rem'};
`;

export const TextWrapper = ({ name = null, label = null, showLabel=true, placeholder = null, defaultValue = null, validation = null, disabled = false, onChanged = null, required=true, readOnly=false, useRef=null, children, ...props }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'text', [name]);

  const onChange = (e) => {
    setValue(e.target.value);
    myFormik.onValueChanged(inputName, e.target.value);

    if (onChanged) {
      setValue(e.target.value);
    }
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = null;
    if(required)
    {
      joiString = validation || Joi.string().trim().max(128).message('cannot be over 128 characters').required().messages({ 'string.empty': 'This field is required.' });
    }
    else
    {
      joiString = validation || Joi.string().trim().max(128).message('cannot be over 128 characters').allow('');
    }
    

    myFormik.addValue(inputName, joiString, defaultValue || '', setError);
  }, []);

  useEffect(() => {
    if (validation) {
      myFormik.changeValidation(inputName, validation);
    }
  }, [validation,value]);

  return (
    <StyledTextField {...props} {...myFormik.props} error={error}>
      <label>
        {showLabel && <span>{label || name}</span>}
      </label>
      {/*<input type="text" ref={useRef} name={inputName} placeholder={placeholder || `Enter ${inputName}`} onChange={onChange} value={value} onBlur={onBlur} disabled={disabled} readOnly={readOnly} onKeyDown={(e) => myFormik.onKeyDown(e)}/>*/}
      {cloneElement(children, {useRef, inputName, placeholder, onChange, value, onBlur, disabled, readOnly, onKeyDown: myFormik.onKeyDown, error:(error !== '')})}
      {error !== '' && <p>{error}</p>}
    </StyledTextField>
  );
};
