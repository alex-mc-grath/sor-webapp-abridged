import styled from 'styled-components/macro'
import { Label } from '../../../../../components/elements/Label';
import { Form } from '../../../../../_boilerplate/inputs/Form';
import { DarkCard as Card } from '../../../../../components/layouts/DarkCard'
import { Col } from '../../../../../_boilerplate/layouts/Col';
import { ToggleSwitch } from '../../../../../_boilerplate/inputs/ToggleSwitch';

export const Layout = styled.div`

`;
    
export const CampaignSettings = () => {


    const onSubmit = () => {
        console.log('submit');
    }
    return (
    	<Layout>
              <Card align='flex-start' justify='flex-start' height='100%' gap='0rem'>
                    <Form onSubmit={onSubmit} height='100%'>
                        <h3>Campaign settings (2 / 2)</h3>
                        <Col>
                        {/* <DateRangeSelect /> */}
                        <Label>Start date: Jan 1st, 2023</Label>
                        <Label>End date: March 30th, 2023</Label>

                        {/* <TimeRangePicker /> */}
                        <Label>Start time: 7:30</Label>
                        <Label>End time: 17:00</Label>

                        oonoooo
                        <Label>Send on weekends:</Label>
                        </Col>
                    </Form>
              </Card>
    	</Layout>
    )
}
