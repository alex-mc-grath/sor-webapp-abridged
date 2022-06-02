import styled from 'styled-components'

import {BarChart} from './BarChart'
import {MyPieChart} from './PieChart'
import {MyLineGraph} from './MyLineGraph'
import {MyFunnelChart} from './MyFunnelChart'
import {IconTabControl} from './IconTabControl'

const StyledDemoReel = styled.div`
    min-height:100vh;
`

export const DemoReel = () => {
    return (
        <StyledDemoReel>
            <IconTabControl />
            <center>
            <div>
                <BarChart />
                <MyPieChart />
            </div>
            <div>
                <MyLineGraph />
                <MyFunnelChart />
            </div>
            </center>
        </StyledDemoReel>
    )
}