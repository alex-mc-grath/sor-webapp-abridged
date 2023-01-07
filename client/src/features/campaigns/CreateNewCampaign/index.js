import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listOfIndustries } from '../../../App/data/industries'
import { H1 } from '../../../components/elements/H1';
import { Label } from '../../../components/elements/Label';
import { DropdownField } from '../../../components/inputs/Form/DropdownField'
import { DarkCard as Card } from '../../../components/layouts/DarkCard';
import withActionPageLoader from '../../../_boilerplate/hoc/withActionPageLoader';
import { Form, SubmitWrapper } from '../../../_boilerplate/inputs/Form'
import { MainButton } from '../../../_boilerplate/inputs/MainButton'
import { Col } from '../../../_boilerplate/layouts/Col';
import { Row } from '../../../_boilerplate/layouts/Row';
import { GridRow } from '../../../_boilerplate/layouts/GridRow';

import { createNewCampaign, loadSettings } from './actions';
import { FormProgress } from './FormProgress';
import { Layout } from './Style';
import { useFormManager } from '../../../_boilerplate/hooks/useFormManager';
import { Step0 } from './Step0';
import { DropdownSearch } from '../../../_boilerplate/inputs/Select/DropdownSearch';
import { SearchSelectMulti } from '../../../components/inputs/SearchSelectMulti/index'

import { Badge } from '../../../_boilerplate/elements/Badge'
import styled from 'styled-components';
import { DefineSequence } from './Steps/DefineSequence';
import { CampaignSettings } from './Steps/CampaignSettings';
import { CampaignObjectives } from './Steps/CampaignObjectives';
import { BuildCampaignLists } from './Steps/BuildCampaignLists';


export const Search = styled.div`
    background: blue;
    opacity:0.6;
    width: auto;

`;

export const Content = styled.div`
    display: flex;
    flex-wrap:wrap;
    overflow-y: auto;

    width:100%;
    height:6.0vh;
    overflow-x: hidden;

    /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  
`;


export const CreateNewCampaign = withActionPageLoader(loadSettings, ({ loadedPageData }) => {

  let loadedData = loadedPageData[0] || {};
  let { industries } = loadedData
  let { campaignName } = loadedPageData.campaigns[2]

  const [screenState, setScreenState] = useState('form');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [progressState, setProgressState] = useState(0);

  const navigate = useNavigate()

  // const saveCampaign = async (data) => {
  //   try {
  //     setScreenState('saving');
  //     let insertedId = await createNewCampaign(data);
  //     navigate('/campaigns/' + insertedId);
  //     setScreenState('success');
  //   } catch (err) {
  //     setErrorMessage(err.message);
  //   }
  // }

  const { manager, campaignData, setCampaignData } = useFormManager()
  const { formIndex } = campaignData
  const { setFormIndex, previousStep } = manager.current


  const onSubmit = () => {
    console.log('onSubmit');
  }

  return (
    <Layout>

      <H1>Create new campaign</H1>

      <GridRow col='2' colTemplate='2fr 4fr' height='60vh' margin='8rem auto'>

        <FormProgress formIndex={formIndex} previousStep={previousStep} setFormIndex={setFormIndex} setCampaignData={setCampaignData} />

        {campaignData.formIndex === 0 && <BuildCampaignLists manager={manager.current} campaign={campaignData} />}

        {campaignData.formIndex === 1 && <DefineSequence manager={manager.current} campaign={campaignData} />}

        {campaignData.formIndex === 2 && <CampaignSettings manager={manager.current} campaign={campaignData} />}

        {campaignData.formIndex === 3 && <CampaignObjectives manager={manager.current} campaign={campaignData} />}

      </GridRow>

    </Layout>
  )
})
