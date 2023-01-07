import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import GlobalStyle from './theme/global-styles';

import { loadUser } from './context/actions/auth'

import { PrivateRoute } from '../_boilerplate/utils/routing/PrivateRoute'
import { ScrollToTop } from '../_boilerplate/utils/routing/ScrollToTop'

import { Sandbox } from '../_boilerplate/Sandbox';
import { AllCampaigns } from '../pages/sor-app/allCampaigns';
import { Login } from '../pages/sor-app/Login';
import { DashboardPage } from '../pages/sor-app/dashboard';
import setAuthToken from '../_boilerplate/utils/auth/setAuthToken';
import { CreateNewCampaign } from '../features/campaigns/CreateNewCampaign';
import { ScheduledScans } from '../features/scheduledScans';
import { Portfolio, PortfolioPage } from '../pages/sor-dev/portfolio';
import { HomePage } from '../pages/sor-seo/home';
import { HomePageDev } from '../pages/sor-dev/home';
import { Header } from './theme/header-sor-seo-dev';
import { AnimatePresence } from 'framer-motion';
import { TechStack } from '../pages/sor-dev/techStack';
import { About } from '../pages/sor-dev/about';
import { Growth } from '../pages/sor-seo/growth';

import { Resources } from '../pages/sor-seo/resources'
import { AbmGuideDefinitionsPage } from '../pages/sor-seo/resources/abmGuideDefinitionsPage';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      dispatch(loadUser());
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />

      <Header />
      <AnimatePresence exitBeforeEnter={true} initial={true}>
        <Routes location={location} key={location.pathname}>

          <Route exact path='/' element={<HomePage />} />
          <Route path='/organic-growth-marketing' element={<Growth />} />

          <Route exact path="/app" element={<Login />} />
          <Route exact path="/app/login" element={<Login />} />
          <Route path='/app/campaigns' element={<PrivateRoute><AllCampaigns /></PrivateRoute>} />
          <Route path='/app/create-new-campaign' element={<PrivateRoute><CreateNewCampaign /></PrivateRoute>} />
          <Route path='/app/select-connections' element={<PrivateRoute><CreateNewCampaign /></PrivateRoute>} />
          <Route path='/app/scheduled-scans' element={<PrivateRoute><ScheduledScans /></PrivateRoute>} />
          <Route path='/app/dashboard' element={<PrivateRoute><DashboardPage /></PrivateRoute>} />


          {/* why sor, why seo, where exactly does seo matter, UX and organic marketing */}
          {/* <Route path='/organic-marketing-and-search-engine-optimization' element={<Growth />} /> */}



          {/* /RESOURCES/ */}
          <Route path='/resources' element={<Resources />} />
          <Route path='/resources/abm-guide-and-definitions' element={<AbmGuideDefinitionsPage />} />
          {/* <Route path='/contact' element={<Contact />} /> */}


          <Route path='/dev' element={<HomePageDev />} />
          <Route path='/dev/portfolio' element={<PortfolioPage />} />
          <Route path='/dev/our-tech' element={<TechStack />} />
          <Route path='/dev/about' element={<About />} />

          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </AnimatePresence>

      {/* <Routes> */}
      {/* <Route exact path="/login" element={<LoginPage />} /> */}
      {/* <Route exact path="/forgot-password" element={<ResetStep1 />} />
        <Route exact path="/reset-password/:jwt" element={<ResetStep3 />} /> */}
      {/* </Routes> */}

      {/* <Footer /> */}

    </>
  );
};

export default App;
