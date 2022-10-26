/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components/macro';
import { Routes, Route, useLocation } from 'react-router-dom';

// import Header from '../Header/'

import HomePage from '../sor-seo/HomePage/Loadable';

import GlobalStyle from '../../../global-styles';
import { Contact } from '../sor-seo/Contact';
import { Login } from '../sor-app/Login';
import { DevHomePage } from '../sor-dev/HomePage';

import { AnimatePresence } from 'framer-motion';
import { Growth } from '../sor-seo/Growth';

import { RecentProjects } from '../sor-dev/RecentProjects/';
import { Dashboard } from '../sor-app/Dashboard';
import { ResourcesOverview } from '../sor-seo/ResourcesOverview';
import { TechStack } from '../sor-dev/TechStack';
import { About } from '../sor-dev/About';
import { DemoReel } from '../sor-dev/DemoReel';
import { Analytics } from '../sor-app/Analytics';

import { PrivateRoute } from './PrivateRoute';

import { loadUser, logOutUser } from './actions';
import setAuthToken from '../../../utils/setAuthToken';
import { Header } from './Header';
import { Growth2 } from '../sor-seo/Growth2';
import { Resources } from '../sor-seo/Resources';

const AppWrapper = styled.div`
position:relative;
/* max-width: calc(768px + 16px * 2); */
  
  /* // temporarily mimic mobile view - mobile first */

  /* max-width: 414px; */
  /* max-width: 375px; */
  max-height:896px;


  margin: 0 auto;
  display: flex;
  min-height: 100%;
  background: #fafafa;
  /* padding: 0 16px; */
  flex-direction: column;
`;

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      dispatch(loadUser());
    } else {
      setAuthToken(null);
      dispatch(logOutUser());
    }
  }, [dispatch]);

  return (
    <AppWrapper>
      <Helmet titleTemplate='%s - Systematic Organic Results' defaultTitle='SOR SEO'>
        <meta name='description' content='A React.js Boilerplate application' />
      </Helmet>

      {/* <AnimatePresence exitBeforeEnter={false} initial={false}> */}
      <Header />
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/growth' element={<Growth />} />
          <Route path='/organic-growth-marketing' element={<Growth2 />} />
          <Route path='/organic-growth-marketing/resources' element={<Resources />} />
          <Route path='/resources' element={<ResourcesOverview />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/dev' element={<DevHomePage />} />
          <Route path='/dev/demo' element={<DevHomePage />} />
          <Route path='/dev/demo-reel' element={<DemoReel />} />
          <Route path='/dev/our-tech' element={<TechStack />} />
          <Route path='/dev/recent-projects' element={<RecentProjects />} />
          <Route path='/dev/contact' element={<DevHomePage />} />
          <Route path='/dev/about' element={<About />} />

          <Route path='/app/' element={<Dashboard />} />
          <Route path='/app/login' element={<Login />} />
          <Route path='/app/select-connections' element={<Login />} />
          <Route path='/app/analytics' element={<PrivateRoute accountType='ADMIN' element={<Analytics />} />} />
        </Routes>
      {/* </AnimatePresence> */}
      <GlobalStyle />
    </AppWrapper>
  );
};

export default App;
