import makeGetCampaigns from './get-campaigns.js'
import makePatchCampaigns from './patch-campaigns.js'
import {fetchCampaigns} from '../../use-cases/campaign/index.js'
    
export const getCampaigns = makeGetCampaigns({fetchCampaigns})
export const patchCampaigns = makePatchCampaigns({fetchCampaigns})