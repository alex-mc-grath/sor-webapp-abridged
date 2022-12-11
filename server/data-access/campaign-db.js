
export default function makeCampaignDb({makeDb})
{

    const findAll = async () => {
        const db = await makeDb();
        const result = await db.getCollection('campaigns').find({})
        // const result = await db.getCollection('campaigns').aggregate([
        //     {$match: {}},
        //     {$lookup: {"from":"organizations", "localField":"organization", "foreignField":"_id", "as":"organization"}},
        //     {$unwind:"$organization"},
        //     {$lookup: {"from":"users", "localField":"handler", "foreignField":"_id", "as":"handler"}},
        //     {$unwind:{path: "$handler", "preserveNullAndEmptyArrays": true}},
        //     {$lookup: {"from":"users", "localField":"createdBy", "foreignField":"_id", "as":"createdBy"}},
        //     {$unwind:"$createdBy"}
        // ])

        return result
    }

    // const findByOrgId = async (organizationId) => {
        
    //     const db = await makeDb();
    //     const result = await db.getCollection('reportCases').aggregate([
    //         {$match: {organization: db.objectID(organizationId), statusCode: {$ne: "DELETED"}}},
    //         {$lookup: {"from":"organizations", "localField":"organization", "foreignField":"_id", "as":"organization"}},
    //         {$unwind:"$organization"},
    //         {$lookup: {"from":"users", "localField":"handler", "foreignField":"_id", "as":"handler"}},
    //         {$unwind:{path: "$handler", "preserveNullAndEmptyArrays": true}},
    //         {$lookup: {"from":"users", "localField":"createdBy", "foreignField":"_id", "as":"createdBy"}},
    //         {$unwind:{path: "$createdBy", preserveNullAndEmptyArrays: true} }
    //     ])

    //     return result
    // }

    const findById = async (id) => {
        const db = await makeDb();
        const result = await db.getCollection('campaigns').findById(id)
        // const result = await db.getCollection('campaigns').aggregate([
        //     {$match: {_id: db.objectID(id)}},
        //     {$lookup: {"from":"organizations", "localField":"organization", "foreignField":"_id", "as":"organization"}},
        //     {$unwind:"$organization"},
        //     {$lookup: {"from":"users", "localField":"handler", "foreignField":"_id", "as":"handler"}},
        //     {$unwind:{path: "$handler", "preserveNullAndEmptyArrays": true}},
        //     {$lookup: {"from":"users", "localField":"createdBy", "foreignField":"_id", "as":"createdBy"}},
        //     {$unwind:{path: "$createdBy", preserveNullAndEmptyArrays: true} },
        //     {$lookup: {"from":"categories", "localField":"breachCategory", "foreignField":"_id", "as":"breachCategory"}},
        //     {$unwind:{path: "$breachCategory", preserveNullAndEmptyArrays: true} }
        // ])

        return result
    }

    // const findByToken = async (token) => {
    //     const db = await makeDb();
    //     const result = await db.getCollection('reportCases').aggregate([
    //         {$match: {reportCaseToken: token}},
    //         {$lookup: {"from":"organizations", "localField":"organization", "foreignField":"_id", "as":"organization"}},
    //         {$unwind:"$organization"},
    //         {$lookup: {"from":"users", "localField":"handler", "foreignField":"_id", "as":"handler"}},
    //         {$unwind:{path: "$handler", "preserveNullAndEmptyArrays": true}},
    //         {$lookup: {"from":"users", "localField":"createdBy", "foreignField":"_id", "as":"createdBy"}},
    //         {$unwind:{path: "$createdBy", preserveNullAndEmptyArrays: true} },
    //         {$lookup: {"from":"categories", "localField":"breachCategory", "foreignField":"_id", "as":"breachCategory"}},
    //         {$unwind:{path: "$breachCategory", preserveNullAndEmptyArrays: true} }
    //     ])

    //     return result
    // }

    // const findAllCasesHandlerList = async ({_id}) => {
    //     const db = await makeDb();
    //     const list = await db.getCollection('caseHandlers').aggregate([
    //         {$match:{reportCaseId: db.objectID(_id)}},
    //         {$lookup:{from: "users", localField:"accountId", foreignField:"_id", as:"account"}},
    //         {$unwind:"$account"}
    //     ])


    //     return list
    // }
    
    // const insertReportCase = async ({_id, loggedInUser, breachType, dateOfBreach, followupActions, otherBreachType, placeOfBreach, justification, timeOfBreach}) => {
    //     const db = await makeDb();
    //     let createdBy = db.objectID(_id);
    //     let deadline = new Date();
    //     deadline.setDate(deadline.getDate() + 7);

    //     let now = new Date()

    //     let {insertedId} = await db.getCollection('reportCases').insert({
    //         "caseTypeCode" : (breachType === "OTHER") ? otherBreachType : breachType,
    //         "organization" : db.objectID(loggedInUser.organization.toString()),
    //         "createdDate" : now,
    //         "lastUpdateDate" : now,
    //         "monthCode": now.getFullYear()+"-"+now.getMonth().toString().padStart(2,"0"),
    //         "createdBy" :createdBy,
    //         "sourceCode" : "EMAIL",
    //         "statusCode" : "ONGOING",
    //         "subject" : (breachType === "OTHER") ? otherBreachType : breachType,
    //         "handler" : null,
    //         "description" : placeOfBreach,
    //         "dateOfBreach": new Date(dateOfBreach),
    //         "deadline" : deadline,
    //         "priority" : "LOW",
    //         "followupActions": followupActions,
    //         "isResolved": false
    //     })

    //     return insertedId
    // }

    return Object.freeze({
        findAll,
        findById,
        // findAllCasesHandlerList,
        // insertReportCase,
        // findByOrgId,
        // findByToken
    });
}
