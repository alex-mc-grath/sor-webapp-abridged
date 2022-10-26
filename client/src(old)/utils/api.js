import axios from 'axios'
import store from '../store'
//import { showAlertMessage } from '../actions/alertActions'

// create instance of axios
const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// intercept for errors

api.interceptors.response.use(
    res => res,
    err => {

        if(err.response.status === 401)
        {
            store.dispatch({type: 'LOGOUT'});
            throw new Error(err.response.data.error);
        }
        else if(err.response.status === 404)
        {
            throw new Error('server path not found');
        }
        else
        {
            //TODO
            //(showAlertMessage(err.message))(store.dispatch);
        }

        throw new Error(err.response.data.message || err.response.data.error);
    }
)

export default api;
