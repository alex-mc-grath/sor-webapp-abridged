import React, {useState, useEffect} from 'react'
import {Loader} from '../../_boilerplate/elements/Loader'

let previousAction = null;
let previousData = null

export const clearPageLoaderCache = () => {
    previousAction = null
    previousData = null
}

const withActionPageLoader = (actionFunction,ComponentFunction) => {

    return (props) => {

        const [loadedPageData, setLoadedPageData] = useState(null)
        const [error, setError] = useState(null)

        /*const setLoadedPageData = (value) => {
            setLoadedPageData_debug(value)
        }*/

        const reloadPageData = () => {
            previousData = null
            setLoadedPageData(null)
            startLoad()
        }

        const startLoad = async () => {
            try
            {
                const loaded = await actionFunction(props)
                previousData = loaded
                setLoadedPageData(loaded)
            }
            catch(err)
            {
                setError(err.message)
            }
        }

        useEffect(() => {
            if(previousAction === actionFunction)
            {
              setLoadedPageData(previousData)
            }
            else
            {
              previousAction = actionFunction
              startLoad()
            }

        },[actionFunction])

        if(error)
        {
            return (<h2>{error}</h2>)
        }
        else if(loadedPageData)
        {
            return <ComponentFunction {...props} loadedPageData={loadedPageData} reloadPageData={reloadPageData}/>
        }
        else
        {
            return <Loader />
        }

    }
}

export default withActionPageLoader