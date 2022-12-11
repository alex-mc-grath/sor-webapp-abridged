import makeUserDb from './user-db.js'
import makeCampaignDb from './campaign-db.js'
import mongoDB from '../db/mongoDB.js'


const makeDb = async () => {

    if(!mongoDB.isConnected())
    {
        try
        {
            await mongoDB.connect()
        }
        catch(err)
        {
            throw new Error("Could not connect to DB: "+err.message)
        }
    }

    return mongoDB
}


export const userDb = makeUserDb({makeDb})
export const campaignDb = makeCampaignDb({makeDb});