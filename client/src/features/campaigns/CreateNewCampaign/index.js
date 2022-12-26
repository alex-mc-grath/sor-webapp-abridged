import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listOfIndustries } from '../../../app/data/industries'
import { H1 } from '../../../components/elements/H1';
import { Label } from '../../../components/elements/Label';
import { DropdownField } from '../../../components/inputs/Form/DropdownField'
import { DarkCard as Card } from '../../../components/layouts/Card';
import withActionPageLoader from '../../../_boilerplate/hoc/withActionPageLoader';
import { Form, SubmitWrapper } from '../../../_boilerplate/inputs/Form'
import {MainButton} from '../../../_boilerplate/inputs/MainButton'
import { Col } from '../../../_boilerplate/layouts/Col';
import { Row } from '../../../_boilerplate/layouts/Row';
import { GridRow } from '../../../_boilerplate/layouts/GridRow';

import { createNewCampaign, loadSettings } from './actions';
import { FormProgress } from './FormProgress';
import { Layout } from './Style';
import { useFormManager } from './useFormManager';
import { Step0 } from './Step0';
import { DropdownSearch } from '../../../_boilerplate/inputs/Select/DropdownSearch';

export const CreateNewCampaign = withActionPageLoader(loadSettings, ({loadedPageData}) => {

  let loadedData = loadedPageData[0] || {};
  let {industries} = loadedData
  let {campaignName} = loadedPageData.campaigns[2]

  const [screenState, setScreenState] = useState('form');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [progressState, setProgressState] = useState(0);

  const navigate = useNavigate()

  const saveCampaign = async (data) => {
    try {
      setScreenState('saving');
      let insertedId = await createNewCampaign(data);
      navigate('/campaigns/' + insertedId);
      setScreenState('success');
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  

  const { manager, formIndex, campaignData } = useFormManager()

  const {setFormIndex} = manager.current



  return (
    <Layout>

        <H1>Create new campaign</H1>

        <GridRow col='2' height='60vh' margin='8rem auto'>
            <FormProgress setFormIndex={setFormIndex} />
            
            {campaignData.formIndex === 0 && <Card align='flex-start' justify='flex-start'>
              <h3>1) Build TAL & TPL with automated scans</h3>
              <Col margin='0' align='flex-start'>
                <h4>Build target account list (organizations)</h4>
                  <Label>industries:</Label><DropdownSearch><></></DropdownSearch>
                  <Label>geo:</Label>
                  <Label>keywords: (+ -)</Label>
                </Col>
              <Col margin='0' align='flex-start'>
              <h4>Build target prospects list (people)</h4>
                <Label>title:</Label>
                <Label>geo:</Label>
                <Label>keywords: (+ -)</Label>
              </Col>
            </Card>}
            {campaignData.formIndex === 1 && <Card>
              <h4>Define sequence (automated actions)</h4>
              <Row>
                  <div className='box'>
                      <span className="action">visit profile</span>
                      <i className="fa-solid fa-text"></i>
                  </div>
                  <div className='box'>
                      <span className="action">invite</span>
                      <i className="fa-solid fa-user"></i>
                  </div>
                  <div className='box'>
                      <span className="action">message</span>
                      <i className="fa-solid fa-message"></i>
                  </div>
              </Row>
            </Card>}
            {campaignData.formIndex === 2 && <Card>
              <Col>
              <h4>Campaign settings (2 / 2)</h4>
                <Label>send on weekends:</Label>
                <Label>messages?:</Label>
              </Col>
            </Card>}
            {campaignData.formIndex === 3 && <>3</>}
            {campaignData.formIndex === 4 && <>4</>}
            
            
        </GridRow>


{/* 1) Build TAL & TPL with automated scans

Build target account list (organizations)
  industries:
  geo:
  keywords (positive & neg):

Build target prospects list (people)
  industries:

  keywords:


2) Define Sequence


Campaign settings (is this really necessary? can't it just be total 3 steps)
    other things like send on weekends,


Campaign objectives & financials (commit to revenue per client:)(this is a great opportunity and a small dynamic tool)
    - X000$ for one new client, cost of marketing is 3000$/month, ROI of campaign: 103%, average meetings to get a sale: 6, avg discussions to get a meeting: 24, avg connections to get a discussion: 11, avg targeted invites to get new connection, avg TPL size, avg TAL list size, avg linkedin results scanned,
 */}



        {/* <Form onSubmit={saveCampaign}>
          <Col>
            <Label>Campaign settings</Label>

            <DropdownField
                defaultValue={campaignName || 'Select Industries'}
                items={listOfIndustries}
                name="campaignName"
            />
            

            <SubmitWrapper>
              <MainButton width='30rem' text='Save' />
            </SubmitWrapper>
          </Col>  
 can't this be transformed to just FormButton... or even MainButton ? 

        </Form> */}

    </Layout>
  )
})
