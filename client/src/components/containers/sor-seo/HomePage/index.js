/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StyledHomepage } from './Style'
import { Hero } from '../HomePage/Hero/'

import { SorSeoSvg } from './SorSeoSvg'
import { motion } from 'framer-motion'
import { variants1 } from '../../../utils/animationVariants'

const key = 'home'

export default function HomePage() {
  const navigate = useNavigate()
  const [showNav, setShowNav] = useState(false)
  const [view, setView] = useState('zoomed')

  const [introText, setIntroText] = useState(
    <>
      <span className="gradient-color">
        systematic <span className="gradient-color">organic</span> results
      </span>
    </>,
  )

  // const splitCharsInArray = (word) => {
  //   const s = word;
  //   for (var i = 0; i < s.length; i++) {
  //     console.log(s.charAt(i));
  //   }
  // };

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIntroText(<span className="gradient-color">
  //     The real mantra of success is: sustainability and growth
  //   </span>)
  //   },3000)
  // },[introText])

  const contentArray = [
    <>
      <span className="gradient-color3">
        The real mantra of success is:
        <br />
        sustainability and growth
        <br />
        <span className="author">- Stephen R Covey</span>
      </span>
    </>,

    <>
      <span className="gradient-color3">
        To learn, and not to do, is really not to learn
      </span>
    </>,

    <>
      <span className="gradient-color3">
        To know, and not do, is really not to know
      </span>
    </>,

    <>
      <span className="gradient-color3">
        The better you get at a given thing, the more the very nature of the
        challenge changes
      </span>
    </>,
  ]

  // const timeoutHandlerFunc = (timeoutDuration, callback) =>{

  //   contentArray.map((contentBlock, idx)=>{
  //   return setTimeout(()=>{
  //     setIntroText(contentArray[idx])
  //   },timeoutDuration)
  // })

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  async function sleep(fn, ...args) {
    contentArray.map((contentBlock, idx) => {
      timeout(3000)
      return fn(...args)
    })
  }

  // useEffect(()=> sleep(setIntroText),[])

  setTimeout(()=>{
    setIntroText(<span className="gradient-color3">
    The real mantra of success is:<br/>sustainability and growth
    <br/><span className="author">- Stephen R Covey</span>
  </span>)

  },3000)

  //   setTimeout(()=>{
  //     setIntroText(<span className="gradient-color">
  //     To learn, and not to do, is really not to learn
  //   </span>)
  //   },3000)

  //  setTimeout(()=>{
  //   setIntroText(<span className="gradient-color">
  //   To know, and not do, is really not to know
  // </span>)
  // },3000)

  // setTimeout(()=>{
  //   setIntroText(<span className="gradient-color">
  //   The better you get at a given thing, the more the very nature of the challenge changes
  // </span>)
  // },3000)

  const onceToggled = () => {
    setView('')
    setShowNav(!showNav)
  }

  return (
    <motion.div
      variants={variants1}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <StyledHomepage>
        <Helmet>
          <title>SOR SEO | Account-based Experience</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>

        <Hero
          view={view}
          content={{
            h1: introText,
          }}
        />

        <SorSeoSvg onClick={() => onceToggled()} />

        <div className={`circle-container ${showNav ? 'show-nav' : ''}`}>
          <div className="circle">
            <button id="open" onClick={() => navigate('/app/login')}>
              {/* <i class="fa-solid fa-user"></i> */}
              <i class="fa-solid fa-user-astronaut"></i>
            </button>
            <button id="open" onClick={() => navigate('/how-it-works')}>
              Growth
            </button>
            <button id="open" onClick={() => navigate('/dev')}>
              Dev
            </button>
          </div>
        </div>
      </StyledHomepage>
    </motion.div>
  )
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
}
