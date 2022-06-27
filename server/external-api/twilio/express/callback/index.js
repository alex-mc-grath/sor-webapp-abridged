import makeTwilioCallabck from './make-twilio-callback.js'
import { sendSMS } from '../../use-cases/index.js'
import config from '../../../../config/index.js'

/*function sendSMS(obj)
{
    console.log("sms sent", obj);
}*/

const twilioCallback = makeTwilioCallabck({sendSMS, config})

export default twilioCallback