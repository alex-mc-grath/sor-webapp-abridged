import { Link } from "react-router-dom"
import { Col } from "../../../_boilerplate/layouts/Col"
import { SliderImg } from "../../../_boilerplate/layouts/SliderImg"
import { Layout } from "./Style"

import sorPortfolioOverview from '../../../app/assets/imgs/portfolio-images/sor-portfolio-overview2.png'
import techstacklogos from '../../../app/assets/imgs/portfolio-images/techstack-logos.png'
import flowers from '../../../app/assets/imgs/portfolio-images/flowers.jpg'
import { Container } from "../../portfolio/Style"

export const Home = () => {

  let sliderImgs = [sorPortfolioOverview, techstacklogos, flowers]

  return (
    <Layout>
      <Container>
        <Col width='70%'>
          <div>
            {/* <h1>aesthetic sensitivity<br />working for you</h1> */}
            <h1>aesthetic sensitivity<br />meets emotion</h1>
            <p>next generation digital solutions</p>

            <p className='artsy'><span className="gradient-color4">WEB</span><span className="vertical-bar">|</span><span className="gradient-color4">MOBILE</span></p>
          </div>
        </Col>

        <Link to='/dev/portfolio'>
          <SliderImg img={sliderImgs[0]}>
            <h4>recent projects</h4>
            <p>Take a look at our recent work and see if it suits your tech/project needs.</p>
          </SliderImg>
        </Link>
        <Link to='/dev/our-tech' className='card'>
          <SliderImg img={sliderImgs[1]}>
            <h4>our tech stack</h4>
            <p>We use the most recent technologies and framework to build your sophisticated applications.</p>
          </SliderImg>
        </Link>
        <Link to='/dev/about' className='card'>
          <SliderImg img={sliderImgs[2]} cover backgroundPosition='bottom'>
            <h4>about SOR DEV</h4>
            <p>Enterprise-level software solutions, stunning user experiences and lightning speed site performance. Discover what it's like to work with us.</p>
          </SliderImg>
        </Link>
      </Container>
    </Layout>
  )
}
