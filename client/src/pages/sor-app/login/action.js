
import api from '../../../lib/api';
import setAuthToken from '../../../_boilerplate/utils/auth/setAuthToken';

export const signIn = ({ email, password }) => async (dispatch) => {
  
    const { data } = await api.post('/auth', {email, password})

    //return the function to call after the login animation ends
    return () => {
      setAuthToken(data.token)

      dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {accountType: data.accountType, _id:data._id}
      })
    }
  
}
