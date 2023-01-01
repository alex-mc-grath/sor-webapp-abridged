import { Layout } from "./Style"

import { SearchSelectMulti as SearchSelectMultiB } from "../../../_boilerplate/inputs/SearchSelectMulti"
import { Label } from "../../elements/Label"

    
export const SearchSelectMulti = ({name}) => {
    return (
    	<Layout>
            {/* <Label>{name}:</Label> */}
            <SearchSelectMultiB name={name} />
    	</Layout>
    )
}
