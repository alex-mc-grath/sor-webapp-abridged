import { MainButton } from '../../../../_boilerplate/inputs/MainButton'
import { Layout } from './Style'
import { Row } from '../../../../_boilerplate/layouts/Row'
import { Col } from '../../../../_boilerplate/layouts/Col'
import { AnimationWrapper } from '../../../../_boilerplate/layouts/AnimationWrapper'

export const Why2 = () => {
  return (
    <Layout>
      <AnimationWrapper animation='animateBackground'>
        {/* <h2>We build software solutions with our modern stack, proprietary library and cutting-edge tools.</h2> */}
        <Col width='fit-content' padding='2rem' margin='0 auto'
        // width='48%' transform='translateX(10%)'
        >
          <h2>We build <span className="gradient-color4">blazing-fast</span> and adaptative software solutions.</h2>
          <p>With our modern stack, proprietary library and cutting-edge tools,<br /> we're more capable than ever - we're delighted to create, and happy to serve.</p>

          <Row margin='1rem 0'>
            <MainButton text="growth" to="/organic-growth-marketing" />
            <MainButton text="dev" to="/dev" />
          </Row>
        </Col>
      </AnimationWrapper>
    </Layout>
  )
}
