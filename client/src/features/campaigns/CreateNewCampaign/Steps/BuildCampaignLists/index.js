import styled from 'styled-components'
import { Content } from '../../../CreateNewCampaign/index';
import { SearchSelectMulti } from '../../../../../components/inputs/SearchSelectMulti';
import { DarkCard as Card } from '../../../../../components/layouts/DarkCard';
import { Form, SubmitWrapper } from '../../../../../_boilerplate/inputs/Form';
import { Col } from '../../../../../_boilerplate/layouts/Col';
import { GridRow } from '../../../../../_boilerplate/layouts/GridRow';
import { Badge } from '../../../../../_boilerplate/elements/Badge';
import { MainButton } from '../../../../../_boilerplate/inputs/MainButton';
import { IconButton } from '../../../../../_boilerplate/inputs/IconButton';

export const Layout = styled.div`

`;
    
export const BuildCampaignLists = ({campaign, manager, formIndex}) => {


    const onSubmit = (values) => {
        manager.setFormData(values)
        manager.setFormIndex(formIndex)
      }

    return (
    	<Layout>
            <Card align='flex-start' justify='flex-start' height='100%' gap='0rem'>
    		<Form onSubmit={onSubmit}>
              <h3>1) Build Target Account List</h3>
<Col height='100%'>
              <Col margin='2rem 0' align='flex-start'>
                  {/* <h4>Build target account list (organizations)</h4> */}
                  <GridRow col='2' colTemplate='1fr 2fr' margin='0rem 0'>
                    <Col margin='1rem 0' justify='flex-start'>
                      <SearchSelectMulti name="Industries" />
                    </Col>
                    <Content>
                      <Badge>Computer Hardware</Badge>
                      <Badge>Test</Badge>
                      <Badge>IT & Professional Services</Badge>
                      <Badge>Computer Networking</Badge>
                      <Badge>Computer Software</Badge>
                      <Badge>Data Privacy & Security</Badge>
                    </Content>
                  </GridRow>

                  <GridRow col='2' colTemplate='1fr 2fr' margin='0rem 0'>
                    <Col margin='1rem 0' justify='flex-start'>
                      <SearchSelectMulti name='Geo' />
                    </Col>
                    <Content>
                      <Badge>NY, US</Badge>
                      <Badge>CA, US</Badge>
                      <Badge>Montreal QC, CAN</Badge>
                      <Badge>MA, US</Badge>
                      <Badge>TY, US</Badge>
                      <Badge>TX, US</Badge>
                      {/* <Badge>Test</Badge>
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
                      <Badge>Test</Badge> */}
                    </Content>
                  </GridRow>
                  
                  <GridRow col='2' colTemplate='1fr 2fr' margin='0rem 0'>
                    <Col margin='1rem 0' justify='flex-start'>
                      <SearchSelectMulti name="Keywords" />
                    </Col>
                    <Content>
                      <Badge>Startups</Badge>
                      <Badge>Multi-channels</Badge>
                      <Badge>B2B</Badge>
                      <Badge>Early stage</Badge>
                    </Content>
                  </GridRow>

{/* // TPL */}

              </Col>

              <h3>2) Build Target Prospect List</h3>
              <Col margin='2rem 0' align='flex-start'>
                  {/* <h4>Build target account list (organizations)</h4> */}
                  <GridRow col='2' colTemplate='1fr 2fr' margin='0rem 0'>
                    <Col margin='0rem 0' justify='flex-start'>
                      <SearchSelectMulti name="Title" />
                    </Col>
                    <Content>
                      <Badge>VP of Marketing</Badge>
                      <Badge>VP of Operations</Badge>
                      <Badge>Sales Manager</Badge>
                      <Badge>Inside Sales Director</Badge>
                    </Content>
                  </GridRow>

                  {/* <GridRow col='2' colTemplate='1fr 2fr' margin='0rem 0'>
                    <Col margin='0rem 0' justify='flex-start'>
                      <SearchSelectMulti name='Geo' />
                    </Col>
                    <Content>
                      <Badge>CA, US</Badge>
                     
                      <Badge>NC, US</Badge>
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
                  </GridRow> */}
                  
                  <GridRow col='2' colTemplate='1fr 2fr' margin='0rem 0'>
                    <Col margin='0rem 0' justify='flex-start'>
                      <SearchSelectMulti name="Keywords" />
                    </Col>
                    <Content>
                      <Badge>executive</Badge>
                      <Badge>manager</Badge>
                      <Badge>manager</Badge>
                      <Badge>Financing</Badge>
                      <Badge>Human resources</Badge>
                      <Badge>Private accounts</Badge>
                      <Badge>Global</Badge>
                    </Content>
                  </GridRow>

              </Col>

              <SubmitWrapper>
                {/* <MainButton margin='0'> */}
                    <IconButton className="fa-solid fa-circle-chevron-right"></IconButton>
                {/* </MainButton> */}
              </SubmitWrapper>
              </Col>
            </Form>
            </Card>
    	</Layout>
    )
}
