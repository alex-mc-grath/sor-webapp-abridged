const initialState = {
    accountType: null,
    isAuthenticated: false,
    _id:null,
    loaded: false
}

 const authReducer = (state = initialState, {type, payload}) => {
    switch(type)
    {
        case "USER_LOADED": //{token, accountType, _id}
        case "LOGIN_SUCCESS": 
        case "REGISTER_SUCCESS":
            return {
                ...state, 
                accountType: payload.accountType || null, 
                _id: payload._id || null, 
                isAuthenticated: true,
                loaded: true
            }
        case "LOGOUT":
            return {...state, loaded: true, accountType: null, isAuthenticated: false, _id: null}
        default:
            return state
    }
}

export default authReducer