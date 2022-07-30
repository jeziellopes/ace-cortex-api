import { options } from '@main/config'
import { setupRoutes } from '@main/config/routes.config'
import { log } from '@main/middlewares'
import cors from 'cors'
import express from 'express'

// initialize app
export const app = express()

// cors
app.use(cors(options))

// log
app.use(log)

// json
app.use(express.json())

// initialize routes
setupRoutes(app)
