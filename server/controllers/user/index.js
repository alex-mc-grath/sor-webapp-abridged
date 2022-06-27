import makeAuthUser from './auth-user.js'
import makeGetUsers from './get-users.js'
import makeGetAuthInfo from './get-auth-info.js'
import {fetchUsers} from '../../use-cases/user/index.js'
import {passwordManager, authManager} from '../../auth/index.js'

export const authUser = makeAuthUser({fetchUsers, passwordManager, authManager})
export const getUsers = makeGetUsers({fetchUsers})
export const getAuthInfo = makeGetAuthInfo({fetchUsers})