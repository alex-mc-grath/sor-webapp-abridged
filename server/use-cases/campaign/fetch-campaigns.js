import db from "../../db/mongoDB.js";

export default function makeFetchCampaigns ({campaignDb})
{
    return async function fetchCampaigns({campaignId, token, 
        // organizationId, requestingUserId = null
    })
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
            console.log('else')

            return await campaignDb.findAll()

            // if(isHandler)
            // {
            //     cases = await db.getCollection("categoryPermissions").aggregate([
            //         {$match:{"accountId" : db.objectID(requestingUserId), "statusCode":"ACTIVE"}},
            //         {$lookup:{"from": "reportCases", "localField": "categoryId", "foreignField":"breachCategory", "as":"reportCases"}},
            //         {$unwind:"$reportCases"},
            //         {$match:{"reportCases.organization": db.objectID(organizationId), "reportCases.statusCode": {$ne: "DELETED"} }},
            //         {$replaceRoot: { newRoot: "$reportCases" } },
            //         {$lookup: {"from":"organizations", "localField":"organization", "foreignField":"_id", "as":"organization"}},
            //         {$unwind:"$organization"},
            //         {$lookup: {"from":"users", "localField":"handler", "foreignField":"_id", "as":"handler"}},
            //         {$unwind:{path: "$handler", "preserveNullAndEmptyArrays": true}},
            //         {$lookup: {"from":"users", "localField":"createdBy", "foreignField":"_id", "as":"createdBy"}},
            //         {$unwind:{path: "$createdBy", preserveNullAndEmptyArrays: true} }
            //     ])
            // }
            // else
            // {
            //     cases = await reportCasesDb.findByOrgId(organizationId)
            // }



            // return cases.map((c) => {
            //     return {
            //         "_id": c._id,
            //         "caseType": c.caseTypeCode,
            //         "subject": c.subject,
            //         "isAnonymous": c.isAnonymous,
            //         "company": c.organization.name,
            //         "createdDate":c.createdDate,
            //         "handler": c.handler ? c.handler.contactDetails.firstName + ' ' + c.handler.contactDetails.lastName : null,
            //         "handlerId": c.handler ? c.handler._id : null,
            //         "source": c.sourceCode,
            //         "statusCode": c.statusCode,
            //         "createdBy": c.anonymity === "ANONYMOUS" ? null : (c.createdBy ? c.createdBy.contactDetails.firstName + ' ' + c.createdBy.contactDetails.lastName : null),
            //         "myCase": c.createdBy ? c.createdBy._id.toString() === requestingUserId.toString() : false,
            //         "partiesInvolved":c.partiesInvolved,
            //         "priority": c.priority,
            //         "deadline": c.deadline,
            //         "anonymity": c.anonymity,
            //         "breachCategory": c.breachCategoryOnCreation
            //     }
            // })
        }
    }
}
