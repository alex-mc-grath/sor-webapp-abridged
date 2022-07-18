import { useEffect, useContext } from 'react';
import withRouter from './withRouterHookForV6';
import { UNSAFE_NavigationContext } from 'react-router-dom';

function ScrollToTop({ history }) {
  const navigation = useContext(UNSAFE_NavigationContext);
  useEffect(() => {
    const unlisten = navigation.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
