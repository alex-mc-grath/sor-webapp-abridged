import React, { useMemo } from 'react';
import withActionPageLoader from '../../../_boilerplate/hoc/withActionPageLoader';
import { getAllCampaigns } from './actions';
import { StyledAllCampaigns } from './Style';
import { MainButton } from '../../../_boilerplate/inputs/MainButton';
import { useNavigate } from 'react-router-dom';
import { H1 } from '../../../components/elements/H1';
import { Table } from '../../../_boilerplate/elements/Table';
import { Col } from '../../../_boilerplate/layouts/Col';
import { GridRow } from '../../../_boilerplate/layouts/GridRow';
import { DarkCard as Card } from '../../../components/layouts/DarkCard';

// This component is used to display a list of all campaigns
export const AllCampaigns = withActionPageLoader(getAllCampaigns, ({ loadedPageData }) => {
    // useNavigate is a hook that allows us to programmatically navigate to a new route
    const navigate = useNavigate();

    // allCampaigns is an array of campaign objects
    const allCampaigns = loadedPageData.campaigns;
    console.log(allCampaigns);

    return (
        <StyledAllCampaigns>
            <H1>All campaigns</H1>

            <Col width='75%'>
                {/* This button navigates to the create-new-campaign route when clicked */}
                <MainButton marginLeft='auto' margin='2rem 0' onClick={() => navigate('/app/create-new-campaign')} width='fit-content'>+</MainButton>
                {/* This table displays the data for each campaign in allCampaigns */}
                <Table
                    data={allCampaigns}
                    colHeaders={[
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
                            {/* This button allows the user to edit the campaign */}
                            <td><MainButton text='edit' width='fit-content' /></td>
                        </tr>
                    )}
                />

            </Col>
            {/* This column is currently not being used */}
            <Col>
                {/* <Card
                  width='100%'
                  height='100%'
                /> */}
            </Col>
            {/* </GridRow> */}
        </StyledAllCampaigns>
    );
});