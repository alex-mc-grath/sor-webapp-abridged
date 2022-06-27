
export default function makeUserDb({makeDb})
{
    const find = async ({_id = null, username = null, email = null} = {}) => {

        let searchQuery = {};
        if(_id !== null){ searchQuery["_id"] = _id }
        if(username !== null){ searchQuery["username"] = username}
        if(email !== null){ searchQuery["email"] = email}

        const db = await makeDb();
        const result = await db.getCollection('users').find(searchQuery);
        
        return result;
    }

    return Object.freeze({
        find
    });
}