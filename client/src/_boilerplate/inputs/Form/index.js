import { createContext, useRef } from 'react';
import { StyledReactForm } from './Style';

export * from './GridRow';
export * from './EmailField';
export * from './NameField';
export * from './PhoneField';
export * from './TextField';
export * from './TextareaField';
export * from './AddressField';
export * from './ZipCodeField';
export * from './SelectField';
export * from './CheckboxField';
export * from './PasswordField';
export * from './DatePickerField';
export * from './SubmitWrapper';
export * from './BooleanWrapper';
export * from './FileInputWrapper';
export * from './ConfirmPasswordField';
export * from './RadioField';
export * from './ErrorWrapper';
export * from './TextWrapper';

class ReactFormValidation {
  constructor(
    onSubmit = async () => {
      return;
    },
    props
  ) {
    this.values = {};
    this.validations = {};
    this.onSubmit = onSubmit;
    this.props = props;
    this.submitWrappers = {}
    this.errorCallbackFunctions = []
  }

  addValue(key, joiValidation, defaultValue = null, errorFunction = null) {
    this.values[key] = defaultValue;
    this.validations[key] = { validation: joiValidation, touched: false, errorFunction };
  }

  onValueChanged(key, value) {
    let validated = this.validations[key].validation.validate(value);
    this.validations[key].touched = this.validations[key].touched || !('error' in validated);
    this.values[key] = value;

    if (this.validations[key].errorFunction) {
      this.validations[key].errorFunction(validated.error?.message || '');
    }
  }

  onBlur(key, value) {
    let validated = this.validations[key].validation.validate(value);
    this.validations[key].touched = true;
    this.values[key] = value;

    if (this.validations[key].errorFunction) {
      this.validations[key].errorFunction(validated.error?.message || '');
    }
  }

  changeValidation(name, validation) {
    this.validations[name].validation = validation;
  }

  getValue(key) {
    return this.values[key] || null
  }

  addErrorCallback(f)
  {
    this.errorCallbackFunctions.push(f)
  }

  errorCallback(val)
  {
    this.errorCallbackFunctions.forEach(f => f(val))
  }

  async onKeyDown(e) {
    if(e.keyCode === 13)
    {
      Object.entries(this.submitWrappers).forEach(([_,func]) => func(true));
      //await new Promise(resolve => setInterval(resolve, 3000))
      await this.submit()
      Object.entries(this.submitWrappers).forEach(([_,func]) => func(false));
    }
  }

  addSubmitWrapperController(name, func) {
    this.submitWrappers[name] = func
  }

  async submit({name, onResult}) {
    let keys = Object.keys(this.values);
    let key = '';
    let hasError = false;

    this.errorCallback(null)

    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      let validated = this.validations[key].validation.validate(this.values[key]);
      this.validations[key].touched = true;

      if (this.validations[key].errorFunction) {
        if (validated.error) {
          hasError = true;
        }
        this.validations[key].errorFunction(validated.error?.message || '');
      }
    }

    if(onResult)
    {
      onResult({hasError})
    }

    if (!hasError) {
      await this.onSubmit(this.values, name, (val) => this.errorCallback(val));
    }
  }
}

export const ValidationContext = createContext();

export const Form = ({ onSubmit, children, ...otherProps }) => {
  const reactFormValidation = useRef(new ReactFormValidation(onSubmit,{...otherProps}));

  return (
    <ValidationContext.Provider value={reactFormValidation.current}>
      <StyledReactForm {...otherProps}>{children}</StyledReactForm>
    </ValidationContext.Provider>
  );
};
