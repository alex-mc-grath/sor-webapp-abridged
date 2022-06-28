/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
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

import { RecentProjects } from '../sor-dev/RecentProjects';
import { Dashboard } from '../sor-app/Dashboard';
import { ResourcesOverview } from '../sor-seo/ResourcesOverview';
import { TechStack } from '../sor-dev/TechStack';
import { About } from '../sor-dev/About';
import { DemoReel } from '../sor-dev/DemoReel';
import { Analytics } from '../sor-app/Analytics';

const AppWrapper = styled.div`
  /* max-width: calc(768px + 16px * 2); */
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  background: #fafafa;
  /* padding: 0 16px; */
  flex-direction: column;
`;

export default function App() {
  const location = useLocation();
  return (
    <AppWrapper>
      <Helmet titleTemplate='%s - Systematic Organic Results' defaultTitle='SOR SEO'>
        <meta name='description' content='A React.js Boilerplate application' />
      </Helmet>
      {/* <Header /> */}

      <AnimatePresence exitBeforeEnter={false} initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/growth' element={<Growth />} />
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
          <Route path='/app/analytics' element={<Analytics />} />

          {/* <Route path="" component={NotFoundPage} /> */}
        </Routes>

        {/* <Footer /> */}
      </AnimatePresence>
      <GlobalStyle />
    </AppWrapper>
  );
}
