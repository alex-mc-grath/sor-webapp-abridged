import { useState, useContext, useEffect, useMemo, cloneElement} from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';

import { Select } from '../Select';
import inputStyles from './inputStyles';

const StyledFileInputWrapper = styled.div`
  ${inputStyles};
`;

export const FileInputWrapper = ({ name = null, label=null, validation = null, showLabel=true, onChange=null, required=true, children }) => {
  const myFormik = useContext(ValidationContext);
  const [value, setValue] = useState(null);
  const [error, setError] = useState('');

  const inputName = useMemo(() => name || 'files', [name]);

  const onChildValueChange = (e) => {
    myFormik.onValueChanged(inputName, e);
    if(onChange)
    {
      onChange(e)
    }
  };

  const onBlur = () => {
    myFormik.onBlur(inputName, value);
  };

  useEffect(() => {
    let joiString = null

    if(required)
    {
        joiString = validation || Joi.any().custom((value, helper) => {
            if(value === null)
            {
                return helper.message("At least one file must be selected")
            }
        });
    }
    else
    {
        joiString = validation || Joi.any().required()
    }

    myFormik.addValue(inputName, joiString, null, setError);
  }, []);

  useEffect(() => {
    if(validation)
    {
      myFormik.changeValidation(inputName, validation)
    }
  },[validation])

  return (
    <StyledFileInputWrapper>
      {showLabel && <label>{label || name}</label>}
      {cloneElement(children,{"onChange": onChildValueChange, error: (error !== '')})}
      {error !== '' && <p>{error}</p>}
    </StyledFileInputWrapper>
  );
};
