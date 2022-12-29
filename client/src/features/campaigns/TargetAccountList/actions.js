import api from "../../../lib/api"

export const getTargetAccountList = async ({campaignId}) => {

   const {data} = await api.get('/campaigns/prospect-automation', campaignId)

   return data
}
