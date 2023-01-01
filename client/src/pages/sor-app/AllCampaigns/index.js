import React, { useMemo } from 'react'
import withActionPageLoader from '../../../_boilerplate/hoc/withActionPageLoader'
import { getAllCampaigns } from './actions';
import { StyledAllCampaigns } from './Style'
import {MainButton} from '../../../_boilerplate/inputs/MainButton'
import { useNavigate } from 'react-router-dom';
import { H1 } from '../../../components/elements/H1';
import { Table } from '../../../_boilerplate/elements/Table';
import { Col } from '../../../_boilerplate/layouts/Col';
import { GridRow } from '../../../_boilerplate/layouts/GridRow';
import { DarkCard as Card } from '../../../components/layouts/DarkCard'

export const AllCampaigns = withActionPageLoader(getAllCampaigns, ({loadedPageData}) => {

  const navigate = useNavigate()

  const allCampaigns = loadedPageData.campaigns
  console.log(allCampaigns);

  return (
    <StyledAllCampaigns>
        <H1>All campaigns</H1>

        <Col width='75%'>
          <MainButton marginLeft='auto' margin='2rem 0' onClick={()=>navigate('/app/create-new-campaign')} width='fit-content'>+</MainButton>
            <Table
              data={allCampaigns}
              colHeaders={[
                // <>Category<SortControl sortKey="category"><TableSortArrows /></SortControl></>, 


// This table should have:




                <>Campaign name</>,
                <>Description</>,
                <>Type</>,
                <>Client name</>,
                <></>,

            ]}
              colCustomSize="2fr 3fr 2fr 2fr 2fr"
              LineItem={({ row }) => (
                <tr>
                  <td>{row.campaignName}</td>
                  <td>{row.campaignDescription}</td>
                  <td>{row.campaignType}</td>
                  <td>{row.username}</td>
                  {/* <td>{row.username}</td> */}
                  <td><MainButton text='edit' width='fit-content' /></td>
                </tr>
              )} />

          </Col>
          <Col>
                {/* <Card
                  width='100%'
                  height='100%'
                /> */}
          </Col>
        {/* </GridRow> */}


        {/* {allCampaigns.map(campaign=>(

            <tr>
              <td>{campaign.campaignName}</td>
              <td>{campaign.campaignDescription}</td>
              <td>{campaign.campaignType}</td>
              <td>{String(campaign.active)}</td>
              <td>{campaign.invitationDelayInDays}</td>
              <td>{campaign.setInactiveAfterDays}</td>
              <td>{campaign.timeOfOperation_start}</td>
              <td>{campaign.timeOfOperation_end}</td>
              <td>{campaign.workOnWeekends}</td>
              <td>{campaign.username}</td>
            </tr>

            ))
            } */}

    </StyledAllCampaigns>
  )
}
)