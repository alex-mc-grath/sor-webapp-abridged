
import React, {useEffect, useState} from "react"

export const PaginationWrapper = ({children, data = [], dataProp="data", showCount = 7, PaginationControl = () => <></>, ...otherProps}) => {

    const [currentPage, setCurrentPage] = useState(0)

    const onPreviousPageClick = () => {
        if(currentPage > 0)
        {
            setCurrentPage(currentPage-1)
        }
    }

    const onNextPageClick = () => {
        if(data.length % showCount === 0)
        {
            if(currentPage+1 < Math.floor(data.length / showCount))
            {
                setCurrentPage(currentPage+1)
            }
        }
        else if(currentPage < Math.floor(data.length/showCount))
        {
            setCurrentPage(currentPage+1)
        }
    }

    const onSetPageClick = (index) => {
        let page = index-1
        if(page < 0)
        {
            page = 0;
        }
        else if(page >= Math.floor(data.length/showCount))
        {
            page = Math.floor(data.length/showCount)
        }

        setCurrentPage(page)
    }

    let wrappedObject = children
    if(Array.isArray(children))
    {
        wrappedObject = children[0]
    }

    let newData = data.slice(currentPage*showCount,(currentPage+1)*showCount)

    useEffect(() => {
        if( currentPage >= Math.ceil(data.length/showCount))
        {
            setCurrentPage(Math.max(0,Math.ceil(data.length/showCount)-1))
        }
    }, [data])

    return (
        <>
        {React.cloneElement(wrappedObject, {[dataProp]: newData})}
        <div>
            <PaginationControl currentPage={currentPage+1} numberOfPages={Math.ceil(data.length/showCount)} showCount={Math.min(showCount, newData.length)} totalCount={data.length} nextPage={onNextPageClick} previousPage={onPreviousPageClick} setPage={onSetPageClick} {...otherProps}/>
        </div>
        </>
    )
}