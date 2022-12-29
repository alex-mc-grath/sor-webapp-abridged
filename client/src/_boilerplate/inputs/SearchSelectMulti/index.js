import styled from 'styled-components'

import {SearchSelect} from '../SearchSelect'

export const Layout = styled.div`

.wrapper{
	background: ${props=>props.theme.colors.secondaryShade1};
}
.search {
	height:2.8rem;
	input{
	background: transparent;
	}
}
`;
    
export const SearchSelectMulti = () => {
    return (
    	<Layout>
    		<SearchSelect/>
    	</Layout>
    )
}
