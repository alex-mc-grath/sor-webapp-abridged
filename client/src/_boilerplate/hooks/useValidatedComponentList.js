import {useState} from 'react';

/*
    params:
        required: true if you need at least 1 in the list

    //how to use: ** this useValidatedComponentList returns [validated, addComponent, components, getValues, deleteComponents]

        1) addComponent({...values} or null)

        2) components.map(component => <MyComponent {...component.props} />

        3) {validated && ...}
*/
export default function useValidatedComponentList({required = false} = {})
{
    const [components, setComponents] = useState([])
    const [validated, setValidated] = useState(!required)

    const addComponent = (values = null) => {
        setComponents((state) => {
            let newState = [...components, {
                "validated": false,
                "values": null,
                "props": {
                    "onSave": (values) => onSave(components.length, values),
                    "onEdit" : () => onEdit(components.length)
                }
            }]

            return newState
        })

        setValidated(false)
    }

    const onSave = (idx, values) => {
        setComponents((state) => {
            let lastState = [...state]
            lastState[idx].validated = true
            lastState[idx].values = values
            return lastState
        })

        let validated = true;
        for(let i=0;i<components.length;i++)
        {
            if(!components[i].validated && i !== idx)
            {
                setValidated(() => false)
                return
            }
        }
        setValidated(() => true)
    }

    const onEdit = (idx) => {
        setComponents((state) => {
            let lastState = [...state]
            lastState[idx].validated = false
            return lastState
        })

        setValidated(() => false)
    }

    const getValues = () => {
        return components.map(component => component.values)
    }

    const deleteComponents = (idx) => {
        if(typeof idx === "undefined")
        {
            setComponents([])
            setValidated(!required)
        }
        else
        {
            setComponents((state) => {
                let lastState = [...state]
                lastState.splice(idx,1)
                return lastState
            })
        }
    }

    return [validated, addComponent, components, getValues, deleteComponents]
}