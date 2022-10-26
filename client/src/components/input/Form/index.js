
import {useMemo, useState} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';

import IconText from './IconText'
import FormSubmitButton from './FormSubmitButton'
import ErrorDiv from './ErrorDiv'
import FormSpinner from './FormSpinner'

/* layout []
    - type: one of [username, email, password, radio]
    - name
    - value
    - placeholder
    - WrapperComponent
    - data
*/
export const Form = ({layout, onSubmit, baseKey}) => {

    const [spinnerActive, setSpinnerActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [initialValues, validationSchema] = useMemo(() => {
        let initial = {};
        let validation = {};

        layout.forEach(input => {
            if(input.type === "text")
            {
                let name = input.name || "text";
                initial[name] = input.value || "";
                validation[name] = yup.string().trim().required();
            }
            else if(input.type === "username")
            {
                let name = input.name || "username";
                initial[name] = input.value || "";
                validation[name] = yup.string().trim().required();
            }
            if(input.type === "email")
            {
                let name = input.name || "email";
                initial[name] = input.value || "";
                validation[name] = yup.string().email().trim().required();
            }
            else if(input.type === "password")
            {
                let name = input.name || "password";
                initial[name] = "";
                validation[name] = yup.string().required();
            }
            else if(input.type === "radio")
            {
                let name = input.name || "single select"
                initial[name] = input.value || "";
                validation[name] = yup.string().trim().required();
            }
            else if(input.type === "label")
            {
                let name = input.name || "label";
                initial[name] = input.value || "";
                validation[name] = yup.string().trim().required();
            }
            else if(input.type === "custom")
            {
                let name = input.name || "custom"
                initial[name] = input.value || ""

                if(Array.isArray(input.value))
                {
                    validation[name] = yup.array().min(1, "At least one must be selected").required()
                }
                else
                {
                    validation[name] = yup.string().required("At least one must be selected")
                }
            }
        })

        return [initial, yup.object(validation)]
    }, [layout]);


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setSpinnerActive(() => true)
            setErrorMessage(() => '')
            onSubmit(values, errorCallback)
        }
    });


    const errorCallback = (errorMessage) => {
        setSpinnerActive(() => false)
        if(errorMessage)
        {
            setErrorMessage(() => errorMessage)
        }
    }


    let toReturn = [];
    layout.forEach((input,index) => {
        if(input.type === "text")
        {
            let name = input.name || "text"
            toReturn.push(<IconText key={baseKey+"_"+index} name={name} formik={formik} layout={{
                icon: input.icon || <i className="fa-solid fa-text"></i>,
                placeholder: input.placeholder || "text"
            }}/>)
        }
        else if(input.type === "username")
        {
            let name = input.name || "username"
            toReturn.push(<IconText key={baseKey+"_"+index} name={name} formik={formik} layout={{
                icon: <i className="fa-solid fa-user"></i>,
                placeholder: input.placeholder || "username"
            }}/>)
        }
        else if(input.type === "email")
        {
            let name = input.name || "email"
            toReturn.push(<IconText key={baseKey+"_"+index} name={name} formik={formik} layout={{
                icon: <i className="fa-solid fa-at"></i>,
                placeholder: input.placeholder || "email",
                type: "email"
            }}/>)
        }
        else if(input.type === "password")
        {
            let name = input.name || "password"
            toReturn.push(<IconText key={baseKey+"_"+index} name={name} formik={formik} layout={{
                icon: <i className="fa-solid fa-lock"></i>,
                placeholder: input.placeholder || "password",
                type: "password"
            }}/>)
        }
        else if(input.type === "radio")
        {
            let name = input.name || "single select"
            if(input.WrapperComponent)
            {
                let WrapperComponent = input.WrapperComponent
                toReturn.push(<WrapperComponent key={baseKey+"_"+index} baseKey={baseKey+"_"+index} name={name} formik={formik} data={input.data || {}}/>)
            }
            else
            {
                toReturn.push(<div key={baseKey+"_"+index}>TODO</div>)
            }
        }
        else if(input.type === "label")
        {
            let name = input.name || "label"
            toReturn.push(<IconText key={baseKey+"_"+index} name={name} formik={formik} layout={{
                icon: <i className="fa-solid fa-text"></i>,
                placeholder: input.placeholder || "label"
            }}/>)
        }
        else if(input.type === "custom")
        {
            let name = input.name || "custom"
            if(input.WrapperComponent)
            {
                let WrapperComponent = input.WrapperComponent
                toReturn.push(<WrapperComponent key={baseKey+"_"+index} baseKey={baseKey+"_"+index} name={name} formik={formik} data={input.data || {}}/>)
            }
            else
            {
                toReturn.push(<div key={baseKey+"_"+index}>WrapperComponent required</div>)
            }
        }
        else if(input.type === "submit")
        {
            if(spinnerActive)
            {
                toReturn.push(<FormSpinner key={baseKey+"_spin_"+index}/>)
            }
            else
            {
                toReturn.push(<div key={baseKey+"_"+index}><FormSubmitButton>{input.text || "Submit"}</FormSubmitButton></div>)
            }
        }
    });


    return (
        <form onSubmit={formik.handleSubmit}>
        {errorMessage !== '' && <ErrorDiv>{errorMessage}</ErrorDiv>}
        {toReturn}
        </form>
    )

}


export default Form;