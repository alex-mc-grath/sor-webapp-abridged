export default function makeGetAuthInfo ({fetchUsers})
{
    return async function getAuthInfo(httpRequest)
    {
        try
        {
            const users = await fetchUsers({_id: httpRequest.auth._id})

            if(users.length == 0)
            {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 404,
                    body: {code: "AUTH_ERROR", error: "User not found"}
                }
            }

            if(users.length > 1)
            {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 401,
                    body: {code: "AUTH_ERROR", error: "Multiple users found. Please contact customer support."}
                }
            }


            const user = users[0]


            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {email: user.email}
            }
        }
        catch(e)
        {
            console.log(e);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    code: e.stack.split(":")[0],
                    error: e.message
                }
            }
        }
    }
}