import { DropdownSelect, DefaultItem, Item } from "../../../../_boilerplate/inputs/Select/DropdownSelect";
import { Style } from "./Style";


export const DropdownField = ({items, defaultValue}) => {


    return (
      <Style>
          <DropdownSelect width='30rem' defaultValue={defaultValue}>
          <DefaultItem>
            {defaultValue}
          </DefaultItem>
          
          {items.map((item)=><Item>{item}</Item>)}

        </DropdownSelect>
      </Style>
    )
}

// Option2 is not part of our naming convention -> just an option to suggest a possible alternative
export const DropdownFieldOption2 = ({items, defaultValue}) => {

    return <DropdownSelect defaultItem={defaultValue} items={items} />
}

// is it possible/easy to implement a simple warning (for dev only) when the text of the dropdown is too long and it breaks the design? That'd save simlpe headaches