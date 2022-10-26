import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LoadingIndicator from '../../bp-components/LoadingIndicator'

export const PrivateRoute = ({element, accountType}) => {

    const auth = useSelector((state) => state.auth)

    if(!auth.loaded) return <LoadingIndicator/>

    if(auth.isAuthenticated && (!accountType || auth.accountType === accountType)) return element;

    console.log("auth",auth)
    return <Navigate to='/app/login' replace={true}/>
}