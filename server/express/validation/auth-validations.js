
import validate from 'express-joi-validate'
import Joi from '@hapi/joi'

const validations = {
    "POST/" : validate({
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    }),

    "GET/": validate({})
}

export default validations;