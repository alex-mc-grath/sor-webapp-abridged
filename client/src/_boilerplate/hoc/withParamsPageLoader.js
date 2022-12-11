import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {LoaderThree, StyledLoaderThree} from '../gui/elements/LoaderThree'
import styled from 'styled-components';

const FullScreenLoaderThree = styled(StyledLoaderThree)`
  display: flex;
  margin: auto;
  min-height: 50vh;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

const DefaultLoader = <LoaderThree size={'100px'} color={'#418EEB'} StyledLoader={FullScreenLoaderThree} />

const withParamsPageLoader = (actionFunction,ComponentFunction, loader = DefaultLoader) => {

    return (props) => {

        const [loadedPageData, setLoadedPageData_debug] = useState(null)
        const [error, setError] = useState(null)
        const urlParams = useParams()


        const setLoadedPageData = (value) => {
            setLoadedPageData_debug(value)
        }

        useEffect(() => {

            (async() => {
                try
                {
                    const loaded = await actionFunction(urlParams)
                    setLoadedPageData(loaded)
                }
                catch(err)
                {
                    setError(err.message)
                }
            })()

        },[actionFunction])

        if(error)
        {
            return (<h2>{error}</h2>)
        }
        else if(loadedPageData)
        {
            return <ComponentFunction {...props} loadedPageData={loadedPageData} params={urlParams}/>
        }
        else
        {
            return <>{loader}</>
        }

    }
}

export default withParamsPageLoader