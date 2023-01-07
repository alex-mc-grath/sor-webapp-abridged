import { combineReducers } from 'redux';
import newStore from './utils/redux/newStore';
import authReducer from './app/reducers/authReducer'
import setAuthToken from './utils/setAuthToken';


const reducers = combineReducers({
    auth: authReducer
});

const store = newStore(reducers, {});

//let currentToken = store.getState().auth.token;

/*store.subscribe(() => {

    let previousToken = currentToken;
    currentToken = store.getState().auth.token;

    if(previousToken !== currentToken)
    {
        setAuthToken(currentToken);
    }

})*/

export default store;