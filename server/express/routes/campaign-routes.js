import express from 'express';
import {
    getCampaigns, patchCampaigns
} from '../../controllers/campaign/index.js'

export default function makeCampaignRoutes({authMiddleware, makeCallback})
{
    const router = express.Router();

    router.get('/', authMiddleware.auth(), makeCallback(getCampaigns));
    // router.get('/:id', authMiddleware.auth(), makeCallback(getCampaigns));
    router.patch('/:id', authMiddleware.auth(), makeCallback(patchCampaigns));

    return router;
}