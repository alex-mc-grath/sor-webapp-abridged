import React from 'react'
import { CTAButton } from '../../../AppComponents/CTAButton'
import { StyledWhy2 } from './Style'
import { Row } from '../../../../layout/Row'
import { Col } from '../../../../layout/Col'
import { AnimationWrapper } from '../../../../layout/AnimationWrapper'

export const Why2 = () => {
  return (
    <StyledWhy2>
      <AnimationWrapper animation='animateBackground'>
        {/* <h2>We build software solutions with our modern stack, proprietary library and cutting-edge tools.</h2> */}
        <Col padding='0' margin='0'>
          <h2>We build <span className="gradient-color4">blazing-fast</span> and adaptative software solutions.</h2>
          <p>With our modern stack, proprietary library and cutting-edge tools, we're more capable than ever - we're delighted to create, and happy to serve.</p>
        <Row>
          <CTAButton text="growth" to="/organic-growth-marketing" />
          <CTAButton text="dev" to="/dev" />
        </Row>
        </Col>
        </AnimationWrapper>
    </StyledWhy2>
  )
}
