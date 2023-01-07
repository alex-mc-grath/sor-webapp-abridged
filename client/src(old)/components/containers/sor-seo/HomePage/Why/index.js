import React from 'react'
import { AnimationWrapper } from '../../../../layout/AnimationWrapper'
import { CTAButton } from '../../../appComponents/CTAButton'
import { StyledWhy } from './Style'

export const Why = () => {
  return (
    <StyledWhy>
      <h2>We craft <AnimationWrapper><span>memorable experiences</span></AnimationWrapper> with fast-moving and innovative teams.</h2>
      <p>We are a creative team of developers, strategists and UX passionates inventing sophisticated web applications for companies worldwide.</p>
      <CTAButton text="meet sor seo" to="/organic-growth-marketing" />
      {/* <CTAButton text="get to know us" /> */}
    </StyledWhy>
  )
}
