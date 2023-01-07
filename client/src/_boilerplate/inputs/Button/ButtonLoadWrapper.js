import { useRef, useState } from 'react'

import { MainButton } from '../MainButton'
// import { Loader } from "../../../../App/AppComponents/Loader"

export const ButtonLoadWrapper = ({ onClick, ButtonComponent = MainButton, spinnerSize = "3rem", SpinnerElement = Loader, ...props }) => {

    const [loading, setLoading] = useState(false)

    const wrappedOnCLick = async (...args) => {
        setLoading(true)
        await onClick(...args)
        setLoading(false)
    }

    return (
        <>
            {loading && <SpinnerElement size={spinnerSize} margin="0" />}
            {!loading && <ButtonComponent onClick={wrappedOnCLick} {...props} />}
        </>
    )
}