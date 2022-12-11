import jwt from 'jsonwebtoken'

export default function makeJWTAuth(config)
{
    
    const makeAuthToken = ({_id = null, accountType = null} = {}) => {

        //validate input
        if(!_id){throw new Error('_id is required when creating an auth token')}
        if(!accountType){throw new Error('accountType is required when creating an auth token')}
        if( (['ADMIN', 'SUPER_ADMIN', 'CASE_HANDLER', 'WHISTLEBLOWER']).indexOf(accountType) < 0 ){throw new Error('accountType is invalid for authentication')}

        //create token
        let token = jwt.sign({_id, accountType}, config.getAuthSecret(), {
            "expiresIn": config.getSessionExpireTime()
        });

        return token;
    }

    const makeCustomToken = ({payload, expiresIn=null}) => {
        let params = {}
        if(expiresIn !== null){params.expiresIn = expiresIn}

        let token = jwt.sign(payload, config.getAuthSecret(), params)

        return token
    }

    const decodeCustomToken = (token) => {
        try
        {
            return jwt.verify(token,config.getAuthSecret());
        }
        catch(err)
        {
            return null
        }
    }


    const authenticate = (token) => {

        let verified = null;

        try
        {
            verified = jwt.verify(token,config.getAuthSecret());
        }
        catch(err)
        {
            throw new Error('Authentication token is invalid or has expired');
        }

        if(!verified._id || !verified.accountType)
        {
            throw new Error("JWT token has the wrong structure");
        }

        return Object.freeze({
            _id: verified._id,
            accountType: verified.accountType
        });
        
    }

    
    return Object.freeze({
        makeAuthToken,
        authenticate,
        makeCustomToken,
        decodeCustomToken
    })
}