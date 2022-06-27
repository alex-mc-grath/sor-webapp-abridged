
import express from 'express'
import { body } from 'express-validator'
import {postSMS} from '../../controller/index.js'

export default function makeTwilioRoutes({callback}) {
    
    const router = express.Router()

    router.post('/', [
        body("MessagingServiceSid").not().isEmpty(),
        body("AccountSid").not().isEmpty(),
        body("From").not().isEmpty(),
    ], callback(postSMS))

    return router
}
