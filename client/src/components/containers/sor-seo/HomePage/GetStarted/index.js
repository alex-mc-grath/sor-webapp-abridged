import React from 'react'
import { CTAButton } from '../../../AppComponents/CTAButton'
import { StyledGetStarted } from './Style'
import {Row} from '../../../../layout/Row'
import { useState } from 'react'
import { Col } from '../../../../layout/Col'

export const GetStarted = () => {
  const [lightEffect, setLightEffect] = useState(false);

  setTimeout(() => {
    setLightEffect(true)
  }, 2000);

  return (
    <StyledGetStarted>

        <h2>Welcome to {lightEffect ? <span className="gradient-color4">SOR SEO.</span> : <span className="gradient-color">SOR SEO.</span>} </h2>
        <p>Build to weather the storm,<br/>and win the long game.</p>
        <Col margin=' 2rem 0'>
            {/* <CTAButton text="resources" to='organic-growth-marketing/resources' /> */}
            <CTAButton text="organic growth solutions" to='/organic-growth-marketing' />
            <br/>
            <CTAButton text="software development" to="/dev" />
        </Col>

    </StyledGetStarted>
  )
}
