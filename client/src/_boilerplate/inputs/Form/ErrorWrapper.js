import { useState, useContext, useEffect, cloneElement } from "react"
import { ValidationContext } from './index';

export const ErrorWrapper = ({children, Element = null, onlyOnError = true}) => {
    const myFormik = useContext(ValidationContext);
    const [error, setError] = useState(null)

    useEffect(() => {
        myFormik.addErrorCallback(setError);
      }, []);


    if(error === null && onlyOnError)
    {
        return <></>
    }
    else
    {
        if(Element)
        {
            return <Element error={error} />
        }
        else
        {
            return <>{cloneElement(children,{"error": error})}</>
        }
    }

}