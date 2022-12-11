
import React, {useState} from "react"

//filters is an array
export const FilterWrapper = ({children, data, dataProp="data", filters={}}) => {

    let newData = data
    let keys = Object.keys(filters)
    let filter = null

    for(let i=0;i<keys.length;i++)
    {
        filter= keys[i]
        let val = filters[filter]
        if(val !== null)
        {
            if(typeof val === "function")
            {
                newData = newData.filter(val)
            }
            else
            {
                newData = newData.filter((value) => val === value[filter])
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