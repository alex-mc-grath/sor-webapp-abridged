import { combineReducers } from 'redux';
import newStore from '../../_boilerplate/utils/redux/newStore'
import authReducer from '../context/reducers/auth'
import setAuthToken from '../../_boilerplate/utils/auth/setAuthToken';



const reducers = combineReducers({
    auth: authReducer
});

const store = newStore(reducers, {});

let currentToken = store.getState().auth.token;

store.subscribe(() => {

    let previousToken = currentToken;
    currentToken = store.getState().auth.token;

    if(previousToken !== currentToken)
    {
        setAuthToken(currentToken);
    }

})

export default store;




