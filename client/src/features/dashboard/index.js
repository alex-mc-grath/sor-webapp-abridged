import withActionPageLoader from '../../_boilerplate/hoc/withActionPageLoader'

import { Layout } from './Style' // Layout for basic page layout
import { H4 } from '../../components/elements/H4'
import { Label } from '../../components/elements/Label'
import { Status } from '../../components/elements/Status'
import { getDashboardData } from './actions'
import { useState } from 'react';
import { AllCampaigns } from './charts/AllCampaigns';
import {SumOfActions} from './charts/SumOfActions';

import { GridRow } from '../../_boilerplate/layouts/GridRow';
import { H1 } from '../../components/elements/H1';
import { TempGreyPlaceholder } from '../../_boilerplate/elements/TempGreyPlaceholder';
import { Link } from 'react-router-dom';
import { Img } from '../../components/elements/Img';
import { DarkCard as Card } from '../../components/layouts/Card';
import companyLogo from '../../app/assets/imgs/exia-logo.png'
import { ProfileImgThumbnail } from '../../components/elements/ProfileImgThumbnail';
import {Col} from '../../_boilerplate/layouts/Col'
import { Loader } from '../../components/elements/Loader';
import { StatsCard } from '../../components/layouts/StatsCard';
import { ProgressMeter } from '../../_boilerplate/elements/ProgressMeter';
import { LiveReport } from './liveReport';
import { EngineHealth } from './engineHealth'


export const Dashboard = withActionPageLoader(getDashboardData,({loadedPageData}) => {

// should we have a custom hook for our UI management?
const [ui, setUi] = useState({ latestActivityView: false, datePickerView: false });


let hardcodedSelectedCampaign = loadedPageData.campaigns[1]
let {campaignName} = hardcodedSelectedCampaign


  return (
    <Layout>
        <H1>Dashboard</H1>
          <Link to='/app/campaigns' className='title-navigation'>All campaigns</Link> &nbsp;<i className="fa-sharp fa-solid fa-seedling"></i>&nbsp; <span className="campaign-name">{'Exia New Funnel' || campaignName}</span>
        
        <GridRow colTemplate='4fr 3fr'>

          <Card justify='space-between' direction='row'>
            <GridRow colTemplate='1fr 3fr 6fr 1fr' margin='0' width='100%' gridGap='6rem'>
              <ProfileImgThumbnail src={companyLogo} />
              <Col>
               <Label>Campaign:</Label>
                <Status>Exia New Funnel</Status>
                </Col>
              <Col margin='0'>
                <ProgressMeter startDate="Jan 1st, 2023" endDate="Mar 1st, 2023" />
               </Col>
              <Col margin='0'>
                <Label>Currently:</Label>
                <Status>SCANNING</Status>
              </Col>
            </GridRow>
          </Card>
                
          <Card direction='row'>
            <StatsCard name="New Connections" statsNumber={3803} />
            <StatsCard name="Accounts connected" statsNumber={25} />
            <StatsCard name="Formally introduced" statsNumber={75} />
          </Card>
      
        </GridRow>

        <GridRow col='3'>
          <Card  justify='flex-start' align='flex-start'>
            <H4>Sum of actions</H4>
            <SumOfActions />
          </Card>
          <Card justify='flex-start' align='flex-start' gap='1rem'>
            <H4>Engine health</H4>
            <EngineHealth />
          </Card>
          <Card justify='center' align='flex-start' display='block' >
            <H4>Live report</H4>
            <LiveReport />
          </Card>
        </GridRow>
        <GridRow col='3'>
        <Card height='16vh' justify='center' align='flex-start' display='block'  >
          <H4>GEO penetration</H4>
          {/* <StatsCard name="%" statsNumber={75} /> */}
        </Card>
        <Card justify='center' align='flex-start' display='block' >
            <H4>Scan progress&nbsp; /&nbsp; Validation</H4>
        </Card>
        <Card justify='flex-start' align='flex-start'>
            {/* <H4>Queued actions</H4> */}
          </Card>
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