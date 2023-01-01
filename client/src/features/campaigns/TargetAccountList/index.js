import { useState } from 'react';
import styled from 'styled-components'
import { Table } from '../../../_boilerplate/elements/Table';
import withActionPageLoader from '../../../_boilerplate/hoc/withActionPageLoader';
import {Pagination as PaginationControl} from '../../../_boilerplate/layouts/Pagination'
import {PaginationWrapper} from '../../../_boilerplate/controls/PaginationWrapper'

import { getTargetAccountList } from './actions';

export const Layout = styled.div`

`;
    
export const TargetAccountList = withActionPageLoader(getTargetAccountList,({loadedPageData}) => {
    
    const [state, setState] = useState(loadedPageData)
    let targetAccountList = loadedPageData.targetAccountList
    
    // target account/prospect table has a toggle to change view top right



    return (
    	<Layout>
            table TAL

            Account, description, nb. prospects connected in account, nb. employees, nb. followers, industry, geo,

            table  prospects

            <p>firstName, lastName, account, status, lastAction, lastActionDate, nextAction, connected?, messaged?</p>
            {/* should their be some order of priority? what's the use of this page, whats the insights we're looking to have? */}
            <br/>

        <PaginationWrapper data={targetAccountList} PaginationControl={PaginationControl} dataProp="data" dataName="prospects">
            <Table
            dataProp="data"
            colHeaders={[
              <>Name</>,
              <>Description</>,
              <>Status</>,
              <>Client name</>

          ]}
            colCustomSize="2fr 3fr 2fr 2fr 2fr"
            LineItem={({ row }) => {
                let {firstName, lastName, status, companyName : account} = row
                return (
                        <tr>
                            <td>{firstName} {lastName}</td>
                            <td>{status}</td>
                            <td>{account}</td>
                        </tr>
                    )
            }}
            />
        </PaginationWrapper>

    	</Layout>
    )
}
)