import withActionPageLoader from '../../_boilerplate/hoc/withActionPageLoader'

import { Layout } from './Style' // Layout for basic page layout
import { H4 } from '../../components/elements/H4'
import { Label } from '../../components/elements/Label'
import { Status } from '../../components/elements/Status'
import { getDashboardData } from './actions'
import { useState } from 'react';
// import { AllCampaigns } from './charts/AllCampaigns';
import { SumOfActions } from './charts/SumOfActions';

import { GridRow } from '../../_boilerplate/layouts/GridRow';
import { H1 } from '../../components/elements/H1';
import { TempGreyPlaceholder } from '../../_boilerplate/elements/TempGreyPlaceholder';
import { Link } from 'react-router-dom';
import { Img } from '../../components/elements/Img';
import { DarkCard as Card } from '../../components/layouts/DarkCard';
import companyLogo from '../../app/assets/imgs/fake-company-logo.png'
import { ProfileImgThumbnail } from '../../components/elements/ProfileImgThumbnail';
import { Col } from '../../_boilerplate/layouts/Col'
import { Loader } from '../../components/elements/Loader';
import { StatsCard } from '../../components/layouts/StatsCard';
import { ProgressMeter } from '../../_boilerplate/elements/ProgressMeter';
import { LiveReport } from './liveReport';
import { EngineHealth } from './engineHealth'
import { GeoPenetration } from './geoPenetration'
import { Row } from '../../_boilerplate/layouts/Row'
import { StatsNumber } from '../../components/elements/StatsNumber'
import { TargetAccountList } from '../campaigns/TargetAccountList'


export const Dashboard = withActionPageLoader(getDashboardData, ({ loadedPageData }) => {

  // should we have a custom hook for our UI management?
  const [ui, setUi] = useState({ latestActivityView: false, datePickerView: false });

  const [view, setView] = useState(false);

  let hardcodedSelectedCampaign = loadedPageData.campaigns[1]
  let { campaignName } = hardcodedSelectedCampaign


  return (
    <Layout>
      <H1>Dashboard</H1>
      <Link to='/app/campaigns' className='title-navigation'>All campaigns</Link> &nbsp;<i className="fa-sharp fa-solid fa-seedling"></i>&nbsp; <span className="campaign-name">{'Exia New Funnel' || campaignName}</span>

      {view &&
        <GridRow>
          <Card height='73vh'>
            <TargetAccountList />
          </Card>
        </GridRow>
      }

      {!view &&
        <>

          {/* 
    <GridRow colTemplate='4fr 3fr'>
        <CampaignGeneralInfo />
        <KeyStats />
    </GridRow>
*/}

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
              <StatsCard name="Accounts connected" statsNumber={941} />
              <StatsCard name="Formally introduced" statsNumber={45} />
            </Card>

          </GridRow>

          <GridRow col='3'>
            <Card justify='flex-start' align='flex-start'>
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
            <Card height='19vh' justify='center' align='flex-start' display='block'  >
              <H4>GEO penetration</H4>
              <GeoPenetration />
            </Card>

            <Card justify='center' align='flex-start' display='block' >
              {/* <H4>Scan progress&nbsp; |&nbsp; Validation &nbsp; |&nbsp; Active</H4> */}
              <H4>Campaign progress</H4>
              <GridRow col='3' gridGap='1rem 0' margin='0' textAlign='center'>
                <Label active>Scan</Label>
                <Label>Validation</Label>
                <Label>Active</Label>
                <i class="fa-solid fa-badge-check" style={{ color: '#08a2e5' }}></i>
                <i class="fa-thin fa-list-check"></i>
                {/* <i class="fa-thin fa-badge-check" style={{color:'#08a2e5'}}></i> */}
                {/* <i class="fa-duotone fa-circle-play"></i> */}<i class="fa-thin fa-circle-play"></i>
                {/* <i class="fa-duotone fa-cubes-stacked"></i> */}
                {/* <i class="fa-solid fa-list-check"></i> */}
              </GridRow>
            </Card>

            <Card justify='flex-start' align='flex-start'>
              <Row margin='0' justify='space-between' width='100%'>
                <H4>Target Account List</H4>
                <Label fontSize='1.8rem'><i class="fa-solid fa-rectangle-list" onClick={() => setView(true)}></i></Label>
              </Row>
              <Row justify='space-between' width='70%'>
                <Label><StatsNumber>847</StatsNumber> accounts</Label>
                <Label><StatsNumber>932</StatsNumber> prospects</Label>
              </Row>
            </Card>
          </GridRow>
        </>
      }

    </Layout>
  )
})