import db from '../../db/mongoDB.js';
import {fetchCampaigns} from '../../use-cases/campaign/index.js'

export default function makeGetTargetAccountList({fetchCampaigns})
{
    return async function getTargetAccountList(httpRequest)
    {
        try
        {
            console.log('hey dude it works!');
            let campaignId = httpRequest.params.campaignId || null

            let token = httpRequest.params.token || null

            if(!campaignId && !token)
            {
                let user = await db.getCollection('users').find({_id: httpRequest.auth._id})
                user = user[0]
                if(!user){throw new Error('invalid user')}
            }

            let targetAccountList = await db.getCollection('prospectAutomation').find({username: "luc.landreville@gmail.com", count: 10})
                // httpRequest.auth._id
            
            console.log(targetAccountList)

            const toReturn = targetAccountList.map((c) => {

                return {
                    "_id": c._id,
                    "campaignName": c.campaignName,
                    "firstName": c.firstName
                }})


            const campaigns = await fetchCampaigns({campaignId, token})

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {targetAccountList:toReturn}
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