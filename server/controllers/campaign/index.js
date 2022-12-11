import makeGetCampaigns from './get-campaigns.js'
import {fetchCampaigns} from '../../use-cases/campaign/index.js'
    
export const getCampaigns = makeGetCampaigns({fetchCampaigns})