import React, {PropTypes} from 'react';
import styled from 'styled-components'

export const Layout = styled.div`
    width: 30rem;
    height: 3.2rem;
    background: white;
    transition: all 0.2s;

  
  .examples-list {
    display: flex;
    flex-wrap: wrap;
    
    &--card {
      margin: 10px;
      padding: 20px;
      background-color: #eee;
      max-width: 350px;
    }
  }


/*   */
  cursor: pointer;
  border: 2px solid lightgray;
  background-color: @backgroundColor;
  font-size: @height - 8px;
  justify-content: flex-start;
  max-width: @width;

  &--head {
    position: relative;
    outline: 2px solid navy;
    border-radius: 4px;
    padding: 2px @height 0px 2px;

    &-text {
      overflow: auto;
      display: flex;
      flex-direction: row;
      align-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      
      &--placeholder {
        color: lightgray;
        font-size: @height - 12px;
        padding: 4px;
      }
  
      &--selected-tag, &--editor-tag {
        margin: 0px 2px 2px 0px;
        min-height: @height - 2px;
        font-size: @height - 16px;
        line-height: @height - 15px;
        max-width: (@width - 32px);
        border-radius: 4px;
        position: relative;

        &:hover {
          color: white;
          background-color: green;
        }

        &--close-btn {
          position: absolute;
          right: 3px;
          top: 2px;
          border-radius: 2px;
          padding: 2px 4px;
          font-size: @height - 18px;
          &:hover {
            background-color: white;
            color: crimson;
          }
        }
      }
      &--selected-tag {
        padding: 4px @height + 2px 2px 4px;
        background-color: navy;
        border: 2px solid gray;
        color: white;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      &--editor-tag {
        padding: 2px;
        background-color: white;
        border: 2px solid gray;
        color: gray;
        cursor: text;
        margin-bottom: 2px;
        min-width: 100px;
        
        input {
          border: 0px;
          outline: 0px;
        }
        
        &--control-button {
          position: absolute;
          right: 0px;
          top: 0px;          
          
          &:after {
            content: "🔍";
            position: absolute;
            right: 2px;
            top: 2px;
            padding: 2px;
            color: lightgray;
            text-decoration: bold;
          }
        }

        &:hover {
          background-color: white;
          color: black;
        }
        
        &--empty-list {
          &--control-button {
            &:after {
              content: '+';
              position: absolute;
              right: 4px;
              cursor: pointer;
              line-height: 16px;
              padding: 0 4px;
              top: 5px;
              border: 2px solig lightgray;
              border-radius: 2px;
            }
          }
          
          &--control-button {
            &:hover {
              &:after {
                color: white;
                background-color: green;
                text-decoration: bold;
              }
            }
          }
        }
      }
    }

    &-opened, &-closed {
      &:after {
        position: absolute;
        transition: all .1s;
        background-color: white;
        line-height: 12px;
        right: 8px;
        content: '^';
      }
    }

    &-opened {
      &:after {
        transform: rotate(0deg);
        top: 12px;
      }
    }

    &-closed {
      &:after {
        transform: rotate(180deg);
        top: 4px;
      }
    }
  }

  &--popup {
    flex-direction: column;
    overflow-y: auto;
    background-color: @backgroundColor;
    width: @width;
    transition: height .1s;

    &-closed {
      height: 0px;
    }

    &-opened {
      border: 2px solid lightgray;
      height: 200px;
    }

    &-option {
      cursor: pointer;
      padding: 8px;
      margin: 2px 0;
      strong {
        color: crimson;
      }

      &:hover {
        background-color: black;
        color: white;
      }

      &-selected {
        background-color: navy;
        color: white;

        &:hover {
          background-color: crimson !important;
          color: white !important;
          strong {
            color: navy;
          }
        }
      }
    }
  }
}

.custom-select--non-tagged {
  .custom-select--head {
    padding: 0px;
    .custom-select--head-text {
      .custom-select--head-text--selected-tag {
        width: 100%;
        margin: 0px;
        border: 0px;
        padding: 6px;
        font-size: 16px;
        border-radius: 0px;
        
        &--close-btn {
          line-height: @height - 10px;
          padding-left: 8px;
          padding-right: 8px;
        }
      }
    }
  }
}
`;
    
export const SearchSelectMulti = () => {

    const constants = {
        CLOSED: 'CLOSED',
        OPENED: 'OPENED',
      }
      
      const items = [
        {
          children: [
            {
              children: [
                {
                  id: 6,
                  name: 'Green',
                },
                {
                  id: 7,
                  name: 'Blue',
                },
                {
                  children: [
                    {
                      id: 9,
                      name: 'The push() method adds new items to the end of an array, and returns the new length.',
                    },
                    {
                      id: 10,
                      name: 'Hot',
                    },
                    {
                      id: 11,
                      name: 'Cold',
                    },
                  ],
                  id: 8,
                  name: 'Red',
                },
              ],
              id: 3,
              name: 'Moscow',
            },
            {
              id: 4,
              name: 'New York',
            },
            {
              id: 5,
              name: 'Paris',
            },
          ],
          id: 1,
          name: 'Accounting',
        },
        {
          id: 2,
          name: 'Management',
        }
      ]
      
      class CustomSelect extends React.Component {
        constructor(props) {
          super(props)
          const { multiple, selectedIds } = props
          this.prepareItems()
      
          this.state = {
            popupState: constants.CLOSED,
            searchedText: undefined,
            selectedIds: multiple ? selectedIds : [selectedIds[0]].filter((x) => x),
          }
        }
      
        /**
         * Add item to flatten menu items
         */
        addItem = ({ name }) => {
          const ids = this.itemsFlattenSource.filter((x) => x).map((item) => item.item.id)
          const id = Math.max(...ids) + 1
          items.push({
            id,
            name,
          })
          this.toggleItem({ id })
          this.prepareItems()
        }
      
        /**
         * Render first tag as editor component which can edit a search text for filter items or add a tag,
         * if this.props.creatable === true
         */
        editorTag = ({ itemsEmpty }) => {
          const { creatable } = this.props
          const { searchedText } = this.state
          return (
            <span
              className={[
                "custom-select--head-text--editor-tag",
                `${creatable && itemsEmpty ? "custom-select--head-text--editor-tag--empty-list" : ""}`,
              ].filter((x) => x).join(" ")}
            >
              <input
                defaultValue={searchedText}
                onChange={this.searchByText}
                type="text"
              />
              <span
                className={[
                  `custom-select--head-text--editor-tag${creatable && itemsEmpty ? "--empty-list" : ""}--control-button`,
                ].join(" ")}
                onClick={() => this.addItem({ name: searchedText })}
              />
            </span>
          )
        }
      
        /**
         * Implement non recursive selecting from recursive tree items
         * @param {Number} id - item id
         * @param {Array} items - array of items
         */
        getDeep = ({ id, items }) => {
          let selectedItem, selectedLevel
          this.traverseDeep({
            callback: ({ item, level }) => {
              if (item.id === id) {
                selectedItem = item
                selectedLevel = level
              }
            },
            items,
          })
          return { selectedItem, selectedLevel }
        }
      
        /**
         * Highlight text to react element
         * @param {RegExp} regexp - regular expression to highlight
         * @param {String} text - text to highlight
         * @returns {React.element}
         */
        highlightText = ({ regexp, text }) => {
          const matchedText = (text.match(regexp) || [])[0]
          if (!matchedText) {
            return text
          }
          const items = text.split(regexp)
          return items.map((item, index) => {
            return (
              <React.Fragment key={`item--${index}`}>
                {item}
                {
                  index < items.length - 1 && (
                    <strong>{matchedText}</strong>
                  )
                }
              </React.Fragment>
            )
          })
        }
      
        /**
         * Render array of selected items as tags
         * @param {Array} ids - id of selected items
         * @param {Bool} itemsEmpty - check if no items to select
         */
        mapSelectedItems = ({ ids, itemsEmpty }) => {
          const { itemsFlattenSource } = this
          const { multiple, placeholder, searchable } = this.props
          return (
            <React.Fragment>
              {searchable && this.editorTag({ itemsEmpty })}
              {
                !ids.length && (
                  <span
                    className="custom-select--head-text--placeholder"
                  >
                    {placeholder}
                  </span>
                )
              }
              {
                (multiple ? ids : [ids[0]].filter((x) => x)).map((id) => {
                  const item = itemsFlattenSource.find((item) => {
                    return item.item.id === id
                  })
                  if (!item) {
                    return null
                  }
                  const { item: selectedItem, level: selectedLevel } = item
                  return (
                    <span
                      className="custom-select--head-text--selected-tag"
                      key={`selectedTag--${id}`}
                    >
                      ({selectedLevel}) - {selectedItem.name}
                      <span
                        className="custom-select--head-text--selected-tag--close-btn"
                        onClick={(event) => this.toggleItem({ event, id })}
                      >
                        X
                      </span>
                    </span>
                  )
                })
              }
            </React.Fragment>
          )
        }
      
        /**
         * Filter menu items by searched text
         * @returns {Array}
         */
        prepareItems = () => {
          this.itemsFlattenSource = this.toFlatten({ items })
        }
      
        /**
         * Repeats symbol count times
         * @param {Number} count - count of repeats
         * @param {String} symbol - symbol
         * @return {String}
         */
        repeat = ({ count, symbol = '-' }) => {
          return Array(count + 1).join(symbol)
        }
      
        /**
         * set searchedText value in state
         * @param {Event} event - event of text imput
         */
        searchByText = (event) => {
          const { OPENED } = constants
          const { value: searchedText } = event.target
          const newStateData = {
            searchedText,
          }
          if (this.state.popupState != OPENED) {
            newStateData.popupState = OPENED
          }
          this.setState(newStateData)
          this.prepareItems()
        }
      
        /**
         * Convert array of recursive tree of menu elements to flatten array
         * @param {Array} items - recursive tree of menu items
         */
        toFlatten = ({ items }) => {
          const itemsFlatten = []
          this.traverseDeep({
            callback: ({ item, level }) => {
              itemsFlatten.push({ item: { id: item.id, name: item.name }, level })
            },
            items,
          })
          return itemsFlatten
        }
      
        /**
         * Adds value to array if it not exists yet or remove if value includes to array
         * @param {Array} array - array
         * @param {String} value - toggled value
         * @returns {Array}
         */
        toggleArrayValue = ({ array, value }) => {
          const elementIndex = array.findIndex((element) => {
            return element === value
          })
          if (elementIndex >= 0) {
            array.splice(elementIndex, 1)
          } else {
            array.push(value)
          }
          return array
        }
      
        /**
         * toggle option to selected or not selected
         */
        toggleItem = ({ event = undefined, id }) => {
          if (event) {
            event.stopPropagation()
          }
          const { multiple } = this.props
          let { selectedIds } = this.state
          if (multiple) {
            selectedIds = this.toggleArrayValue({
              array: selectedIds,
              value: id,
            })
          } else if (selectedIds.includes(id)) {
            selectedIds = []
          } else {
            selectedIds = [id]
          }
          const { CLOSED } = constants
          this.setState({
            popupState: CLOSED,
            selectedIds,
          })
        }
      
        /**
         * Open / close select menu popup
         */
        togglePopup = () => {
          const { popupState } = this.state
          const { CLOSED, OPENED } = constants
          this.setState({ popupState: popupState === OPENED ? CLOSED : OPENED })
        }
      
        /**
         * Non-recurcive iteration over recursive tree of array elements
         * @param {Function} callback - callback for each item
         * @param {Array} items - recursive tree of menu items
         */
        traverseDeep = ({ callback, items }) => {
          const stack = items.map((item) => {
            return { item, level: 0 }
          })
      
          while (stack.length) {
            const { item, level } = stack[0]
            const { children } = item
            if (item.id && item.name) {
              callback({ item, level })
            }
            if (children) {
              const nextLevelItems = item.children.map((nextLevelItem) => {
                return { item: nextLevelItem, level: level + 1 }
              }) || []
              stack.splice(1, 0, ...nextLevelItems)
            }
            stack.shift()
          }
          return undefined
        }
      
        render() {
          const { popupState, searchedText, selectedIds } = this.state
          const { multiple, taggable } = this.props
          const { itemsFlattenSource } = this
          const regexp = new RegExp(searchedText, 'i')
          const itemsEmpty = !itemsFlattenSource.filter((item) => regexp.test(item.item.name)).length
      
          return (
            <div>
              {
                selectedIds.length ? (
                  <div>ids: {selectedIds.join(', ')}</div>
                ) : (
                  <div>Nothing selected</div>
                )
              }
              <div
                className={[
                  "custom-select",
                  !multiple && !taggable && "custom-select--non-tagged",
                ].filter((x) => x).join(" ")}
              >
                <div
                  className={[
                    "custom-select--head",
                    `custom-select--head-${popupState.toLowerCase()}`
                  ].join(" ")}
                  onClick={this.togglePopup}
                >
                  <div className="custom-select--head-text">
                    {this.mapSelectedItems({ ids: selectedIds, itemsEmpty })}
                  </div>
                </div>
              </div>
              <div
                className={[
                  "custom-select--popup",
                  `custom-select--popup-${popupState.toLowerCase()}`,
                ].join(" ")}
              >
                {
                  itemsFlattenSource.map(({ item, level }, index) => {
                    if (searchedText) {
                      if (!regexp.test(item.name)) {
                        return null
                      }
                    }
      
                    return (
                      <div
                        className={[
                          "custom-select--popup-option",
                          selectedIds.includes(item.id) ? "custom-select--popup-option-selected" : "",
                        ].join(" ")}
                        key={`option_${index}`}
                        onClick={() => this.toggleItem({ id: item.id })}
                      >
                        {this.repeat({ count: level + 2 })}&nbsp;
                        {
                          searchedText ? this.highlightText({ regexp, text: item.name }) : (
                            <span>{item.name}</span>
                          )
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }
      }
      
      CustomSelect.propTypes = {
        creatable: PropTypes.bool,      // If user enter unexisted item name - then button add appear to adding new tag
        items: PropTypes.shape({
          children: PropTypes.shape({}),
          id: PropTypes.number,
          name: PropTypes.string,
        }),                             // Recursive tree of menu elements
        multiple: PropTypes.bool,       // Enable multiple selection
        placeholder: PropTypes.string,  // select placeholder
        searchable: PropTypes.bool,     // User can filtering items by text in item names
        selectedIds: PropTypes.arrayOf(PropTypes.number),  // id of selected items
        taggable: PropTypes.bool,       // Selected items rendered as tags
      }

    return (
    	<Layout>
        test
    		{/* SearchSelectMulti
            <CustomSelect
                creatable
                items={items}
                multiple
                placeholder="Select values"
                searchable
                selectedIds={[8, 7]}
              /> */}
    	</Layout>
    )
}
