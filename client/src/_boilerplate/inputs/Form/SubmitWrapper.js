import { useState, useContext, useEffect, useMemo, cloneElement} from 'react';
import { ValidationContext } from './index';
import Joi from 'joi';
import styled from 'styled-components';
import inputStyles from './inputStyles';

export const SubmitWrapper = ({ children, name="submitWrapper", onResult }) => {
  const myFormik = useContext(ValidationContext);
  const [loading, setLoading] = useState(false)

  const onClick = async (e) => {
    setLoading(true)
    await myFormik.submit({name: name || "", onResult});
    setLoading(false)
  };

  useEffect(() => {
    myFormik.addSubmitWrapperController(name, setLoading)
  }, [])

  return (
      <>{cloneElement(children,{"onClick": onClick, "loading":loading})}</>
  );
};
