import styled from 'styled-components'
import { Label } from '../../../../../components/elements/Label';
import { DarkCard } from '../../../../../components/layouts/DarkCard';
import { Form } from '../../../../../_boilerplate/inputs/Form';
import { Col } from '../../../../../_boilerplate/layouts/Col';
import { GridRow } from '../../../../../_boilerplate/layouts/GridRow';
import { FunnelProjections } from './FunnelProjections';

export const Layout = styled.div`

`;



{/* 1) 


Campaign objectives & financials (commit to revenue per client:)(this is a great opportunity and a small dynamic tool)
    - X000$ for one new client, cost of marketing is 3000$/month, ROI of campaign: 103%, average meetings to get a sale: 6, avg discussions to get a meeting: 24, avg connections to get a discussion: 11, avg targeted invites to get new connection, avg TPL size, avg TAL list size, avg linkedin results scanned,
 */}
    
export const CampaignObjectives = () => {

    const onSubmit = ()=>{
        console.log('onSubmit')
    }

    return (
    	<Layout>
              <DarkCard align='flex-start' justify='flex-start' height='100%' gap='0rem'>
    		        <Form onSubmit={onSubmit}>
                  <h3>Funnel projections</h3>
                <GridRow col='2' margin='0' height='100%'>
                  <Col margin='0'>
                  <FunnelProjections/>
                  {/* <h4>Campaign objectives & financials</h4>
                    <Label>Average revenue per client: 40 000$</Label>
                    <Label>Campaign cost:</Label>
                    <Label>Campaign ROI:</Label> */}
                    
                  </Col>

                  <Col>
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

                    SOME FIELDS "PLAYABLE WITH":
                      REVENUE PER CLIENT
                      CAMPAIGN DURATION
                      
                    
                  </Col>
                </GridRow>
                </Form>
              </DarkCard>
    	</Layout>
    )
}
