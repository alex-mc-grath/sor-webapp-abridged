import { useState, useContext, useEffect, useMemo, cloneElement } from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';

import { Select } from '../Select';
import inputStyles from './inputStyles';

import Timekeeper from 'react-timekeeper';

const StyledTimePickerField = styled.div`
  ${inputStyles};

  .fa-clock{
      margin:auto 0;
      color: #adadad;
      margin-right: 0.15rem;
  }
`;

export const TimePickerField = ({ name = null, label = null, defaultValue = '', validation = null, showLabel=true, required=true, children }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'timePicker', [name]);

  const onChange = (e) => {
    setValue(e);
    myFormik.onValueChanged(inputName, e);
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = validation || Joi.string().required().messages({ 'string.empty': 'You must select a time', 'string.base': 'You must select a time'});
    if(!required)
    {
      joiString = validation || Joi.string().allow('');
    }

    myFormik.addValue(inputName, joiString, defaultValue, setError);
  }, []);

  return (
    <StyledTimePickerField>
      {showLabel && <label>{label ? label : name}</label>}
      {cloneElement(children,{"onTimeChanged": onChange})}
      {error !== '' && <p>{error}</p>}
    </StyledTimePickerField>
  );
};
