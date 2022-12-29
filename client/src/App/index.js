import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import GlobalStyle from '../app/theme/global-styles';
// import LoginPage from '../components/containers/LoginPage/Loadable';

// import setAuthToken from '../utils/setAuthToken';
import { loadUser } from './context/actions/auth'

import {PrivateRoute} from '../_boilerplate/utils/routing/PrivateRoute'
// import { AppMainLayout } from '../components/gui/layout/AppMainLayout';
import { Sandbox } from '../_boilerplate/Sandbox';
import { AllCampaigns } from '../pages/sor-app/AllCampaigns';
import { Login } from '../pages/sor-app/Login';
import { DashboardPage } from '../pages/sor-app/Dashboard';
import setAuthToken from '../_boilerplate/utils/auth/setAuthToken';
import { CreateNewCampaign } from '../features/campaigns/CreateNewCampaign';
import { ScheduledScans } from '../features/scheduledScans';
import { Portfolio, PortfolioPage } from '../pages/sor-dev/Portfolio';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      dispatch(loadUser());
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  }, []);

  return (
    <Router>
      <GlobalStyle />

      {/* <Header /> */}

      <Routes>
        <Route exact path='/' element={
        // <PrivateRoute>
            <Sandbox />
        // </PrivateRoute>
        } />
        

        <Route exact path="/app/login" element={<Login />} />
        <Route path='/app/campaigns' element={<PrivateRoute><AllCampaigns /></PrivateRoute>} />
            <Route path='/app/create-new-campaign' element={<PrivateRoute><CreateNewCampaign /></PrivateRoute>} />
            
        <Route path='/app/select-connections' element={<PrivateRoute><CreateNewCampaign /></PrivateRoute>} />
        <Route path='/app/scheduled-scans' element={<PrivateRoute><ScheduledScans /></PrivateRoute>} />

        <Route path='/app/dashboard' element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path='/dev/portfolio' element={<PortfolioPage />} />

        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>

      {/* <Routes> */}
        {/* <Route exact path="/login" element={<LoginPage />} /> */}
        {/* <Route exact path="/forgot-password" element={<ResetStep1 />} />
        <Route exact path="/reset-password/:jwt" element={<ResetStep3 />} /> */}
      {/* </Routes> */}

      {/* <Footer /> */}

    </Router>
  );
};

export default App;
