import express from 'express';
import {
    getCampaigns, patchCampaigns, getTargetAccountList
} from '../../controllers/campaign/index.js'

export default function makeCampaignRoutes({authMiddleware, makeCallback})
{
    const router = express.Router();

    router.get('/', authMiddleware.auth(), makeCallback(getCampaigns));
    // router.get('/:id', authMiddleware.auth(), makeCallback(getCampaigns));
    router.patch('/:id', authMiddleware.auth(), makeCallback(patchCampaigns));
    router.get('/prospect-automation', authMiddleware.auth(), makeCallback(getTargetAccountList));

    return router;
}