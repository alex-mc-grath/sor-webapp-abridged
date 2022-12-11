import React, {useEffect, useState} from "react"

export const SortWrapper = ({children, data = [], dataProp="data", sortKey=null, ascending=true}) => {
    let newData = [...data]

    if(sortKey && newData.length > 0)
    {
        if(ascending)
        {
            if(typeof newData[0][sortKey] === "string")
            {
                newData.sort((a,b) => b[sortKey].toLowerCase().localeCompare(a[sortKey].toLowerCase()) )
            }
            else
            {
                newData.sort((a,b) => a[sortKey] > b[sortKey] ? -1 : 1 )
            }
        }
        else
        {
            if(typeof newData[0][sortKey] === "string")
            {
                newData.sort((a,b) => a[sortKey].toLowerCase().localeCompare(b[sortKey].toLowerCase()) )
            }
            else
            {
                newData.sort((a,b) => a[sortKey] > b[sortKey] ? 1 : -1)
            }
        }
    }

    let wrappedObject = children
    if(Array.isArray(children))
    {
        wrappedObject = children[0]
    }

    return (
        <>
        {React.cloneElement(wrappedObject, {[dataProp]: newData})}
        </>
    )
}