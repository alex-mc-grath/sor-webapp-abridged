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

import OnRouteChange from '../components/utils/OnRouteChangeWorker'

// import Header from '../Header/'

import HomePage from '../components/containers/sor-seo/HomePage/Loadable';

import GlobalStyle from './Theme/global-styles';
import { Contact } from '../components/containers/sor-seo/Contact';
import { Login } from '../components/containers/sor-app/Login';
import { DevHomePage } from '../components/containers/sor-dev/HomePage';

import { AnimatePresence } from 'framer-motion';
import { Growth } from '../components/containers/sor-seo/Growth';

import { RecentProjects } from '../components/containers/sor-dev/RecentProjects/';
import { Dashboard } from '../components/containers/sor-app/Dashboard';
import { ResourcesOverview } from '../components/containers/sor-seo/ResourcesOverview';
import { TechStack } from '../components/containers/sor-dev/TechStack';
import { About } from '../components/containers/sor-dev/About';
import { DemoReel } from '../components/containers/sor-dev/DemoReel';
import { Analytics } from '../components/containers/sor-app/Analytics';

import { Header } from './Header';
import { Growth2 } from '../components/containers/sor-seo/Growth2';
import { Resources } from '../components/containers/sor-seo/Resources';

import { PrivateRoute } from './PrivateRoute';

import { loadUser, logOutUser } from './actions';
import setAuthToken from '../utils/setAuthToken';
import ScrollToTop from './ScrollToTop';
import { Portfolio } from '../components/containers/sor-dev/Portfolio';
import { Footer } from '../components/containers/sor-seo/Footer';
import { AbmGuideDefinitionsPage } from '../components/containers/sor-seo/Resources/data/AbmGuideDefinitionsPage';

const AppWrapper = styled.div`
  /* max-width: calc(768px + 16px * 2); */
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
        <meta name='description' content='systematic organic results' />
      </Helmet>

      <Header />

      <AnimatePresence exitBeforeEnter={false} initial={false}>
        <Routes location={location} key={location.pathname}>

        {/* /RESOURCES/ */}
          <Route path='/resources' element={<Resources />} />
          <Route path='/resources/abm-guide-and-definitions' element={<AbmGuideDefinitionsPage />} />

          
          <Route path='/contact' element={<Contact />} />


          {/* /GROWTH/  */}
          <Route path='/' element={<HomePage />} />
          <Route path='/organic-growth-marketing' element={<Growth />} />

          {/* deep dive page */}
          <Route path='/b2b-organic-growth-marketing' element={<Growth />} />

          {/* why sor, why seo, where exactly does seo matter, UX and organic marketing */}
          <Route path='/organic-marketing-and-search-engine-optimization' element={<Growth />} />

          

          {/* /DEV/  */}
          <Route path='/dev' element={<DevHomePage />} />
          
          <Route path='/dev/portfolio' element={<Portfolio />} />
          <Route path='/dev/recent-mern-stack-projects' element={<RecentProjects />} />
          <Route path='/dev/our-tech' element={<TechStack />} />
          <Route path='/dev/about' element={<About />} />

          
          <Route path='/dev/demo' element={<DevHomePage />} />
          <Route path='/dev/demo-reel' element={<DemoReel />} />
          <Route path='/dev/contact' element={<DevHomePage />} />


          {/* /APP/  */}
          <Route path='/app/' element={<Dashboard />} />
          <Route path='/app/login' element={<Login />} />
          <Route path='/app/select-connections' element={<Login />} />
          <Route path='/app/analytics' element={<PrivateRoute accountType='ADMIN' element={<Analytics />} />} />
          
        </Routes>
      
        <Footer />
      </AnimatePresence>

      <ScrollToTop />
     
      <GlobalStyle />
    </AppWrapper>
  );
};

export default App;
