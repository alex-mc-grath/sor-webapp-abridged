import config from '../../../../config/index.js'
import axios from 'axios'
import qs from 'qs'


const sendMessage = async ({body, from, to}) => {
    let data = qs.stringify({
        'Body': body,
        'From': from,
        'To': to 
      });

    let requestConfig = {
        method: 'post',
        url: 'https://api.twilio.com/2010-04-01/Accounts/'+config.getTwilioCredentialsSID()+'/Messages.json',
        headers: { 
          'Authorization': 'Basic '+Buffer.from(config.getTwilioCredentialsSID()+':'+config.getTwilioCredentialsAuth()).toString('base64'), 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };

    axios(requestConfig)
}

export default Object.freeze({
    sendMessage
})