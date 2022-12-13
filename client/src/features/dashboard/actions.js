import api from "../../lib/api"

export const getDashboardData = async () => {

// below just as reference - to be changed !!

    let campaigns = await api.get('/campaigns')

    // let campaigns = await Promise.all([
    //     api.get('/campaigns'),
    //     api.get('organizations/dashboard/admin'),
    //     api.get('categories/'),
    //     api.get('users/case-handlers'),
    //     api.get('report-cases/all-latest-activity')
    // ]) 
    console.log("campaigns",campaigns)
    return {campaigns: campaigns.data.campaigns}
}