// import dotenv from 'dotenv';

// function makeConfig()
// {
//     dotenv.config();

//     return Object.freeze(
//     {
//         getPort: () => process.env.PORT || null,
//         getAuthSecret: () => process.env.AUTH_SECRET,
//         getSessionExpireTime: () => process.env.SESSION_EXPIRE_TIME
//     });
// }

// const config = makeConfig();

// export default config;

import dotenv from 'dotenv';

dotenv.config();

export default Object.freeze({
  getPort: () => process.env.PORT || 5000,
  getAuthSecret: () => process.env.AUTH_SECRET,
  getSessionExpireTime: () => process.env.SESSION_EXPIRE_TIME,
  getTwilioAccountSid: () => process.env.TWILIO_SID,
  getTwilioAuthToken: () => process.env.TWILIO_TOKEN,
  getTwilioServiceSID: () => process.env.TWILIO_SERVICE_SID,
  getTwilioCredentialsSID: () => process.env.TWILIO_CREDENTIALS_SID,
  getTwilioCredentialsAuth: () => process.env.TWILIO_CREDENTIALS_AUTH,
  getTwilioFrom: () => process.env.TWILIO_FROM
});
