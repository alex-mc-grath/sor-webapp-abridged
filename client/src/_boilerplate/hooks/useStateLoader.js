import { useState } from 'react';

import { Loader } from '../Theme/base/Loader'

export default function useStateLoader({ action, callback = null, errorElement = (<></>), initialValue = null, loaderSizeRatio = 1 }) {
    const [data, setData] = useState(initialValue)
    const [loadState, setLoadState] = useState({ loading: false, loaded: false })
    const [error, setError] = useState(false)

    const load = async (params) => {
        try {
            setLoadState({ loading: true, loaded: false })

            let data = await action(params)
            setData(data);

            setError(false)
            setLoadState({ loading: false, loaded: true })

            if (callback) {
                callback(data);
            }
        }
        catch (error) {
            setError(true)
            setData(null)
            setLoadState({ loading: false, loaded: false })
            throw error
        }
    }

    const LoaderElement = ({ children }) => {

        if (loadState.loading) {
            return (<Loader sizeRatio={loaderSizeRatio} />)
        }
        else {
            if (error) {
                return (<>{errorElement}</>)
            }
            else if (loadState.loaded) {
                return (<>{children}</>)
            }
            else {
                return (<></>)
            }
        }
    }

    return [data, load, LoaderElement, setData]
}