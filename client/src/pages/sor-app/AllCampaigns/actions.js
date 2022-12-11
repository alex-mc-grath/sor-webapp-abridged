import api from "../../../lib/api";

export const getAllCampaigns = async () => {
    try
    {
        const {data} = await api.get('/campaigns')

        // let campaigns = data.campaigns;
        // let count = 0;
        // console.log("data.campaigns.length", data.campaigns.length)
        
        // store.dispatch({ type: 'OPENED_CASES', payload:{openedReportCases: count} })
        return data
    }
    catch(err)
    {
        console.log(err)
        return []
    }
}