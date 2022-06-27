export default function makeTwilioCallback({sendSMS, config})
{
    return function twilioCallback(controller)
    {
        return (req, res) => {

            const httpRequest = {
                body: req.body,
                query: req.query,
                params: req.params,
                method: req.method,
                auth: req.auth ? req.auth:null,
                headers: {
                    "Content-Type": req.get('Content-Type'),
                }
            }

            controller(httpRequest)
            .then(httpResponse => {
                if(httpRequest.body.From)
                {
                    sendSMS({
                        "from": config.getTwilioFrom(),
                        "to": httpRequest.body.From.trim(),
                        "body": httpResponse.body
                    })
                }
            })
            .catch(e => {
                if(httpRequest.body.From)
                {
                    sendSMS({
                        "from": config.getTwilioFrom(),
                        "to": httpRequest.body.From.trim(),
                        "body": "Unknown Server Error"
                    })
                }
            })

            res.status(200).send("OK");
        }
    }

}