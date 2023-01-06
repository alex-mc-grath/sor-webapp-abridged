import {Layout} from './Style'
import heroImage from "../../../../app/assets/imgs/hero-header-img-xl.jpg"
import Svg from './Svg'

export const Hero = ({content, view}) => {

  return (
    <Layout mainImage={heroImage} className={`${view === 'zoomed' ? 'zoomed' : ''}`}>
        <Svg/>
        {/* <h1>{content.h1}</h1> */}
    </Layout>
  )
}
