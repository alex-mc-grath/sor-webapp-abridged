import api from '../../../utils/api'
import setAuthToken from '../../../utils/setAuthToken'

export const loadUser = () => async (dispatch) => {

    try
    {
        const {data} = await api.get('/auth')

        dispatch({
            type: "USER_LOADED",
            payload: data
        })
    }
    catch(err)
    {
        dispatch({type: "LOGOUT"})
    }
}

export const logOutUser = () => (dispatch) => {
    setAuthToken(null)
    dispatch({type: "LOGOUT"})
}