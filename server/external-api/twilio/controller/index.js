import makePostSMS from './make-post-sms.js'
import {getSearch} from '../../../controllers/search/index.js'
import config from '../../../config/index.js'
import {fetchPhoneChat, updatePhoneChat, addPhoneNumber} from '../../../use-cases/phone/index.js'
import {fetchIndividual} from '../../../use-cases/individual/index.js'
import {fetchVehicle} from '../../../use-cases/vehicle/index.js'

export const postSMS = makePostSMS({getSearch, config, fetchPhoneChat, updatePhoneChat, fetchIndividual, fetchVehicle, addPhoneNumber })