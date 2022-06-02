import {StyledSortableList} from './StyledSortableList'
import { useLogic } from './useLogic'

//!IMPORTANT: items is an array of {key, item, data} !!!!!!!!!!!!!!!!!!!!!!!!!!!!

const SortableList = (props) => {

    const {items, state, onDrag, onDragOver, onDrop, dragState, emptyElement} = useLogic(props)

    return (
        <StyledSortableList>
            {state.length > 0 && state.map(item => (
                <li 
                    key={item.key} id={item.key}
                    name={"_sortableListItem"}
                    draggable={true} 
                    onDrag={onDrag} 
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    /*className={`${dragState === 'drag-over' ? 'on-drag-over' : '' }`}*/
                >
                    {item.item}
                </li>
            ))}
            {state.length == 0 &&
                <div name={"_sortableListItem"} onDrop={onDrop} onDragOver={onDragOver}>{emptyElement}</div>
            }
        </StyledSortableList>
    )
}

export {SortableList}