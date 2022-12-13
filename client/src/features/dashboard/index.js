import withActionPageLoader from '../../_boilerplate/hoc/withActionPageLoader'

import { Layout } from './Style' // Layout for basic page layout
import { getDashboardData } from './actions'
import { useState } from 'react';
import { AllCampaigns } from './charts/AllCampaigns';

import { GridRow } from '../../_boilerplate/layouts/GridRow';
import { H1 } from '../../components/elements/H1';
import styled from 'styled-components';


export const Dashboard = withActionPageLoader(getDashboardData,({loadedPageData}) => {

// should we have a custom hook for our UI management?
const [ui, setUi] = useState({ latestActivityView: false, datePickerView: false });


console.log(loadedPageData);
  return (
    <Layout>
        <H1>Dashboard</H1>

        <GridRow col='2'>
            {/* <AllCampaigns /> */}
            {/* <Chart2 /> */}
        </GridRow>

    </Layout>
  )

//   return (
//     <Layout>
//         <H1>Dashboard</H1>

//         <GridRow col='3'>
//             <Chart1 />
//             <Chart2 />
//             <Chart3 />
//         </GridRow>

//         <GridRow col='1'>
//             <LongChart />
//         </GridRow>
//     </Layout>
//   )
})