import styled from 'styled-components';

const StyledInput = styled.div`
  padding: 20px 0px;
  position: relative;

  i {
    position: absolute;
    top: 30px;
    color: ${({ theme }) => theme.colors.primary};
  }

  select {
    border: none;
    border-bottom: 0.5px solid lightgrey;
    border-radius: 0;
    background: none;
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 24px;
    font-weight: 500;
    width: calc(100% - 24px);
    transition: 0.2s;
    color: grey;
  }

  select:active,
  select:focus,
  select:hover {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const IconSelect = ({ icon = <></>, name, formik, onChange = null, children }) => {
  const onValueChange = (e) => {
    formik.handleChange(e);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <StyledInput>
      {icon}
      <select name={name} value={formik.values[name]} onChange={onValueChange} onBlur={formik.handleBlur}>
        {children}
      </select>
      {formik.touched[name] && formik.errors[name] && <p>{formik.errors[name]}</p>}
    </StyledInput>
  );
};

export default IconSelect;
