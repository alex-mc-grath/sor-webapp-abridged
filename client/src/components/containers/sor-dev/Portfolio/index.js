import React from 'react'
import { PortfolioItem } from './PortfolioItem'
import { StyledPortfolio } from './Style'

import logo from '../../../../media/img/baytaq-logo-mod.png'
import img1 from '../../../../media/img/baytaq.png'
import img2 from '../../../../media/img/drives-respect-business-man.png'
import img3 from '../../../../media/img/whistlaw.png'

export const Portfolio = () => {
  return (
    <StyledPortfolio>
        <h1>recent mern stack projects</h1>
        <p>(sorted newest to oldest)</p>

    {/* // here should be scrollable items again, simpler, cleaner, just more appealing than conventional boring vertical scrolling' */}

        <PortfolioItem
        color="#08a2e5"
            title="Enforcing whistleblowers right under EU Law"
            client="Whistlaw"
            budgetRange="10K - 15K $"
            timeline="15 - 20 WEEKS"
            logo={logo}
            imgs={[img1,img2]}
            // media={logo='', imgs=[]}
            // content={}
            section1={<>section1</>}
            list={["Modern looking dashboard","File upload with access restrictions","Downloadable Dashboard (PDF and CSV)","Custom charts building","Subscription/payment module"]}

        />
        <PortfolioItem
            title="Furnished real-estate long-term rental, marketed globally managed locally"
            client="Baytaq"
            budgetRange="8K - 10K $"
            timeline="12 - 15 WEEKS"
            logo={logo}
            imgs={[img3]}
            // media={logo='', imgs=[]}
            // content={}
            section1={<>section1</>}
            list={["Modern looking dashboard","File upload with access restrictions","Downloadable Dashboard (PDF and CSV)","Custom charts building","Subscription/payment module"]}

        />
    </StyledPortfolio>
  )
}

