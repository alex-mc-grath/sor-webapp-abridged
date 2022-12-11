import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { Loader } from '../../App/AppComponents/Loader';
// import { AppMainLayout } from '../../components/gui/layout/AppMainLayout';

export const PrivateRoute = ({ accountType = null, children, ...props }) => {
  const auth = useSelector((state) => state.auth);

  if (auth.loaded) {
    if (auth.isAuthenticated) {
      if (accountType === null || accountType === auth.accountType || (Array.isArray(accountType) && accountType.includes(auth.accountType)) ) {
        return (
          // <AppMainLayout isLoggedIn menuUi={2} menuTabs={''} {...props}>
            {children}
          // </AppMainLayout>
        );
      } else {
        return <Navigate to='/login' />;
      }
    }

    return <Navigate to='/login' />;
  }

  return 'Loader'
  // <Loader />;
};
