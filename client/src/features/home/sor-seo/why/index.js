import { AnimationWrapper } from '../../../../_boilerplate/layouts/AnimationWrapper'
import { MainButton } from '../../../../_boilerplate/inputs/MainButton'
import { Layout } from './Style'

export const Why = () => {
  return (
    <Layout>
        <h2>We craft <AnimationWrapper><span>memorable experiences</span></AnimationWrapper> with fast-moving and innovative teams.</h2>
        <p>We are a creative team of developers, strategists and UX passionates inventing sophisticated web applications for companies worldwide.</p>
          <MainButton text="meet sor seo" to="/organic-growth-marketing" />
          {/* <CTAButton text="get to know us" /> */}
    </Layout>
  )
}
