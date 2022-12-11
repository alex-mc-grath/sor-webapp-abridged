import styled from 'styled-components';

const StyledInput = styled.div`
  padding: 20px 0px;
  position: relative;

  &:hover i,
  &:hover ::placeholder {
    color: ${(props) => props.theme.colors.primary};
  }

  i {
    position: absolute;
    top: 30px;
    color: grey;
  }

  input {
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

  input:active,
  input:focus,
  input:hover {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const IconText = ({ layout: { icon = <></>, placeholder = '', type = 'text' }, name, formik }) => {
  return (
    <StyledInput>
      {icon}
      <input type={type} name={name} value={formik.values[name]} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={placeholder} />
      {formik.touched[name] && formik.errors[name] && <p>{formik.errors[name]}</p>}
    </StyledInput>
  );
};

export default IconText;
