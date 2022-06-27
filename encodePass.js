import {passwordManager} from './server/auth/index.js'

passwordManager.hash('motdepasse').then((result) => console.log(result))