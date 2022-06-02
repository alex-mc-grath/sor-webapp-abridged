import {useState} from 'react'
import styled from 'styled-components'

import {BarChart} from './BarChart'
import {MyPieChart} from './PieChart'
import {MyLineGraph} from './MyLineGraph'
import {MyFunnelChart} from './MyFunnelChart'
import {IconTabControl} from './IconTabControl'
import {LottieAnimations} from './LottieAnimations'

const StyledDemoReel = styled.div`
    min-height:100vh;
    h1 {
        color: #ccc;
        text-align: center;
        font-weight: 300;
    }
    
`

export const DemoReel = () => {
    const [selectedTab, setSelectedTab] = useState("charts")

    return (
        <StyledDemoReel>
            <h1>Demo Reel</h1>
            <IconTabControl selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            {selectedTab === "charts" && 
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
            }
            {selectedTab === "animations" &&
                <LottieAnimations />
            }
        </StyledDemoReel>
    )
}