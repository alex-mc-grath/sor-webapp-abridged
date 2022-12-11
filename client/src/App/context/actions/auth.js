import api from '../../../lib/api'

export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await api.get('/auth');

    dispatch({
      type: 'USER_LOADED',
      payload: data,
    });
  } catch (err) {
    //do nothing
  }
};

export const signOut = () => (dispatch) => {
  try {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
    // dispatch({ type: USER_CASES_RESET })

    document.location.href = '/login';
  } catch (error) {}
};
