import { useState, useContext, useEffect, useMemo } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';
import inputStyles from './inputStyles';

const StyledZipCodeField = styled.div`
  ${inputStyles};
`;

export const ZipCodeField = ({ name = null, placeholder = null, defaultValue = null, validation = null, ...props }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'zip', [name]);


  const onChange = (e) => {
    setValue(e.target.value);
    myFormik.onValueChanged(inputName, e.target.value);
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = validation || Joi.string().max(10).message('cannot be over 10 characters').required().messages({ 'string.empty': 'zip is required' });

    myFormik.addValue(inputName, joiString, defaultValue || '', setError);
  }, []);

  return (
    <StyledZipCodeField {...props} error={error}>
      <label>Zip Code</label>
      <input type='text' name={inputName} placeholder={placeholder || `Enter zip code`} pattern='\d*' onChange={onChange} value={value} onBlur={onBlur} onKeyDown={(e) => myFormik.onKeyDown(e)}/>
      {error !== '' && <p>{error}</p>}
    </StyledZipCodeField>
  );
};
