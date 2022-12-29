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
import { SearchSelectMulti } from '../../../components/inputs/SearchSelectMulti/index'

import {Badge} from '../../../_boilerplate/elements/Badge'
import styled from 'styled-components';


export const Search = styled.div`
    background: blue;
    opacity:0.6;
    width: auto;

`;

export const Content = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex: 1 1 auto;
    overflow-y: auto;
    opacity:0.6;
    width:100%;
    height:10vh;
    overflow-x: hidden;
    overflow-y: scroll;
`;


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

const onSubmit = () => {
  console.log('onSubmit');
}

  return (
    <Layout>

        <H1>Create new campaign</H1>

        <GridRow col='2' colTemplate='2fr 3fr' height='60vh' margin='8rem auto'>
            <FormProgress setFormIndex={setFormIndex} />
            
            
            {campaignData.formIndex === 0 && <Form onSubmit={onSubmit}>
            <Card align='flex-start' justify='flex-start' height='100%' gap='2rem'>
              <h3>1) Build Lists TAL & TPL (with automated scans)</h3>

              <Col margin='0' align='flex-start'>
                  <h4>Build target account list (organizations)</h4>
                  <GridRow col='2' colTemplate='1fr 2fr' margin='0rem 0'>
                    <Col margin='0'>
                      <SearchSelectMulti name="Industries" />
                    </Col>
                    <Content>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                    </Content>
                  </GridRow>

                  <GridRow col='2' colTemplate='1fr 2fr' margin='0rem 0'>
                    <Col margin='0'>
                      <SearchSelectMulti name='Geo' />
                    </Col>
                    <Content>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>TestTestTestTest asfda</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                    </Content>
                  </GridRow>
                  
                  <GridRow col='2' colTemplate='1fr 2fr' margin='0rem 0'>
                    <Col margin='0'>
                      <SearchSelectMulti name="Keywords" />
                    </Col>
                    <Content>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                      <Badge>Test</Badge>
                    </Content>
                  </GridRow>




              </Col>

              <Col margin='0' align='flex-start'>
              <h4>Build target prospects list (people)</h4>
                <Label>title:</Label>
                <Label>geo:</Label>
                <Label>keywords: (+ -)</Label>
              </Col>
              <SubmitWrapper>
                <MainButton text='next: automated sequence' />
              </SubmitWrapper>
            </Card>
            </Form>
            }


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

            {campaignData.formIndex === 2 && 
            <Form onSubmit={onSubmit}>
              <Card>
                <Col>
                <h4>Campaign settings (2 / 2)</h4>
                  <Label>Start date: Jan 1st, 2023</Label>
                  <Label>End date: March 30th, 2023</Label>
                  <Label>Start time: 7:30</Label>
                  <Label>End time: 17:00</Label>
                  <Label></Label>
                  <Label>send on weekends:</Label>
                  <Label>messages?:</Label>
                </Col>
              </Card>
            </Form>
            }
            
            {campaignData.formIndex === 3 && 
            <Form onSubmit={onSubmit}>
              <Card>
                <GridRow col='2'>
                  <Col>
                  <h4>Campaign objectives & financials</h4>
                    <Label>Average revenue per client: 40 000$</Label>
                    <Label>Campaign cost:</Label>
                    <Label>Campaign ROI:</Label>
                  </Col>

                  <Col>
                    <h4>Funnel projections</h4>
                    <Col>
                      LinkedIn Results: 10 667 (for initial filters)
                      Actual companies: 5 440 (+ geo validation)
                      Companies after keywords filter: 864
                      Accounts (org.) selected: 259
                      Prospects selected: 316

                    </Col>
                    <Col>
                      Selected accounts:
                      Invitations sent:
                      New connections:
                      M1 sent:
                      Replies:
                      Good replies:
                      Sent to sales:
                    </Col>
                    
                  </Col>
                </GridRow>
              </Card>
            </Form>
            }
            
        </GridRow>


{/* 1) 


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
