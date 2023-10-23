import express from 'express'
import breedsController from '../controllers/dogbreads.controller.js'
import clientController from '../controllers/client.controller.js'

const routes = express.Router()

routes.get('/breed', breedsController.getRandom)
routes.get('/breeds/:id', breedsController.getById)

routes.get('/clients', clientController.findAll)

export default routes