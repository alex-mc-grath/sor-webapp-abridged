const initialState = {
    _id: null,
    accountType: null,
    isAuthenticated: false,
    email:null,
    exp: null, //jwt "exp" parameter which is expiration time in unicode,
    loaded: false,
    firstName: null,
    lastName: null
}

 const authReducer = (state = initialState, {type, payload}) => {

    switch(type)
    {
        case "USER_LOADED": //{token, accountType}
        case "LOGIN_SUCCESS": 
        case "REGISTER_SUCCESS":
            let newState = {
                ...state, 
                accountType: payload.accountType || null, 
                email: payload.email || null, 
                isAuthenticated: true,
                loaded: true,
                _id: payload._id || null,
                firstName: payload.firstName || null,
                lastName: payload.lastName || null
            }

            delete newState["whistlaw"]

            return newState

        case "LOGOUT":
            let newLogoutState = {...state, accountType: null, isAuthenticated: false, loaded: true, _id: null}
            delete newLogoutState["whistlaw"]
            return newLogoutState
        case "MANAGE":
            let current = {...state}
            delete current["whistlaw"]
            current.token = payload.adminToken
            return {
                ...state,
                whistlaw: current,
                accountType: payload.accountType || null, 
                email: payload.email || null, 
                isAuthenticated: true,
                loaded: true,
                _id: payload._id || null,
                firstName: payload.firstName || null,
                lastName: payload.lastName || null,
                organization: payload.organization || null
            }
        case "UNMANAGE":
            if(state.whistlaw)
            {
                let oldState = state.whistlaw
                delete oldState["token"]
                return oldState
            }
            return state
        case "CHANGE_NAME":
            return {
                ...state,
                firstName: payload.firstName || null,
                lastName: payload.lastName || null,
            }
        default:
            return state
    }
}

export default authReducer