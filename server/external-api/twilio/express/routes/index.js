
import twilioCallback from '../callback/index.js'
import makeTwilioRoutes from './make-twilio-routes.js'

const twilioRoutes = makeTwilioRoutes({"callback":twilioCallback})

export default twilioRoutes