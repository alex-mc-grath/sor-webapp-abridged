import api from "../../../lib/api"

export const createNewCampaign = async (values) => {

    const formData = new FormData();
    console.log('formData1', formData);
    console.log(values);
    formData.append('campaignName', values.campaignName);
    console.log('formData2', formData);

    // formData.append('anonymity', values.anonymity);

    // for(let i=0;i<values.files?.length;i++)
    // {
    //     formData.append('files', values.files[i]);
    // }
    
    const {data} = await api.patch('/campaigns', formData, {})
    console.log('zoboomafoo',data);
    return data.insertedId
}

export const loadSettings = async ({campaignId})=> {
    console.log('it works, loadSettings')
    await console.log('campaignId', campaignId);

//    const {data} = await api.get('/campaigns/'+campaignId)
   const {data} = await api.get('/campaigns', campaignId)

   return data
}