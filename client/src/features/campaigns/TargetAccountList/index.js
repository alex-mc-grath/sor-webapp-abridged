import { useState } from 'react';
import styled from 'styled-components'
import withActionPageLoader from '../../../_boilerplate/hoc/withActionPageLoader';
import { getTargetAccountList } from './actions';

export const Layout = styled.div`

`;
    
export const TargetAccountList = withActionPageLoader(getTargetAccountList,({loadedPageData}) => {
    const [state, setState] = useState(loadedPageData)
    console.log('test alex1245', state);

//     if(loadedPageData !== undefined){
//     // let data = state[0]
//     setState(loadedPageData)
//     // let {campaignName, firstName, _id} = data
// }

    return (
    	<Layout>
    		{state.campaignName} {state.firstName} {state._id}
    	</Layout>
    )
}
)