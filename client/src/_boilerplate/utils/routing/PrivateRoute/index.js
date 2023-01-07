import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppLayout } from '../../../layouts/AppLayout';
// import { Loader } from '../../app/AppComponents/Loader';
// import { AppMainLayout } from '../../components/gui/layout/AppMainLayout';

export const PrivateRoute = ({ accountType = null, children, ...props }) => {
  const auth = useSelector((state) => state.auth);

  if (auth.loaded) {
    if (auth.isAuthenticated) {
      if (accountType === null || accountType === auth.accountType || (Array.isArray(accountType) && accountType.includes(auth.accountType))) {
        return (
          // <AppMainLayout isLoggedIn menuUi={2} menuTabs={''} {...props}>
          <AppLayout isLoggedIn>
            {children}
          </AppLayout>
          // </AppMainLayout>
        );
      } else {
        return <Navigate to='/app/login' />;
      }
    }

    return <Navigate to='/app/login' />;
  }

  return 'Loader'
  // <Loader />;
};
