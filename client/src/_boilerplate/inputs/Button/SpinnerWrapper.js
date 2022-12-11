import { useState, cloneElement, useRef } from "react"
import { LoaderThree } from "../../elements/LoaderThree"

export const SpinnerWrapper = ({onClick, children, spinnerSize="2rem", Element=null, loading=false}) => {
    const [loadingState, setLoadingState] = useState(false)
    const loadingRef = useRef(false);

    const wrappedOnClick = async (...args) => {
        setLoadingState(true)
        await onClick(...args)
        setLoadingState(false)
        loadingRef.current = false;
    }

    const elementOnClick = (...args) => {
        if(loadingRef.current === false)
        {
            loadingRef.current = true;
            wrappedOnClick(...args);
        }
    }

    let newLoadingState = loadingState || loading

    if(Element !== null)
    {
        return <Element loading={newLoadingState} onClick={elementOnClick}/>
    }  

    return (
        <>
        {newLoadingState && <LoaderThree size={spinnerSize} />}
        {!newLoadingState && <>{cloneElement(children, {onClick: wrappedOnClick})}</>}
        </>
    )
}