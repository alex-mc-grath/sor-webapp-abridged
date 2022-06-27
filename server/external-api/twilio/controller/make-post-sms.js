export default function makePostSMS({getSearch, config, fetchPhoneChat, updatePhoneChat, fetchIndividual, fetchVehicle, addPhoneNumber})
{
    return async function postSMS(httpRequest)
    {
        try
        {
            //validate
            if(httpRequest.body.MessagingServiceSid.trim() !== config.getTwilioServiceSID()) {throw new Error ('unrecognized as twilio request')}
            if(httpRequest.body.AccountSid.trim() !== config.getTwilioCredentialsSID()) {throw new Error ('unrecognized as twilio request')}


            //clean
            const receivedTextMessage = httpRequest.body.Body.trim()
            const fromPhone = httpRequest.body.From.trim()


            //get phone number
            let phoneInfo = await fetchPhoneChat(fromPhone)
            if(phoneInfo.length !== 1) { return {body: 'Accès non autorisé.'}}
            phoneInfo = phoneInfo[0]


            //is this a response to options? if yes continue search
            if(receivedTextMessage in phoneInfo.lastChatOptions)
            {
                let item = phoneInfo.lastChatOptions[receivedTextMessage];
                if(item.type == "individual")
                {
                    let individualData = await fetchIndividual(item._id,"id")
                    await updatePhoneChat({phone: fromPhone, updates:{"lastChatOptions": {}}})
                    return {
                        body: "-Prénom: "+individualData.firstName+
                            "\n\n-Nom: "+individualData.lastName+
                            "\n\n-Date de naissance: "+individualData.birthDate+
                            "\n\n\-# Permis: "+individualData.driverLicenseNumber+
                            "\n\n-# Gouvernement: "+individualData.gouvId+
                            "\n\n-Téléphone: (maison)"+
                                (individualData.phoneNumbers.home?individualData.phoneNumbers.home: 'aucun')
                                +", (cell)"+(individualData.phoneNumbers.cell?individualData.phoneNumbers.cell:'')+
                            "\n\n-Adresse: "+individualData.address+
                            "\n\n-Ville: "+individualData.city+
                            "\n\n-Pays: "+individualData.country+
                            "\n\n-Notes: "+(individualData.notes.policeSearch?'Recherché, ':'')+
                                (individualData.notes.deceased?'Décédé':'')
                    }


                }
                else if(item.type == "vehicle")
                {
                    let vehicleData = await fetchVehicle(item._id,"id")
                    await updatePhoneChat({phone: fromPhone, updates:{"lastChatOptions": {}}})
                    return {
                        body: "-Marque: "+vehicleData.brand+
                            "\n\n-Modèle: "+vehicleData.model+
                            "\n\n-Année: "+vehicleData.assemblyDate+
                            "\n\n-Couleur: "+vehicleData.color+
                            "\n\n-Série du Moteur: "+vehicleData.motorNumber+
                            "\n\n-Série Véhicule: "+vehicleData.vehicleNumber+
                            "\n\n-Type de véhicule: "+vehicleData.vehicleType+
                            "\n\n-Plaque d'immatriculation: "+vehicleData.plateNumber
                    }
                }

                return { body: 'erreur inconue'}
            }


            //is this an admin trying to add a phone number in DB
            if(receivedTextMessage.chatAt(0) === '+')
            {
                if(phoneInfo.userType !== "ADMIN") { return {body: 'Accès non autorisé.'}}
                await addPhoneNumber(receivedTextMessage)
                return {body: 'Le numéro '+receivedTextMessage+'a été ajouté.'}
            }


            //do search
            let getSearchResponse = await getSearch({
                params: {query: receivedTextMessage}
            })


            //return on error
            if(getSearchResponse.statusCode !== 200)
            {
                return {body: getSearchResponse.body.error}
            }


            //check how many found items we have
            const individuals = getSearchResponse.body.individuals
            const vehicles = getSearchResponse.body.vehicles

            if(individuals.length + vehicles.length > 1)
            {
                let counter = 0;
                let lastChatOptions = {};
                let toReturn = "Écrivez le numero de ce que vous recherchez:\n\n";
                for(let i=0;i<individuals.length;i++)
                {
                    counter++
                    lastChatOptions[counter.toString()] = {"type":"individual", "_id":individuals[i]._id}
                    toReturn += counter.toString()+": "+individuals[i].firstName+" "+individuals[i].lastName+" ("+individuals[i]._foundBy+")\n\n";
                }
                for(let i=0;i<vehicles.length;i++)
                {
                    counter++
                    lastChatOptions[counter.toString()] = {"type":"vehicle", "_id":vehicles[i]._id}
                    toReturn += counter.toString()+": vehicle ("+vehicles[i]._foundBy+")\n\n";
                }

                await updatePhoneChat({phone: fromPhone, updates:{"lastChatOptions": lastChatOptions}})

                return { body: toReturn}
            }

            
            //return found individual or vehicle
            if(individuals.length === 1)
            {
                let individualData = individuals[0];

                return {
                    body: "-Prénom: "+individualData.firstName+
                        "\n\n-Nom: "+individualData.lastName+
                        "\n\n-Date de naissance: "+individualData.birthDate+
                        "\n\n\-# Permis: "+individualData.driverLicenseNumber+
                        "\n\n-# Gouvernement: "+individualData.gouvId+
                        "\n\n-Téléphone: (maison)"+
                            (individualData.phoneNumbers.home?individualData.phoneNumbers.home: 'aucun')
                            +", (cell)"+(individualData.phoneNumbers.cell?individualData.phoneNumbers.cell:'')+
                        "\n\n-Adresse: "+individualData.address+
                        "\n\n-Ville: "+individualData.city+
                        "\n\n-Pays: "+individualData.country+
                        "\n\n-Notes: "+(individualData.notes.policeSearch?'Recherché, ':'')+
                            (individualData.notes.deceased?'Décédé':'')
                }
            }
            if(vehicles.length === 1)
            {
                let vehicleData = vehicles[0];

                return {
                    body: "-Marque: "+vehicleData.brand+
                        "\n\n-Modèle: "+vehicleData.model+
                        "\n\n-Année: "+vehicleData.assemblyDate+
                        "\n\n-Couleur: "+vehicleData.color+
                        "\n\n-Série du Moteur: "+vehicleData.motorNumber+
                        "\n\n-Série Véhicule: "+vehicleData.vehicleNumber+
                        "\n\n-Type de véhicule: "+vehicleData.vehicleType+
                        "\n\n-Plaque d'immatriculation: "+vehicleData.plateNumber
                }
            }


            return {body: 'erreur inconue'}

        }
        catch(e)
        {
            console.log(e)
  
            return {
              headers: {
                'Content-Type': 'application/json'
              },
              statusCode: 400,
              body: {
                error: e.message,
              }
            }
        }
    }
}