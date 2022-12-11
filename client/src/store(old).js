import { combineReducers } from 'redux';
import newStore from './utils/redux/newStore';
import authReducer from './App/reducers/authReducer';
import setAuthToken from './utils/setAuthToken';
// import dashboardReducer from './App/reducers/dashboardReducer';
// import { nofiticationsListReducer } from './components/containers/UserPages/CommonToAllPages/Dashboard/Notifications/reducer';
// import profileReducer from './App/reducers/profileReducer';

const reducers = combineReducers({
  auth: authReducer,
//   notifications: nofiticationsListReducer,
//   dashboard: dashboardReducer,
//   profile: profileReducer
});

const store = newStore(reducers, {});

let currentToken = store.getState().auth.token;

store.subscribe(() => {
  let previousToken = currentToken;
  currentToken = store.getState().auth.token;

  if (previousToken !== currentToken) {
    setAuthToken(currentToken);
  }
});

export default store;
