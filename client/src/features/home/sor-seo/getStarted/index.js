import { useState } from 'react'
import { MainButton } from '../../../../_boilerplate/inputs/MainButton'
import { Layout } from './Style'
import { Col } from '../../../../_boilerplate/layouts/Col'

export const GetStarted = () => {
  const [lightEffect, setLightEffect] = useState(false);

  setTimeout(() => {
    setLightEffect(true)
  }, 2000);

  return (
    <Layout>

      <h2>Welcome to {lightEffect ? <span className="gradient-color4">SOR SEO.</span> : <span className="gradient-color">SOR SEO.</span>} </h2>
      <p>Build to weather the storm,<br />and win the long game.</p>

      <Col margin='2rem 0' width='27.5%' justify='space-between'>
        {/* <MainButton text="resources" to='organic-growth-marketing/resources' /> */}
        <MainButton text="organic growth solutions" to='/organic-growth-marketing' />
        <MainButton text="software development" to="/dev" />
      </Col>

    </Layout>
  )
}
