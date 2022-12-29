import db from '../../db/mongoDB.js';
import {fetchCampaigns} from '../../use-cases/campaign/index.js'

export default function makeGetCampaigns({fetchCampaigns})
{
    return async function getCampaigns(httpRequest)
    {
        try
        {
            let campaignId = httpRequest.params.campaignId || null

            let token = httpRequest.params.token || null

            let organizationId = null;

            // let isHandler = false;

            if(!campaignId && !token)
            {
                let user = await db.getCollection('users').find({_id: httpRequest.auth._id})
                user = user[0]
                if(!user){throw new Error('invalid user')}

                // organizationId = user.organization
            }

            const campaigns = await fetchCampaigns({campaignId, token})
            // console.log('testAlex',campaigns.filter(campaign => campaign._id !== campaignId));

            // if(campaignId || token)
            // {
            //     if(campaigns.length === 0)
            //     {
            //         throw new Error('Campaign not found.')
            //     }

            //     let campaign = campaigns[0]

            // }
                
                // if(isHandler)
                // {
                //     if(!reportCase.handler || reportCase.handlerId.toString() !==  httpRequest.auth._id.toString())
                //     {
                //         let allowedAccess = true

                //         let accessHandler = await db.getCollection("caseHandlers").find({reportCaseId: reportCase._id, accountId: db.objectID(httpRequest.auth._id)})
                //         if(accessHandler.length === 0)
                //         {
                //             throw new Error('You do not have access permission to this report case.')
                //         }
                //         else if(accessHandler[0].statusCode !== "ACTIVE")
                //         {
                //             throw new Error('You do not have access permission to this report case.')
                //         }

                //     }
                // }



            //     if(caseId)
            //     {
            //         let lastMessageViewed = await db.getCollection('lastMessageRead').find({reportCase: db.objectID(caseId), user: db.objectID(httpRequest.auth._id)})
            //         lastMessageViewed = lastMessageViewed[0]

            //         let lastDate = new Date(0)
            //         if(lastMessageViewed)
            //         {
            //             lastDate = new Date(lastMessageViewed.lastDate)
            //         }

            //         let unreadCount = await db.getCollection('messages').aggregate([
            //             {$match:{reportCase: db.objectID(caseId), writtenBy: {$ne: db.objectID(httpRequest.auth._id)}, dateTime: {$gt: lastDate} }},
            //             {$group:{_id: "unread", count: {$count: {}}}}
            //         ])
            //         unreadCount = unreadCount[0]

            //         if(unreadCount)
            //         {
            //             reportCases[0].unreadCount = unreadCount.count;
            //         }
            //         else
            //         {
            //             reportCases[0].unreadCount = 0;
            //         }
            //     }
            //     else
            //     {
            //         reportCases[0].unreadCount = 0;
            //     }
            // }
            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {campaigns:campaigns}
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