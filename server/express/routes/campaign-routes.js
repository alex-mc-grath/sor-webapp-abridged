import express from 'express';
import {
    getCampaigns
} from '../../controllers/campaign/index.js'

export default function makeCampaignRoutes({authMiddleware, makeCallback})
{
    const router = express.Router();

    router.get('/', authMiddleware.auth(), makeCallback(getCampaigns));

    return router;
}