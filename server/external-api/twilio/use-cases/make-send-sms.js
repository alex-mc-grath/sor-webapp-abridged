export default function makeSendSMS({twilioClient})
{
    return async function({from, to, body})
    {
        try
        {
            const message = await twilioClient.sendMessage({
                body,
                from,
                to
            })
        }
        catch(e)
        {
            console.log(e);
        }
    }
}