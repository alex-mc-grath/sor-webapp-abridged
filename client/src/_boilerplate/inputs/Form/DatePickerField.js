import { useState, useContext, useEffect, useMemo, cloneElement } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';

import { Select } from '../Select';
import inputStyles from './inputStyles';

const StyledDateSelectField = styled.div`
  ${inputStyles};
  margin-bottom: ${({verticalSpacing}) => verticalSpacing || '3rem'};
`;

export const DatePickerField = ({ name = null, label = null, defaultValue = null, validation = null, showLabel=true, required=true, children }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'datePicker', [name]);

  const onChange = (e) => {
    setValue(e);
    myFormik.onValueChanged(inputName, e);
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = validation || Joi.date().required().messages({ 'date.empty': 'You must select a date', 'date.base': 'You must select a date'});
    if(!required)
    {
      joiString = validation || Joi.date().allow(null);
    }

    myFormik.addValue(inputName, joiString, defaultValue, setError);
  }, []);

  return (
    <StyledDateSelectField {...myFormik.props}>
      {showLabel && <label>{label ? label : name}</label>}
      {cloneElement(children,{"onDateChanged": onChange})}
      {error !== '' && <p>{error}</p>}
    </StyledDateSelectField>
  );
};
