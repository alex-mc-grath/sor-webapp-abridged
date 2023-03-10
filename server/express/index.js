import express from 'express'
import makeCallback from './express-callback.js'
import makeAuthMiddleware from './middleware/auth-middleware.js'
import makeAuthRoutes from './routes/auth-routes.js'
import makeUserRoutes from './routes/user-routes.js'
import makeCampaignRoutes from './routes/campaign-routes.js'
import { authManager } from '../auth/index.js'
import prerendernode from 'prerender-node';


export default function makeServer({config = null, indexPath = ''} = {})
{
    const app = express()
    const port = config.getPort() || 5000

    const authMiddleware = makeAuthMiddleware(authManager)

    app.use(express.json({"type":"application/json"}))
    app.use(express.urlencoded({"extended": true, "type":"application/x-www-form-urlencoded"}))


    app.use(prerendernode.set('prerenderToken', 'oNbfNdzw2cBc7db6sEt8'));
    
    app.use("/api/auth", makeAuthRoutes({makeCallback, authMiddleware}))
    app.use("/api/users", makeUserRoutes({makeCallback, authMiddleware}))
    app.use("/api/campaigns", makeCampaignRoutes({makeCallback, authMiddleware}))
    

    // Serve static asset in production
    if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'))
    
        app.get('*', (req, res) => {
        res.sendFile(indexPath)
        res.set('Content-Security-Policy', "default-src 'self'","font-src 'self'","img-src 'self'", "script-src 'self'","style-src 'self'", "frame-src 'self'")
        })
    }


    app.listen(port, () => console.log("Server started on port "+port))

    return app
}