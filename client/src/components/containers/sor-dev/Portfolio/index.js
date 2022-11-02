import React from 'react'
import { PortfolioItem } from './PortfolioItem'
import { StyledPortfolio } from './Style'

import logo from '../../../../media/img/whistlawLogo.png'
import imgW1 from '../../../../media/img/whistlaw.png'
import imgW2 from '../../../../media/img/whistlaw2.png'
// import img2 from '../../../../media/img/drives-respect-business-man.png'

import logo2 from '../../../../media/img/baytaq-logo-mod.png'
import imgB1 from '../../../../media/img/baytaq.png'

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
            category="Legal Tech"
            budgetRange="10K - 15K $"
            timeline="15 - 20 WEEKS"
            logo={logo}
            imgs={[imgW1,imgW2]}
            // media={logo='', imgs=[]}
            // content={}
            section1={<>section1</>}
            list={["Modern looking dashboard","File upload with access restrictions","Downloadable Dashboard (PDF and CSV)","Custom charts building","Subscription/payment module"]}

        />
        <PortfolioItem
            title="Furnished real-estate long-term rental, marketed globally managed locally"
            client="Baytaq"
            category="Lodging"
            budgetRange="8K - 10K $"
            timeline="12 - 15 WEEKS"
            logo={logo2}
            imgs={[imgB1]}
            // media={logo='', imgs=[]}
            // content={}
            section1={<>section1</>}
            list={["Modern looking dashboard","File upload with access restrictions","Downloadable Dashboard (PDF and CSV)","Custom charts building","Subscription/payment module"]}

        />
    </StyledPortfolio>
  )
}

