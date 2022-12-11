import makeFetchCampaigns from "./fetch-campaigns.js";

import {campaignDb} from '../../data-access/index.js'

export const fetchCampaigns = makeFetchCampaigns({campaignDb})