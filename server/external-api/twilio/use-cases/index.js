import makeSendSMS from './make-send-sms.js'
import twilioClient from '../entities/twilio-client/index.js'

export const sendSMS = makeSendSMS({twilioClient})