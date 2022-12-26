import db from "../../db/mongoDB.js";

export default function makePatchCampaigns ({})
{
    return async function patchCampaigns(httpRequest)
    {
        try
        {
            console.log('pakimofoo',httpRequest);

            // quick hardcoded
            // httpRequest.body = {_id:"608ffb712dc2ba2375596ea6",campaignName:'SwiftNewFunnelCampaign1'}

            if(httpRequest.body._id)
            {
                await db.getCollection('campaigns').update({_id: db.objectID(httpRequest.body._id)}, {$set:{campaignName:(httpRequest.body.campaignName)}})
                // await db.getCollection('campaigns').update({_id: db.objectID(httpRequest.body._id)}, {$set:{campaignName: campaignName}})

                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 200,
                    body: {"success": true}
                }
            }
            // if(httpRequest.body._id)
            // {
            //     let caseHandler = await db.getCollection('caseHandlers').find({_id: httpRequest.body.accessId})
            //     caseHandler = caseHandler[0]
            //     if(!caseHandler){throw new Error('invalid permission ID')}

                

            //     await db.getCollection('caseHandlers').update({_id: db.objectID(httpRequest.body.accessId)}, {$set:{statusCode: accessCode}})

            //     return {
            //         headers: {
            //             'Content-Type': "application/json"
            //         },
            //         statusCode: 200,
            //         body: {"success": true}
            //     }
            // }
            // else if(httpRequest.body.caseId && httpRequest.body.accountId)
            // {

            //     return {
            //         headers: {
            //             'Content-Type': "application/json"
            //         },
            //         statusCode: 200,
            //         body: {"success": true}
            //     }
            // }
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