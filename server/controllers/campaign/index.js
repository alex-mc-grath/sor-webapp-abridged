import makeGetCampaigns from './get-campaigns.js'
import makePatchCampaigns from './patch-campaigns.js'
import makeGetTargetAccountList from './get-target-account-list.js'
import {fetchCampaigns} from '../../use-cases/campaign/index.js'
    
export const getCampaigns = makeGetCampaigns({fetchCampaigns})
export const patchCampaigns = makePatchCampaigns({fetchCampaigns})
export const getTargetAccountList = makeGetTargetAccountList({fetchCampaigns})