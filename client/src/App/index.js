import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import GlobalStyle from '../app/theme/global-styles';
// import LoginPage from '../components/containers/LoginPage/Loadable';

// import setAuthToken from '../utils/setAuthToken';
import { loadUser } from './context/actions/auth'
import { PrivateRoute } from '../utils/routing/PrivateRoute';
// import { AppMainLayout } from '../components/gui/layout/AppMainLayout';
import { Sandbox } from '../_boilerplate/Sandbox';
import { AllCampaigns } from '../pages/sor-app/AllCampaigns';
import setAuthToken from '../_boilerplate/utils/auth/setAuthToken';

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
          // <Dashboard />
          <Sandbox />
        // </PrivateRoute>
        } />
        {/* <Route exact path="/sandbox" element={<Sandbox />} /> */}
        <Route path='/app/all-campaigns' element={
          // <PrivateRoute accountType='ADMIN' element={
        <AllCampaigns />
        } 
        // />} 
        />
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
