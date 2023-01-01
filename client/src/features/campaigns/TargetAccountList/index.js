import { useState } from 'react';
import styled from 'styled-components'
import withActionPageLoader from '../../../_boilerplate/hoc/withActionPageLoader';
import { getTargetAccountList } from './actions';

export const Layout = styled.div`

`;
    
export const TargetAccountList = withActionPageLoader(getTargetAccountList,({loadedPageData}) => {
    
    const [state, setState] = useState(loadedPageData)
    console.log('test alex1245', state);
    console.log('test alex1245', state.targetAccountList[0]);
    

    return (
    	<Layout>
            table
            <p>firstName, lastName, account, status, lastAction, lastActionDate, nextAction, connected?, messaged?</p>
            {/* should their be some order of priority? what's the use of this page, whats the insights we're looking to have? */}
            <br/>
    		{state.targetAccountList[0].campaignName} {state.targetAccountList[0].firstName} {state.targetAccountList[0]._id}
    	</Layout>
    )
}
)