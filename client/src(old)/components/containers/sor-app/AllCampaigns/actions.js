import api from "../../../../utils/api";
import store from "../../../../store"

export const getAllCampaigns = async () => {
    try
    {
        api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE3NDIwOTI3NGY2ZGRmZDJlNmExZTkiLCJhY2NvdW50VHlwZSI6IkFETUlOIiwiaWF0IjoxNjcwNzczNTM0LCJleHAiOjE2NzQzNzM1MzR9.ZW2C1_nYp6CnoGmDKhQq2iFLcaTBIgcgw4c23daQL9M'
        const {data} = await api.get('/campaigns')

        let campaigns = data.campaigns;
        let count = 0;
        console.log("data.campaigns.length", data.campaigns.length)
        
        // store.dispatch({ type: 'OPENED_CASES', payload:{openedReportCases: count} })
        return data
    }
    catch(err)
    {
        console.log(err)
        return []
    }
}