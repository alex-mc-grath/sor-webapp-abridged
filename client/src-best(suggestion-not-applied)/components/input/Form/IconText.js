import styled from 'styled-components'

const StyledInput = styled.div`
    padding: 20px 0px;	
    position: relative;	

    i {
        position: absolute;
        top: 30px;
        color: ${({theme}) => theme.colors.success};
    }

    input {
        border: none;
        border-bottom: 2px solid ${({theme}) => theme.colors.underline};
        background: none;
        padding-top: 10px;
        padding-right: 0px;
        padding-bottom: 10px;
        padding-left: 24px;
        font-weight: 700;
        width: calc(100% - 24px);
        transition: .2s;
        color: ${({theme}) => theme.colors.text};
    }

    input:active,
    input:focus,
    input:hover {
        outline: none;
        border-bottom-color: ${({theme}) => theme.colors.text}; 
    }

    p {
        color: ${({theme}) => theme.colors.error};
    }
`;

const IconText = ({layout : {icon = (<></>), placeholder = '', type="text"}, name, formik}) => {
    return (
        <StyledInput>
            {icon}
            <input type={type} name={name} value={formik.values[name]} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={placeholder} />
            {formik.touched[name] && formik.errors[name] && <p>{formik.errors[name]}</p>}
        </StyledInput>
    )
}

export default IconText