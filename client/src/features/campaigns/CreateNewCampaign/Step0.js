import Joi from 'joi';
import React, { useEffect, useState } from 'react';
import { Form, BooleanWrapper, DatePickerField, GridRow, SelectField, TextField, RadioField, SubmitWrapper } from '../../../_boilerplate/inputs/Form';
import { FormGroup } from '../../../_boilerplate/inputs/Form(old)/FormGroup';
import { MainButton } from '../../../_boilerplate/inputs/MainButton';
import { DropdownSearch, PinnedItem, Item } from '../../../_boilerplate/inputs/Select/DropdownSearch';
import { ToggleSwitch } from '../../../_boilerplate/inputs/ToggleSwitch';
import { Row } from '../../../_boilerplate/layouts/Row'

const RadioSelect = ({anonymity = null, onChange}) => {

  const [selection, setSelection] = useState(anonymity)

  const onSelect = (typeCode) => {
    setSelection(typeCode)
    if(onChange)
    {
      onChange(typeCode)
    }
  }

  return (
    <Row margin='1rem 0' width='250px' justify="space-between">
      <MainButton type={selection === "ANONYMOUS" ? "" :"empty"} onClick={() => onSelect('ANONYMOUS')}>anonymously</MainButton>
      <MainButton type={selection === "CONFIDENTIAL" ? "" :"empty"} onClick={() => onSelect('CONFIDENTIAL')}>confidentially</MainButton>
    </Row>
  )

}

export const Step0 = ({ caseData, manager, formIndex }) => {
  const [selection, setSelection] = useState('');
  const [error, setError] = useState('');
  const [otherEnabled, setOtherEnabled] = useState(false);

  const onSelectFieldChange = (e) => {
    setSelection(e.target.value);
  };

  const onSubmit = (values) => {
    manager.setFormData(values)
    manager.setFormIndex(formIndex)
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup margin="2rem auto">
        <h2 style={{ margin: 'auto' }}>Do you want to report</h2>
        <Row>
          {/*
          <RadioField defaultValue={caseData} value={'anonymously'} onClick={(e) => onSelectFieldChange(e)} />
          <RadioField defaultValue={caseData} value={'confidentially'} onClick={(e) => onSelectFieldChange(e)} />
          */}
          <SelectField name="anonymity" defaultValue={'anon'||caseData.anonymity} showLabel={false}>
            <RadioSelect anonymity={'anon'||caseData.anonymity}/>
          </SelectField>
        </Row>
        <center>
          <small>{error && error}</small>
        </center>
        <Row>

        <SubmitWrapper>
          <MainButton margin="">Confirm</MainButton>
        </SubmitWrapper>

        </Row>
      </FormGroup>
      {}
    </Form>
  );
};
