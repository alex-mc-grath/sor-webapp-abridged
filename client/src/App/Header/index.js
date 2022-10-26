import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useMatch } from 'react-router-dom'
import BubbleMenu from '../../components/layout/BubbleMenu'
import LogoAnimation from '../../components/containers/sor-dev/LogoAnimation'
import { StyledHeader } from './Style'
import withRouter from '../../components/hoc/withRouter'

const LogoVersionRouter = () => {

  const dark = false

  const location = useLocation();
  
  // let path = 'contact'
  let path = location.pathname.slice(1);
  
  // //fallback
  // if (path !== '') {
  //   return <LogoAnimation branchName={'SEO'} colorTheme={dark !== null ? 'dark' : 'light'} />;
  // }

  if (path === '' || path === 'contact' || path === 'about' || path === 'account-based-marketing') {
    return <LogoAnimation branchName={'SEO'} colorTheme={dark !== null ? 'dark' : 'light'} />;
  }
  if (path === 'dev' || path === 'dev/recent-mandates' || path === 'dev/how-can-we-help' || path === 'dev/how-can-we-help' || path === 'dev/got-a-question' || path === 'dev/about') {
    return <LogoAnimation branchName={'DEV'} colorTheme={dark !== null ? 'dark' : 'light'} />;
  }
  };


  


export const Header = withRouter => {
    const [showNav,setShowNav] = useState(false)
    const [branch,setBranch] = useState('SEO')

    const location = useLocation();

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



  return (
    <StyledHeader>
        <LogoVersionRouter />
        {/* <LogoAnimation branchName={'SEO'} colorTheme={dark !== null ? 'dark' : 'light'} /> */}
        <BubbleMenu onceToggled={() => setShowNav(!showNav)} showNav={showNav} linkOptions={['/dev', '/app/login', '/organic-growth-marketing']} textOptions={['DEV', 'Growth']} />
    </StyledHeader>
  )
}

