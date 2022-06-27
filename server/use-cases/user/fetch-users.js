import makeUser from '../../entities/user/index.js'

export default function makeFetchUsers ({userDb, Id})
{
    return async function fetchUsers({_id = null, username = null, email = null} = {})
    {
        if(_id == null && username == null && email == null) { throw new Error('Either _id, username or email is required') }
        
        const fetchedUsersByQuery = await userDb.find({_id: _id ? Id.convertToObjectID(_id) : null, username, email});
        
        return fetchedUsersByQuery;
    }
}