import React, { createContext, useState, useContext, cloneElement } from "react";

const SortWrapperContext = createContext();

export const SortControl = ({sortKey, children}) => {
    const {sortSettings, setSortDirection} = useContext(SortWrapperContext);

    if(sortSettings.key === sortKey)
    {
        return <>{cloneElement(children,{sortDirection: (sortSettings.ascending ? 1 : -1), setSortDirection: (dir) => setSortDirection(sortKey,dir) })}</>
    }
    else
    {
        return <>{cloneElement(children,{sortDirection: 0, setSortDirection: (dir) => setSortDirection(sortKey,dir) })}</>
    }
}

export const SortWrapper = ({ data=[], dataProp="data", sortKey=null, ascending=true, children }) => {
  
    const [sortSettings, setSortSettings] = useState({key: sortKey, ascending: ascending})

    const setSortDirection = (key, dir) => {
        if(dir === 1)
        {
            setSortSettings({key, ascending: true})
        }
        else if(dir === -1)
        {
            setSortSettings({key, ascending: false})
        }
        else
        {
            setSortSettings({key: null, ascending: true})
        }
    }

    let newData = [...data]

    if(sortSettings.key && newData.length > 0)
    {
        if(!sortSettings.ascending)
        {
            if(typeof newData[0][sortSettings.key] === "string")
            {
                newData.sort((a,b) => b[sortSettings.key].toLowerCase().localeCompare(a[sortSettings.key].toLowerCase()) )
            }
            else
            {
                newData.sort((a,b) => a[sortSettings.key] > b[sortSettings.key] ? -1 : 1 )
            }
        }
        else
        {
            if(typeof newData[0][sortSettings.key] === "string")
            {
                newData.sort((a,b) => a[sortSettings.key].toLowerCase().localeCompare(b[sortSettings.key].toLowerCase()) )
            }
            else
            {
                newData.sort((a,b) => a[sortSettings.key] > b[sortSettings.key] ? 1 : -1)
            }
        }
    }

    let wrappedObject = children
    if(Array.isArray(children))
    {
        wrappedObject = children[0]
    }

    return (
        <SortWrapperContext.Provider value={{sortSettings, setSortDirection}}>
            {React.cloneElement(wrappedObject, {[dataProp]: newData})}
        </SortWrapperContext.Provider>
    )
};