import React, {useRef, useState, useEffect} from 'react'

class SortControl
{
    constructor(manager, setSortData, sortKey)
    {
        this.sortDirection = 0
        this.manager = manager
        this.setSortData = setSortData
        this.sortKey = sortKey
        this.randomId = Math.random().toString()

        this.manager.addReset(this.randomId,() => {this.sortDirection = 0})
    }

    onSortDirectionChange(dir)
    {
        this.sortDirection = dir
        this.manager.resetArrows(this.randomId)

        if(dir === 1)
        {
            this.setSortData({key:this.sortKey, ascending: true})
        }
        else if(dir === -1)
        {
            this.setSortData({key:this.sortKey, ascending: false})
        }
    }
}

class ArrowFilterManager
{
    constructor()
    {
        this.resetFunctions = {}
        this.sortControls = {}
    }

    addReset(id, resetFunction)
    {
        this.resetFunctions[id] = resetFunction
    }

    resetArrows(id)
    {
        Object.keys(this.resetFunctions).forEach(key => {
            if(key !== id)
            {
                (this.resetFunctions[key])()
            }
        })
    }


}

/*const SortControl = ({sortKey, manager, setSortData, Element, randomId, ...otherProps}) => {
    const [sortDirection, setSortDirection] = useState(0)

    const onSortDirectionChange = (dir) => {
        setSortDirection(dir)
        manager.resetArrows(randomId)

        if(dir === 1)
        {
            setSortData({key:sortKey, ascending: true})
        }
        else if(dir === -1)
        {
            setSortData({key:sortKey, ascending: false})
        }
    }

    useEffect(() => {
        manager.addReset(randomId,() => setSortDirection(0))
    }, [])

    return <Element sortDirection={sortDirection} setSortDirection={onSortDirectionChange} {...otherProps} />
}*/

const SortWrapper = ({children, manager, data = [], dataProp="data", sortKey=null, ascending=true}) => {

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

export default function useSortManager(Element)
{
    const manager = useRef(new ArrowFilterManager())
    const [sortData,setSortData] = useState({key:null, ascending: true})

    //return custom Element that we create on hte fly using current manager + passed Element
    return ({sortKey, ...otherProps}) => {
        let control = manager.current.sortControls[sortKey]
        if(control)
        {
            return <Element sortDirection={control.sortDirection} setSortDirection={(dir) => control.onSortDirectionChange(dir)} {...otherProps} />
        }
        else
        {
            control = new SortControl(manager.current, setSortData, sortKey)
            manager.current.sortControls[sortKey] = control
            return <Element sortDirection={control.sortDirection} setSortDirection={(dir) => control.onSortDirectionChange(dir)} {...otherProps} />
        }
    }
}