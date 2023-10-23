import express from 'express'
import breeds from '../controllers/dogbreads.controller.js'

const routes = express.Router()

routes.get('/breed', breeds.getRandom)
routes.get('/breed/:id', breeds.getById)

export default routes