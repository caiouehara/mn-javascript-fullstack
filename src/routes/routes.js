import express from 'express'
import breedsController from '../controllers/dogbreads.controller.js'
import clientController from '../controllers/client.controller.js'
import petControllers from '../controllers/pet.controllers.js'

const routes = express.Router()

routes.get('/breed', breedsController.getRandom)
routes.get('/breeds/:id', breedsController.getById)

//don't work find by pk
routes.get('/clients', clientController.findAll)
routes.get('/clients/:id', clientController.findByPk)
routes.post('/clients', clientController.create)
routes.put('/clients/:id', clientController.update)
routes.delete('/clients/:id', clientController.deleteByPk)

routes.post('/pets', petControllers.create)
routes.get('/pets/:clientId/pets', petControllers.findPetsOfClient)

export default routes