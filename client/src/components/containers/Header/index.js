import React, { Component } from 'react';
// import LogoAnimation from "./LogoAnimation";
import { withRouter } from '../../hoc/withRouter';
import SorDevHeader from './SorDevHeader';
import SorSeoHeader from './SorSeoHeader';
import { useLocation } from 'react-router-dom';

const HeaderRouter = () => {
  const location = useLocation();
  // console.log(location);
  // let path = 'contact'
  let path = location.pathname.slice(1);

  if (path === '' || path === 'contact' || path === 'about' || path === 'account-based-marketing') {
    return <SorSeoHeader />;
  }
  if (path === 'dev' || path === 'dev/recent-mandates' || path === 'dev/how-can-we-help' || path === 'dev/how-can-we-help' || path === 'dev/got-a-question' || path === 'dev/about') {
    return <SorDevHeader />;
  }
};

export default withRouter(HeaderRouter);
