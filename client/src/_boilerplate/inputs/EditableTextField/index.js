import {useState, useMemo, useRef} from 'react'
import styled from 'styled-components/macro'
import { useFormik } from 'formik'
import * as yup from 'yup';


const StyledEditableTextField = styled.div`

    input::placeholder {
        color:${({theme}) => theme.colors.body};
    }

    display:inline-block;

    ${({settings}) => {
            if(settings.width)
            {
                return `width: ${settings.width};`
            }
    }}

    p {
        color:${({theme}) => theme.colors.error};
    }

    span {
        color:${({theme}) => theme.colors.text};
        font-size: ${({settings}) => settings?.fontSize || "1rem"};

        &:hover {
            color:${({theme}) => theme.colors.highlight};
        }
    }

    input {
        font-size: ${({settings}) => settings?.fontSize || "1rem"};
        background:${({theme}) => theme.colors.underline};
        color:${({theme}) => theme.colors.highlight};
        border:none;
        width: 100%;
    }
`

const StyledLabel = styled.span`
    vertical-align: top;
    font-size: ${({settings}) => settings?.fontSize || "1rem"};
`

/* settings (all optional):
    - defaultValue
    - placeholder
    - type [string, number] default string
    - trim (bool) default true
    - min (int) default not used
    - max (int) default not used
    - required (bool) default true
    - fontSize (string) default "1rem"
    - width (optional) default not used

    onChange (function): calls the function with (value) parameter

    onEdit(function): calls the function with no paramaters
*/
export const EditableTextField = ({name="field", label=null, editState = true, onChange, onEdit, settings = {}}) => {

    const [edit, setEdit] = useState(editState)
    const [textValue, setTextValue] = useState(settings.defaultValue || settings.placeholder || 'value')
    const validation = useMemo(() => {

        let validation = yup

        if(settings.type) {
            validation = validation[settings.type]()
        } else {
            validation = validation.string()
        }

        if("trim" in settings) {
            if(settings.trim) validation = validation.trim()
        } else {
            validation = validation.trim()
        }

        if(settings.min) {
            validation = validation.min(settings.min)
        }

        if(settings.max) {
            validation = validation.max(settings.max)
        }

        if("required" in settings) {
            if(settings.required) validation = validation.required()
        } else {
            validation = validation.required()
        }

        return yup.object({[name]: validation})

    }, [settings])



    const formik = useFormik({
        initialValues: {
            [name]: settings.defaultValue || ''
        },
        validationSchema: validation,
        onSubmit: (values) => {

            setEdit(false)
            setTextValue(values[name])

            if(onChange)
            {
                onChange(values[name])
            }
        }
    })

    const form = useRef()

    const onBlur = (e) => {
        formik.handleBlur(e)
        
        var ele = document.getElementById('edit');
    
        const event = new Event('submit', {
            'bubbles': true,
            'cancelable': true
        });

        form.current?.dispatchEvent(event);
    }

    const onLabelClick = () => {
        if(onEdit) onEdit();
        setEdit(true)
    }

    return (
        <>
        {label && <StyledLabel settings={settings}>{label}&nbsp;</StyledLabel>}
        <StyledEditableTextField settings={settings}>
            {edit &&
                <form ref={form} onSubmit={formik.handleSubmit}>
                    <input type="text" name={name} value={formik.values[name]} onChange={formik.handleChange} onBlur={onBlur} placeholder={settings.placeholder || ''} autoFocus/>
                    {formik.touched[name] && formik.errors[name] && <p>{formik.errors[name]}</p>}
                </form>
            }
            {!edit &&
                <span onClick={onLabelClick}>{textValue}</span>
            }
        </StyledEditableTextField>
        </>
    )

}