import db from "../../db/mongoDB.js";

export default function makeFetchCampaigns ({campaignDb})
{
    return async function fetchCampaigns({campaignId, token})
    {
        let campaigns = null;
        
        if(campaignId != null || token != null)
        {
            if(campaignId)
            {
                campaigns = await campaignDb.findById(campaignId)
            }
            else
            {
                campaigns = await campaignDb.findByToken(token)
            }

            return campaigns.map((c) => {

                return {
                    "_id": c._id,
                    "campaignName": c.campaignName
                    // "caseType": c.caseTypeCode,
                    // "subject": c.subject,
                    // "isAnonymous": c.isAnonymous,
                    // "company": c.organization.name,
                    // "createdDate":c.createdDate,
                    // "handler": c.handler ? c.handler.contactDetails.firstName + ' ' + c.handler.contactDetails.lastName : null,
                    // "handlerId": c.handler ? c.handler._id : null,
                    // "source": c.sourceCode,
                    // "statusCode": c.statusCode,
                    // "createdBy": c.anonymity === "ANONYMOUS" ? null : (c.createdBy ? c.createdBy.contactDetails.firstName + ' ' + c.createdBy.contactDetails.lastName : null),
                    // "lastUpdateDate": c.lastUpdateDate,
                    // "description": c.description,
                    // "myCase": c.createdBy ? c.createdBy._id.toString() === requestingUserId.toString() : false,
                    // "partiesInvolved":c.partiesInvolved,
                    // "priority": c.priority,
                    // "deadline": c.deadline,
                    // "anonymity": c.anonymity,
                    // "breachCategory": c.breachCategory ? c.breachCategory.name : c.breachCategoryOnCreation,
                    // "breachCategoryId": c.breachCategory ?  c.breachCategory._id : null
                }
            })
        }
        else
        {
            return await campaignDb.findAll()
        }
    }
}
