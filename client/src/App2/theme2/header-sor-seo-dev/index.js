import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useMatch } from 'react-router-dom'
import BubbleMenu from '../../../_boilerplate/layouts/BubbleMenu'
import LogoAnimation from './LogoAnimation'
import { StyledHeader } from './Style'

const LogoVersionRouter = () => {

  const dark = false

  const location = useLocation();

  let path = location.pathname.slice(1);

  // //fallback
  // if (path !== '') {
  //   return <LogoAnimation branchName={'SEO'} colorTheme={dark !== null ? 'dark' : 'light'} />;
  // }



  if (path === '' || path === 'contact' || path === 'about' || path === 'account-based-marketing' || path === 'dev/about' || path === 'app/login') {
    return <LogoAnimation branchName={'SEO'} colorTheme={'light'} />;
  }
  if (path.includes('resources')) {
    return <LogoAnimation branchName={'SEO'} />;
  }
  if (path.includes('dev')) {
    return <LogoAnimation branchName={'DEV'} colorTheme={'dark'} />;
  }

  // if (path === 'dev' || path === 'dev/recent-mandates' || path === 'dev/how-can-we-help' || path === 'dev/our-tech' || path === 'dev/got-a-question' || path === 'dev/about' || path === 'dev/portfolio') {
  //   return <LogoAnimation branchName={'DEV'} colorTheme={dark !== null ? 'dark' : 'light'} />;
  // }
};





export const Header = (withRouter, { ...props }) => {
  const [showNav, setShowNav] = useState(false)
  const [pos, setPos] = useState(null)
  const [bubbleView, setBubbleView] = useState(true)
  const [darkText, setDarkText] = useState(null)
  const [branch, setBranch] = useState('SEO')
  const [showHeader, setShowHeader] = useState(true)

  const location = useLocation();

  let path = location.pathname.slice(1);

  const [darkBg, setDarkBg] = useState('true')

  // const [dark,setDark] = useState(false)




  // const dark = useMatch("/organic-growth-marketing/resources");
  // const path = useMatch("/growth").pattern.end;
  // console.log(path)
  // if( dark.pathname === '/organic-growth-marketing/resources'){

  // }


  // if(useMatch('/dev')){
  //   setBranch('DEV')
  //   return null

  // }


  // useEffect(()=>{


  //   setShowNav(false)

  // },[[location]])



  useEffect(() => {


    if (path === '') {
      setPos('absolute')
    }
    else if (path !== '') {
      setPos('relative')
    }

    if (path.includes('app')) {
      setPos('absolute')
      setBubbleView(false)
    }
    if (path === 'organic-growth-marketing') {
      setPos('absolute')
    } else if (path !== '') {
      setPos('relative')
    }

    if (path.includes('app/login')) {
      setPos('absolute')
      setBubbleView(true)
    }



    if (path === 'dev' || path === 'resources' || path === "resources/abm-guide-and-definitions") {
      setDarkText(true)
    }
    else if (path !== 'dev') {
      setDarkText(false)
    }

    if (path === 'dev/portfolio') {
      setShowHeader(false)
    } else if (path !== 'dev/portfolio') {
      setShowHeader(true)
    }

    if (path === 'app/dashboard') {
      setShowHeader(false)
    } else if (path !== '') {

    }


    if (path === 'dev/about') {
      setPos('absolute')
    } else if (path !== 'dev/about') {
      // setPos('relative')
    }


    if (path !== 'resources' || path !== 'dev/portfolio') {
      setDarkBg('false')

      // return <LogoAnimation branchName={'SEO'} colorTheme={dark !== null ? 'dark' : 'light'} />;
    }

    // if (path === 'dev/portfolio' ) {
    //   setDarkBg('true')
    //   console.log(path, darkBg)
    //     // return <LogoAnimation branchName={'SEO'} colorTheme={dark !== null ? 'dark' : 'light'} />;
    //   }  

    // if (path === 'resources' || path === 'dev/portfolio' ) {
    //   setDarkBg('true')
    //   console.log(path, darkBg)
    //     // return <LogoAnimation branchName={'SEO'} colorTheme={dark !== null ? 'dark' : 'light'} />;
    //   }
    if (path.includes('resources')) {
      setDarkBg('true')
    }
  }, [path, location])





  return (
    <>
      {showHeader && <StyledHeader position={pos} darkBg={darkBg} {...props}>
        <LogoVersionRouter />
        {/* <LogoAnimation branchName={'SEO'} colorTheme={dark !== null ? 'dark' : 'light'} /> */}
        {bubbleView && <BubbleMenu onceToggled={() => setShowNav(!showNav)} darkText={darkText} showNav={showNav} linkOptions={['/dev', '/app/login', '/organic-growth-marketing']} textOptions={['DEV', 'Growth']} />}
      </StyledHeader>}
    </>
  )
}

